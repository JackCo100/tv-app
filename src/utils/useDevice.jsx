import { useEffect, useState } from "react";

export const DEVICE = {
  MOBILE: "mobile",
  TABLET: "tablet",
  LAPTOP: "laptop",
  DESKTOP: "desktop",
};
export const useDevice = () => {
  const [device, setDevice] = useState(DEVICE.MOBILE);

  const handleResize = () => {
    if (window.innerWidth < 550) {
      setDevice(DEVICE.MOBILE);
    }
    if (window.innerWidth >= 550 && window.innerWidth < 768) {
      setDevice(DEVICE.TABLET);
    }
    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setDevice(DEVICE.LAPTOP);
    }
    if (window.innerWidth >= 1024) {
      setDevice(DEVICE.DESKTOP);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      handleResize();
      window.dispatchEvent(new Event("resize"));
    }, 500);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return device;
};
