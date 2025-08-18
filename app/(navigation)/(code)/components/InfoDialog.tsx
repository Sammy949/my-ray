import { Button } from "@/components/button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/dialog";
import { Shortcut } from "@/components/kbd";
import { SocialFooter } from "@/components/social-footer";
import useHotkeys from "@/utils/useHotkeys";
import { Info02Icon } from "@raycast/icons";
import { useCallback, useState } from "react";
import usePngClipboardSupported from "../util/usePngClipboardSupported";

export function InfoDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen((prev) => !prev), [setIsOpen]);
  const pngClipboardSupported = usePngClipboardSupported();

  useHotkeys("shift+/", toggleOpen);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="transparent" className="hidden md:flex gap-2">
          <Info02Icon /> <span className="hidden sm:inline">About</span>
        </Button>
      </DialogTrigger>
      <DialogContent size="large">
        <div className="flex gap-8">
          <div className="flex flex-col gap-3 flex-1 text-[13px] text-gray-11 leading-relaxed">
            <DialogTitle>About</DialogTitle>
            <p>My Ray is a lightweight tool for creating clean and beautiful screenshots of your code.</p>
            <p>
              Pick a theme from a range of syntax colors and backgrounds, the language of your code and choose between
              light or dark mode.
            </p>
            <p>
              Customize the padding and when you’re ready, click export image in the top-right corner to save the image
              as a png, svg or share a link to your code.
            </p>
            <p>You can also change the image resolution in the export menu.</p>
            <h2 className="text-base font-medium text-gray-12">Contribute</h2>
            <p>
              The project used is Open Source at{" "}
              <a href="https://github.com/raycast/ray-so" className="text-gray-12 underline underline-offset-2">
                the official Raycast GitHub repository
              </a>
              . But then, this debloated version, is my doing.
            </p>
            <p>
              If you have any questions or feedback, please write to me on{" "}
              <a href="https://x.com/I_am_SamY01" className="text-gray-12 underline underline-offset-2">
                𝕏
              </a>{" "}
              or{" "}
              <a href="mailto:feedback+urahsamuel0202@gmail.com" className="text-gray-12 underline underline-offset-2">
                send me an email
              </a>
              .
            </p>
            <SocialFooter referral="my-ray" />
          </div>

          <div className="w-px h-full bg-gray-a3" />

          <div className="flex-1 flex flex-col gap-2">
            <h2 className="font-medium -mt-[3px]">Shortcuts</h2>
            <div className="flex flex-col gap-4">
              <Shortcut keys={["F"]}>Focus text editor</Shortcut>
              <Shortcut keys={["Esc"]}>Unfocus text editor</Shortcut>
              <Shortcut keys={["C"]}>Change colors</Shortcut>
              <Shortcut keys={["B"]}>Toggle background</Shortcut>
              <Shortcut keys={["D"]}>Toggle dark mode</Shortcut>
              <Shortcut keys={["N"]}>Toggle line numbers</Shortcut>
              <Shortcut keys={["P"]}>Change padding</Shortcut>
              <Shortcut keys={["L"]}>Select language</Shortcut>
              <Shortcut keys={["⌥", "click"]}>Highlight line</Shortcut>
              <Shortcut keys={["⌥", "shift", "F"]}>Format code</Shortcut>
              <Shortcut keys={["⌘", "K"]}>Toggle Export Menu</Shortcut>
              <Shortcut keys={["⌘", "S"]}>Save PNG</Shortcut>
              <Shortcut keys={["⌘", "⇧", "S"]}>Save SVG</Shortcut>
              {pngClipboardSupported && <Shortcut keys={["⌘", "C"]}>Copy image</Shortcut>}
              <Shortcut keys={["⌘", "⇧", "C"]}>Copy URL</Shortcut>
              <Shortcut keys={["?"]}>Open shortcuts</Shortcut>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
