import { useEffect, useState } from "react";

export default function usePngClipboardSupported() {
  const [supported, setSupported] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setSupported(window.navigator && window.navigator.clipboard && typeof ClipboardItem === "function");
    }
  }, [mounted]);

  return supported;
}
