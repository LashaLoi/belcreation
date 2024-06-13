"use client";

import { useEffect } from "react";

import DesktopView from "@/app/components/Header/DesktopView";

import { usePathname } from "next/navigation";
import { useOpen } from "@/app/components/Header/hooks";
import MobileView from "@/app/components/Header/MobileView";

export default function Header() {
  const { open, handleToggle, handleClose } = useOpen();
  const pathname = usePathname();

  useEffect(() => {
    handleClose();
  }, [pathname]);

  return (
    <DesktopView
      // @ts-ignore
      pathname={pathname}
      isMenuOpen={open}
      toggleMenu={handleToggle}
    >
      {/*// @ts-ignore*/}
      <MobileView pathname={pathname} isMenuOpen={open} />
    </DesktopView>
  );
}
