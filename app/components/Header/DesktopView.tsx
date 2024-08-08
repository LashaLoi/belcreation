import React from "react";

import Link from "next/link";
import Image from "next/image";

import DesktopLink from "@/app/components/DesktopLink";
import { Button } from "@/app/components/Button";
import { items } from "@/app/components/Header/constants";

export default function DesktopView({
  pathname,
  isMenuOpen,
  toggleMenu,
  children,
}: {
  pathname: string;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 z-[100] relative">
      <div className="grid items-center grid-cols-2 lg:grid-cols-3">
        <ul className="items-center hidden space-x-8 lg:flex">
          {items.map(({ path, text }) => (
            <DesktopLink
              path={path}
              text={text}
              key={path}
              isActive={pathname === path}
            />
          ))}
        </ul>
        <Link
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center lg:mx-auto"
        >
          <Image src="/logo.jpg" alt="logo" height={34} width={34} />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            Belcreation
          </span>
        </Link>
        {/* <Link
          href="/register"
          className="items-center hidden ml-auto space-x-8 lg:flex"
        >
          <Button>Регистрация</Button>
        </Link> */}
        <div className="ml-auto lg:hidden">
          <button
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                />
              </svg>
            ) : (
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            )}
          </button>
          {children}
        </div>
      </div>
    </div>
  );
}
