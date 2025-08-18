import { BrandGithubIcon, BrandXIcon, RaycastLogoNegIcon } from "@raycast/icons";

const socialLinks = [
  {
    href: "https://github.com/Sammy949",
    label: "GitHub",
    icon: BrandGithubIcon,
  },
  {
    href: "https://x.com/I_am_SamY01",
    label: "X",
    icon: BrandXIcon,
  },
];

export function SocialFooter({ referral = "my-ray" }: { referral?: string }) {
  return (
    <div className="pt-2 mt-auto">
      <div className="flex items-center gap-2 mt-2 justify-between">
        <a
          href={`https://samy01.netlify.app/#ref=${referral}`}
          className="flex items-center gap-1.5 text-gray-12 group"
        >
          {/* <RaycastLogoNegIcon className="w-4 h-4 text-brand" /> */}
          <span className="text-[13px] font-medium group-hover:underline">Made by SamY</span>
        </a>
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-9 hover:text-gray-11 transition-colors"
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
