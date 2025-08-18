"use client";

import { ChevronDownIcon } from "@raycast/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Button } from "./button";

export function NavigationActions({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "h-[50px] flex items-center justify-between fixed top-0 right-scrollbar-offset gap-2 z-10 left-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
