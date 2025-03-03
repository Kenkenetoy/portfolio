import { Image } from "@heroui/image";

import { FloatingDockDemo } from "@/components/floater";
import { siteConfig } from "@/config/site";

export const DraggableMockupPhone = () => {
  return (
    <div className="select-none mockup-phone cursor-grab active:cursor-grabbing">
      <div className="camera" />
      <div className="display">
        <div
          aria-label="Scrollable content"
          className="h-[600px] p-4 space-y-4 overflow-y-scroll artboard artboard-demo phone-1 bg-gray-50 dark:bg-neutral-900 overflow-x-hidden"
          role="button"
          tabIndex={0}
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
