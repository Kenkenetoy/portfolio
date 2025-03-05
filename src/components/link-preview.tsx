/* eslint-disable prettier/prettier */
"use client";
import { useEffect, useState } from "react";
import { Image } from "@heroui/image";
import { Tooltip } from "@heroui/tooltip";

export const LinkPreview = ({
  demoUrl,
  children,
  isDisabled = !demoUrl, // Allow external control, default to disabled if no demoUrl
}: {
  demoUrl?: string;
  githubUrl?: string;
  children: React.ReactNode;
  isDisabled?: boolean;
}) => {
  const [previewSrc, setPreviewSrc] = useState("");

  useEffect(() => {
    if (!demoUrl) return;

    const isLocal = window.location.hostname === "localhost";

    if (isLocal) {
      setPreviewSrc("/228041565_1204885213317442_2861452606248897561_n.webp");

      return;
    }

    const cachedPreview = localStorage.getItem(`preview-${demoUrl}`);

    if (cachedPreview) {
      setPreviewSrc(cachedPreview);

      return;
    }

    const apiURL = `https://api.microlink.io/?url=${encodeURIComponent(
      demoUrl
    )}&screenshot=true&meta=false&embed=screenshot.url`;

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        if (data?.screenshot?.url) {
          setPreviewSrc(data.screenshot.url);
          localStorage.setItem(`preview-${demoUrl}`, data.screenshot.url);
        }
      })
      .catch(() =>
        setPreviewSrc("/228041565_1204885213317442_2861452606248897561_n.webp")
      );
  }, [demoUrl]);

  return (
    <Tooltip
      closeDelay={0}
      content={
        <div className={`max-w-48 ${isDisabled ? "pointer-events-none" : ""}`}>
          <Image
            alt="preview"
            className="object-cover"
            height={150}
            src={previewSrc}
            width={200}
          />
        </div>
      }
      delay={1000}
      isDisabled={isDisabled}
      showArrow={true}
    >
      {children}
    </Tooltip>
  );
};
