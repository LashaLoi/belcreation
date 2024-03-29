"use client";

import { useState } from "react";

export default function Gallery() {
  const [currentPath, setCurrentPath] = useState("");

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <img
            src={currentPath}
            loading="lazy"
            alt={currentPath}
            className="inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          />
          <div className="modal-action">
            <button className="btn">Закрыть</button>
          </div>
        </form>
      </dialog>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {[
            10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
            27, 28, 29, 30, 31, 31,
          ].map((_, i) => {
            const path = `/${i + 10}.jpg`;

            return (
              <div
                key={path}
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80 cursor-pointer"
                onClick={() => {
                  if (!window) {
                    return;
                  }

                  (window as any).my_modal_5.showModal();

                  setCurrentPath(path);
                }}
              >
                <img
                  src={path}
                  loading="lazy"
                  alt={path}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
