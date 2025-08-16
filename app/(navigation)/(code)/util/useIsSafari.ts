import { useEffect, useState } from "react";

export default function useIsSafari() {
  const [isSafari, setSafari] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const isSafari = navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") <= -1;
      setSafari(isSafari);
    }
  }, [mounted]);

  return isSafari;
}
