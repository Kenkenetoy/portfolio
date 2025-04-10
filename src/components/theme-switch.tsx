/* eslint-disable prettier/prettier */
import { FC, useState, useEffect } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@heroui/switch";
import clsx from "clsx";
import { useTheme } from "@heroui/use-theme";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light",
    onChange: () => setTheme(theme === "light" ? "dark" : "light"),
  });

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  // Prevent Hydration Mismatch
  if (!isMounted) return <div className="w-6 h-6" />;

  return (
    <Component
      aria-label={isSelected ? "Switch to dark mode" : "Switch to light mode"}
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-foreground",
              "pt-px",
              "px-0",
              "mx-0 ",
            ],
            classNames?.wrapper
          ),
        })}
      >
        <div className="items-center hidden gap-2 pr-0 rounded-full md:pr-4 dark:flex border-1 border-default-foreground">
          <span className="p-3 rounded-full bg-default-foreground">
            <MoonFilledIcon className="text-default" size={22} />
          </span>
          <span className="hidden md:block">Dark Mode</span>
        </div>
        <div className="flex items-center gap-2 pr-0 rounded-full md:pr-4 dark:hidden border-1 border-default-foreground">
          <span className="p-3 rounded-full bg-default-foreground">
            <SunFilledIcon className="text-default" size={22} />
          </span>
          <span className="hidden md:block">Light Mode</span>
        </div>
      </div>
    </Component>
  );
};
