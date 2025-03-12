/* eslint-disable prettier/prettier */
import { Link } from "@heroui/link";

import { TextHoverEffect } from "./text-hover-effect";

import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <div className="space-y-4">
      <footer className="p-10 space-y-4 overflow-hidden bg-default-50 rounded-2xl text-default-foreground h-96">
        <div className="h-40 footer sm:footer-horizontal">
          <nav>
            <h6 className="w-48 font-bold text-large">
              Where aesthetics & functionality meet
            </h6>
          </nav>

          {/* Explore Section */}
          <nav>
            <h6 className="font-bold text-large text-danger">Explore</h6>
            <div className="z-10 flex flex-col gap-2">
              {siteConfig.navItems.map((item) => (
                <Link key={item.label} color="foreground" href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Follow Me Section */}
          <nav>
            <h6 className="font-bold text-large text-primary">Follow Me</h6>
            <div className="z-10 flex flex-col gap-2">
              {siteConfig.socials.map(({ link, icon: Icon, title }) => (
                <Link
                  key={link}
                  className="gap-2"
                  color="foreground"
                  href={link}
                  target="_blank"
                >
                  <Icon size={24} />
                  <span>{title}</span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Follow Me Section */}
          <nav>
            <div className="z-10 flex flex-col gap-2">
              {siteConfig.socials.map(({ link, icon: Icon, title }) => (
                <Link
                  key={link}
                  className="gap-2"
                  color="foreground"
                  href={link}
                  target="_blank"
                >
                  <Icon size={24} />
                  <span>{title}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Footer Branding */}
        <p className="z-0 w-full scale-105 ">
          <TextHoverEffect text={siteConfig.name} />
        </p>
      </footer>

      <span className="flex justify-between text-base">
        <p>
          {siteConfig.name} ©{new Date().getFullYear()} - Privacy Policy
        </p>
        <p>
          {siteConfig.location.province}, {siteConfig.location.country}
        </p>
      </span>
    </div>
  );
};

export default Footer;
