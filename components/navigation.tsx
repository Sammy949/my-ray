"use client";

import { ChevronDownIcon } from "@raycast/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Button } from "./button";

export function Navigation() {
  return (
    <nav className="flex items-center gap-3 h-[50px] pl-4 pr-5 bg-gray-2 text-white w-full fixed z-10">
      {/* Left side - simplified since we don't need navigation between features */}
      <div className="flex-1" />

      {/* Right side - just the About dropdown */}
      <div className="flex items-center gap-2">
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
