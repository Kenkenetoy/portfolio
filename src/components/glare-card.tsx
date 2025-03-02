import { useRef } from "react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface GlareCardProps {
  children: ReactNode;
  className?: string;
}

export const GlareCard = ({ children, className }: GlareCardProps) => {
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement | null>(null);
  const state = useRef({
    glare: {
      x: 50,
      y: 50,
    },
    background: {
      x: 50,
      y: 50,
    },
    rotate: {
      x: 0,
      y: 0,
    },
  });
  const containerStyle: React.CSSProperties = {
    "--m-x": "50%",
    "--m-y": "50%",
    "--r-x": "0deg",
    "--r-y": "0deg",
    "--bg-x": "50%",
    "--bg-y": "50%",
    "--duration": "300ms",
    "--foil-size": "100%",
    "--opacity": "0",
    "--radius": "48px",
    "--easing": "ease",
    "--transition": "var(--duration) var(--easing)",
  } as React.CSSProperties;

  const backgroundStyle: React.CSSProperties = {
    "--step": "5%",
    "--foil-svg": `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E")`,
    "--pattern": "var(--foil-svg) center/100% no-repeat",
    "--rainbow":
      "repeating-linear-gradient(0deg, rgb(255,119,115,0.9) calc(var(--step) * 1), rgba(255,237,95,0.9) calc(var(--step) * 2), rgba(168,255,95,0.9) calc(var(--step) * 3), rgba(131,255,247,0.9) calc(var(--step) * 4), rgba(120,148,255,0.9) calc(var(--step) * 5), rgb(216,117,255,0.9) calc(var(--step) * 6), rgb(255,119,115,0.9) calc(var(--step) * 7)) 0% var(--bg-y)/200% 700% no-repeat",
    "--diagonal":
      "repeating-linear-gradient(128deg, #0e152e 0%, hsl(180,10%,55%) 4%, hsl(180,10%,65%) 8%, #0e152e 16%) var(--bg-x) var(--bg-y)/250% no-repeat",
    "--shade":
      "radial-gradient(farthest-corner circle at var(--m-x) var(--m-y), rgba(255,255,255,0.05) 15%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.2) 100%) var(--bg-x) var(--bg-y)/300% no-repeat",
    backgroundBlendMode: "hue, hue, hue, overlay",
  } as React.CSSProperties;

  const updateStyles = () => {
    if (refElement.current) {
      const { background, rotate, glare } = state.current;

      refElement.current?.style.setProperty("--m-x", `${glare.x}%`);
      refElement.current?.style.setProperty("--m-y", `${glare.y}%`);
      refElement.current?.style.setProperty("--r-x", `${rotate.x}deg`);
      refElement.current?.style.setProperty("--r-y", `${rotate.y}deg`);
      refElement.current?.style.setProperty("--bg-x", `${background.x}%`);
      refElement.current?.style.setProperty("--bg-y", `${background.y}%`);
    }
  };

  return (
    <div
      ref={refElement}
      className="relative isolate w-fit transition-transform duration-300 ease-out will-change-transform [contain:layout_style] [perspective:600px] hover:scale-105"
      style={containerStyle}
      onPointerEnter={() => {
        isPointerInside.current = true;
        if (refElement.current) {
          setTimeout(() => {
            if (isPointerInside.current) {
              refElement.current?.style.setProperty("--duration", "0s");
            }
          }, 300);
        }
      }}
      onPointerLeave={() => {
        isPointerInside.current = false;
        if (refElement.current) {
          refElement.current.style.removeProperty("--duration");
          refElement.current?.style.setProperty("--r-x", `0deg`);
          refElement.current?.style.setProperty("--r-y", `0deg`);
        }
      }}
      onPointerMove={(event) => {
        const rotateFactor = 0.4;
        const rect = event.currentTarget.getBoundingClientRect();
        const position = {
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        };
        const percentage = {
          x: (100 / rect.width) * position.x,
          y: (100 / rect.height) * position.y,
        };
        const delta = {
          x: percentage.x - 50,
          y: percentage.y - 50,
        };

        const { background, rotate, glare } = state.current;

        background.x = 50 + percentage.x / 4 - 12.5;
        background.y = 50 + percentage.y / 3 - 16.67;
        rotate.x = -(delta.x / 3.5);
        rotate.y = delta.y / 2;
        rotate.x *= rotateFactor;
        rotate.y *= rotateFactor;
        glare.x = percentage.x;
        glare.y = percentage.y;

        updateStyles();
      }}
    >
      <div className="grid h-full origin-center overflow-hidden rounded-[var(--radius)] border border-slate-800 transition-transform delay-[var(--delay)] duration-[var(--duration)] ease-[var(--easing)] will-change-transform [transform:rotateY(var(--r-x))_rotateX(var(--r-y))] hover:filter-none hover:[--duration:200ms] hover:[--easing:linear] hover:[--opacity:0.6]">
        <div className="grid h-full w-full mix-blend-soft-light [clip-path:inset(0_0_0_0_round_var(--radius))] [grid-area:1/1]">
          <div className={cn("h-full w-full bg-slate-950", className)}>
            {children}
          </div>
        </div>
        <div className="will-change-background grid h-full w-full opacity-[var(--opacity)] mix-blend-soft-light transition-all delay-[var(--delay)] duration-[var(--duration)] ease-[var(--easing)]" />
        <div
          className="will-change-background after:grid-area-[inherit] after:bg-repeat-[inherit] after:bg-attachment-[inherit] after:bg-origin-[inherit] after:bg-clip-[inherit] relative grid h-full w-full opacity-[var(--opacity)] mix-blend-color-dodge transition-opacity [background-blend-mode:hue_hue_hue_overlay] [background:var(--pattern),_var(--rainbow),_var(--diagonal),_var(--shade)] [clip-path:inset(0_0_1px_0_round_var(--radius))] [grid-area:1/1] after:bg-[inherit] after:mix-blend-exclusion after:content-[''] after:[background-blend-mode:soft-light,_hue,_hard-light] after:[background-position:center,_0%_var(--bg-y),_calc(var(--bg-x)*_-1)_calc(var(--bg-y)*_-1),_var(--bg-x)_var(--bg-y)] after:[background-size:var(--foil-size),_200%_400%,_800%,_200%]"
          style={{ ...backgroundStyle }}
        />
      </div>
    </div>
  );
};
