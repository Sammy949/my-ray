"use client";

import { useRouter, useSelectedLayoutSegments } from "next/navigation";

import {
  BrandGithubIcon,
  BrandSlackIcon,
  BrandXIcon,
  BrandYoutubeIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  RaycastLogoNegIcon,
} from "@raycast/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import Link from "next/link";
import { cn } from "@/utils/cn";
import CodeImagesIcon from "@/app/assets/code-images.svg";
// Remove all deleted feature icon imports
// import IconMakerIcon from "@/app/assets/icon-maker.svg";
// import SnippetExplorerIcon from "@/app/assets/snippet-explorer.svg";
// import PresetExplorerIcon from "@/app/assets/preset-explorer.svg";
// import QuicklinkExplorerIcon from "@/app/assets/quicklink-explorer.svg";
// import PromptExplorerIcon from "@/app/assets/prompt-explorer.svg";
// import ThemeExplorerIcon from "@/app/assets/theme-explorer.svg";
import { Button } from "./button";

// Simplified links array with only Code Images feature
const links = [
  {
    href: "/",
    label: "Code Images",
    description: "Create beautiful images of your code",
    icon: CodeImagesIcon,
  },
  // All other features removed
];

export function Navigation() {
  const router = useRouter();
  const segments = useSelectedLayoutSegments();
  const segment = segments[0] || "(code)";
  const showBackButton = segments.find((s) => s === "shared") ? segments.length > 1 : segments.length > 2;
  const activeLink = links.find((link) => (segment === "(code)" ? links[0] : link.href.includes(segment))) || links[0];

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
      </div>

      <div className="flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2">
          <RaycastLogoNegIcon className="w-6 h-6" />
          <span className="font-semibold text-sm">ray.so</span>
        </Link>
      </div>

      <div className="flex-1" />

      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="transparent" size="medium" className="text-gray-11 hover:text-white">
              <BrandGithubIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="https://github.com/raycast/extensions" target="_blank" rel="noopener noreferrer">
                Extensions
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="https://github.com/raycast/raycast-themes" target="_blank" rel="noopener noreferrer">
                Themes
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="https://github.com/raycast/raycast-snippets" target="_blank" rel="noopener noreferrer">
                Snippets
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="https://github.com/raycast/raycast-quicklinks" target="_blank" rel="noopener noreferrer">
                Quicklinks
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="https://github.com/raycast/raycast-prompts" target="_blank" rel="noopener noreferrer">
                Prompts
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="https://github.com/raycast/raycast-presets" target="_blank" rel="noopener noreferrer">
                Presets
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="transparent" size="medium" className="text-gray-11 hover:text-white">
              <BrandSlackIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="https://raycast.com/slack" target="_blank" rel="noopener noreferrer">
                Join our Slack
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="transparent" size="medium" className="text-gray-11 hover:text-white">
              <BrandXIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="https://x.com/raycastapp" target="_blank" rel="noopener noreferrer">
                Follow us on X
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="transparent" size="medium" className="text-gray-11 hover:text-white">
              <BrandYoutubeIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="https://www.youtube.com/@raycastapp" target="_blank" rel="noopener noreferrer">
                Watch on YouTube
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="transparent" size="medium" className="text-gray-11 hover:text-white">
              <ChevronDownIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="/about">About</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
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
