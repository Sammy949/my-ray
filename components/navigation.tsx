"use client";

import { useRouter, useSelectedLayoutSegments } from "next/navigation";

import {
  BrandGithubIcon,
  BrandSlackIcon,
  BrandXIcon,
  BrandYoutubeIcon,
  ChevronLeftIcon,
  RaycastLogoNegIcon,
} from "@raycast/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import Link from "next/link";
import { cn } from "@/utils/cn";
import CodeImagesIcon from "@/app/assets/code-images.svg";
import { Button } from "./button";

// Simplified navigation with only code images feature
const links = [
  {
    href: "/",
    label: "Code Images",
    description: "Create beautiful images of your code",
    icon: CodeImagesIcon,
  },
];

export function Navigation() {
  const router = useRouter();
  const segments = useSelectedLayoutSegments();
  const segment = segments[0] || "(code)";
  const showBackButton = segments.find((s) => s === "shared") ? segments.length > 1 : segments.length > 2;
  const activeLink = links[0]; // Always code images since it's the only feature

  return (
    <nav className="flex items-center gap-3 h-[50px] pl-4 pr-5 bg-gray-2 text-white w-full fixed z-10">
      <div
        className={cn(
          "flex items-center gap-3 transition-transform ease-in-out",
          showBackButton ? "translate-x-0" : "-translate-x-10",
        )}
      >
        <Button
          asChild
          className={cn(
            "rounded-full shadow-none w-6 h-6 bg-gray-4 hover:bg-gray-5 text-gray-12",
            showBackButton ? "opacity-100 scale-100" : "opacity-0 scale-75",
          )}
        >
          <Link
            href={`/${segment}`}
            aria-label="Home"
            aria-disabled={!showBackButton}
            tabIndex={showBackButton ? 0 : -1}
          >
            <ChevronLeftIcon className="w-4 h-4 shrink-0" />
          </Link>
        </Button>

        {/* Simplified navigation - just show the code images feature */}
        <div className="flex items-center gap-2">
          {activeLink.icon && <activeLink.icon className="w-6 h-6" />}
          <span className="text-[15px] font-medium">{activeLink.label}</span>
        </div>
      </div>
    </nav>
  );
}

export function NavigationActions({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "h-[50px] flex items-center justify-end fixed top-0 right-scrollbar-offset gap-2 z-10 left-44",
        className,
      )}
    >
      {children}
    </div>
  );
}
