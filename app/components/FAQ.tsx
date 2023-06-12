"use client";

import Link from "next/link";
import { useState, type PropsWithChildren } from "react";

type ItemProps = PropsWithChildren<{
  title: string;
}>;

const Item: React.FC<ItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center">
          <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>{" "}
              Часто задаваемые вопросы:
            </h2>
          </div>
        </div>
        <div className="space-y-4">
          <Item title="Будет ли горячая вода на лагере?">
            Да! И холодная тоже! Также будут хорошо оборудованные туалеты.
          </Item>
          <Item title="Со скольки и до скольки лет можно ехать в лагерь?">
            Наш лагерь не имеет возрастных ограничений! Сколько бы лет вам ни
            было, мы ждём вас!
          </Item>
          <Item title="Что входит в оплату за лагерь?">
            Трёхразовое питание, свет, вода, призы и сама территория.
          </Item>
          <Item title="Я еду с детьми, будет ли для них какая-то программа?">
            ДА!
          </Item>
          <Item title="Как добраться до лагеря?">
            Если вы едете с другого города на своём транспорте, вы можете сразу
            ехать на площадку?? По адресу …. Если же у вас нет возможности самим
            доехать, в 10??? По адресу Смоленская 28 автобус заберёт вас до
            пункта назначения.{" "}
          </Item>
          <Item title="Могу ли я приехать не на все дни?">
            Если вы едете с другого города на своём транспорте, вы можете сразу
            ехать на площадку?? По адресу …. Если же у вас нет возможности самим
            доехать, в 10??? По адресу Смоленская 28 автобус заберёт вас до
            пункта назначения.{" "}
          </Item>
          <div className="h-16"></div>
          <Link href="/register" className="flex items-center justify-center">
            <button className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-teal-500 rounded-xl group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-teal-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-teal-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                Регистрация
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
