/* eslint-disable prettier/prettier */
import { IconDownload, IconLink, IconMail } from "@tabler/icons-react";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import { Link } from "@heroui/link";
import { Image } from "@heroui/image";

import { DraggableMockupPhone } from "./DraggableMockupPhone";
import { GlareCard } from "./glare-card";
import { ShareModal } from "./modal-for-links";
import { FloatingDock } from "./floating-dock";

import { siteConfig } from "@/config/site"; // Import siteConfig directly

const links = siteConfig.socials.map((social) => ({
  title: social.title,
  icon: <social.icon className="w-full h-full text-default-foreground" />,
  href: social.link,
}));

const HeroSection: React.FC = () => {
  return (
    <div className="h-full w-full bg-background dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex flex-col justify-center items-center">
      <div
        className="absolute inset-0 flex items-center justify-center bg-background"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, transparent 20%, black 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, transparent 20%, black 75%)",
        }}
      />

      <div className="z-10 flex flex-col justify-between w-full h-full">
        {/* Top Section */}
        <div className="flex flex-col items-center justify-center w-full h-24 transition-colors ease-in-out border-default-foreground border-b-1 duration-250">
          <div className="grid items-center w-full grid-cols-3 px-4 font-medium place-items-end">
            <p className="w-32 justify-self-start">
              {"// Design, Code, Execute"}
            </p>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex items-center justify-center h-full gap-12 font-bold text-center">
          <div>
            <GlareCard>
              <DraggableMockupPhone />
            </GlareCard>
          </div>

          <section className="flex flex-col justify-center space-y-12 max-w-[36rem]">
            <div className="justify-center inline-block max-w-3xl space-y-8 text-center">
              <div className="space-y-2">
                <p className="text-xl font-normal">
                  Hi, I am {siteConfig.name} from {siteConfig.location.province}
                </p>
                <h1 className="font-serif font-medium uppercase text-8xl text-default-foreground">
                  {siteConfig.hero_big}
                </h1>
                <p className="text-xl font-normal">{siteConfig.hero_small}</p>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mx-auto w-fit">
                <ShareModal
                  className="gap-2"
                  color="secondary"
                  radius="full"
                  size="lg"
                  variant="ghost"
                >
                  <span className="text-lg ">Contact</span>
                  <span>
                    <IconLink />
                  </span>
                </ShareModal>

                <Button
                  radius="full"
                  size="lg"
                  variant="ghost"
                  onPress={() => {
                    const link = document.createElement("a");

                    link.href =
                      "https://drive.google.com/uc?export=download&id=1IED6anEob_8QUZd1MjLJJanHRPIc8aV7";
                    link.target = "_blank";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <span className="text-lg ">Resume</span>
                  <span>
                    <IconDownload />
                  </span>
                </Button>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-center w-full h-24 transition-colors ease-in-out border-default-foreground border-t-1 duration-250">
          <div className="grid items-center w-full grid-cols-3 px-4 font-medium place-items-end">
            <p className="w-32 justify-self-start">
              {"// Design, Code, Execute"}
            </p>

            <FloatingDock items={links} mobileClassName="translate-y-20" />

            {/* Email Section */}
            <div className="flex items-center gap-2 pr-4 transition-colors ease-in-out rounded-full border-default duration-250 border-1">
              <div className="p-3 transition-colors ease-in-out rounded-full bg-default-foreground text-default">
                <IconMail />
              </div>
              <Tooltip
                content={
                  `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.second}` ? (
                    <Link
                      isExternal
                      showAnchorIcon
                      anchorIcon={<IconLink size={20} />}
                      className="flex flex-col p-2 space-y-2"
                      color="foreground"
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.second}`}
                      isBlock={true}
                      size="sm"
                      target="_blank"
                    >
                      <span>
                        <Image
                          alt={`Email preview`}
                          className="z-0 object-cover w-full h-full"
                          height={200}
                          src={`https://api.microlink.io/?url=${encodeURIComponent(
                            `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.second}`
                          )}&screenshot=true&meta=false&embed=screenshot.url`}
                          width={200}
                        />
                      </span>
                      <span className="w-48 overflow-hidden text-ellipsis">
                        {`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.second}`}
                      </span>
                    </Link>
                  ) : (
                    "No Preview Available"
                  )
                }
                shadow="md"
                showArrow={true}
              >
                <Link
                  isExternal
                  anchorIcon={<IconLink size={20} />}
                  className="gap-2 w-fit"
                  color="foreground"
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email.second}`}
                  target="_blank"
                >
                  {siteConfig.email.second}
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
