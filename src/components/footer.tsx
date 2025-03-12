/* eslint-disable prettier/prettier */
import { Link } from "@heroui/link";

import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="p-10 bg-default text-base-content rounded-xl">
      <div className="footer sm:footer-horizontal">
        <nav>
          <h6 className="footer-title">
            Where aesthetics & functionality meet
          </h6>
        </nav>

        {/* Explore Section */}
        <nav>
          <h6 className="footer-title">Explore</h6>
          <div className="flex flex-col gap-2">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.label}
                className="hover:underline"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Follow Me Section */}
        <nav>
          <h6 className="footer-title">Follow Me</h6>
          <div className="grid grid-flow-col gap-4">
            {siteConfig.socials.map(({ link, icon: Icon }) => (
              <Link key={link} href={link} target="_blank">
                <Icon size={24} />
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Footer Branding */}
      <div className="relative w-full h-full mt-6">
        <p className="w-full text-center text-[calc(100%/10)] font-bold">
          {siteConfig.name}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
