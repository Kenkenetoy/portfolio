import { useRef, useState, MouseEvent, KeyboardEvent } from "react";
import { Image } from "@heroui/image";
import { FloatingDockDemo } from "@/components/floater";
import { siteConfig } from "@/config/site";

export const DraggableMockupPhone = () => {
  const phoneRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!phoneRef.current) return;
    setIsDragging(true);
    setStartY(e.clientY);
    setScrollTop(phoneRef.current.scrollTop);
    phoneRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !phoneRef.current) return;
    const deltaY = startY - e.clientY;

    phoneRef.current.scrollTop = scrollTop + deltaY;
  };

  const handleMouseUp = () => {
    if (!phoneRef.current) return;
    setIsDragging(false);
    phoneRef.current.style.scrollBehavior = "smooth";
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!phoneRef.current) return;
    if (e.key === "ArrowDown") phoneRef.current.scrollTop += 20;
    if (e.key === "ArrowUp") phoneRef.current.scrollTop -= 20;
  };

  return (
    <div
      className="select-none mockup-phone cursor-grab active:cursor-grabbing"
      onMouseLeave={handleMouseUp}
    >
      <div className="camera" />
      <div className="display">
        <div
          ref={phoneRef}
          aria-label="Scrollable content"
          className="h-[600px] p-4 space-y-4 overflow-y-scroll artboard artboard-demo phone-1 bg-gray-50 dark:bg-neutral-900 overflow-x-hidden"
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Image
            alt="Woman listening to music"
            className="object-cover pointer-events-none select-none"
            draggable={false}
            src="https://heroui.com/images/hero-card.jpeg"
          />
          <div>
            <p className="text-2xl text-neutral-900 dark:text-white">
              {siteConfig.name}
            </p>
            <p className="text-lg text-neutral-700 dark:text-gray-300">
              {siteConfig.role}
            </p>
          </div>
          <div className="pointer-events-auto">
            <FloatingDockDemo />
          </div>
        </div>
      </div>
    </div>
  );
};
