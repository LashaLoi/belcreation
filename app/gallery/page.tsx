"use client";

import { useState } from "react";

export default function Gallery() {
  const photos = Array(32);
  const [currentPhoto, setCurrentPhoto] = useState("");

  const handleClick = (item: string) => {
    if (!window) {
      return;
    }

    (window as any).my_modal_5.showModal();

    setCurrentPhoto(item);
  };

  const handleClickOutside = () => {
    setCurrentPhoto("");
  };

  return (
    <>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <p className="py-4">
            <img className="h-auto max-w-full rounded-lg" src={currentPhoto} />
          </p>
          <div className="modal-action">
            <button className="btn" onClick={handleClickOutside}>
              Закрыть
            </button>
          </div>
        </form>
      </dialog>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {[
          10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
          27, 28, 29, 30, 31, 31,
        ].map((_, i) => {
          const path = `/${i + 10}.jpg`;

          return (
            <div key={i}>
              <img
                onClick={() => handleClick(path)}
                className="h-auto max-w-full rounded-lg"
                src={path}
                alt={path}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
