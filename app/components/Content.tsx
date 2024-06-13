"use client";

import Link from "next/link";
import { Button } from "./Button";
import Image from "next/image";
import Slider from "react-slick";
import React from "react";
import { FadeIn } from "@/app/components/FadeIn";

const settings = {
  focusOnSelect: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  pauseOnHover: true,
  slidesToScroll: 1,
  initialSlide: 0,
  infinite: true,
  dots: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        infinite: true,
        dots: true,
      },
    },
  ],
};

export const Content = () => (
  <>
    <FadeIn
      initial={{
        opacity: 0,
        x: 100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.5,
      }}
      className="bg-white z-10 relative"
    >
      <div className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-[#FECC17] sm:text-4xl sm:leading-none">
            Расселение
          </h2>
        </div>
      </div>

      <div className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 z-20 relative">
        <div className="max-w-screen-md sm:mx-auto">
          <h1 className="mb-4 text-2xl  text-gray-700 font-bold text-center">
            Домики 🏠
          </h1>
          <p className="mb-6 sm:text-xl text-lg text-gray-700">
            На территории нашего выезда есть домики, в которые мы расселяем по
            гендерным признакам: девушки в одном доме, парни в другом. Домики
            оснащены электричеством.
          </p>
          <p className="mb-6 sm:text-xl text-lg text-gray-700">
            Если вы едете с супругом/супругой, а также с детьми, и ваша семья
            состоит из 10 человек, то наш выезд не может предоставить вам
            отдельную комнату в домике, так как каждая комната вмещает в себя 10
            спальных мест.
          </p>
          <p className="mb-10  text-xl text-gray-700 font-bold">
            Места в домиках ограничены!
          </p>
          <h1 className="mb-4 text-2xl  text-gray-700 font-bold text-center">
            Палатки 🏕️
          </h1>
          <p className="mb-4 sm:text-xl text-lg text-gray-700">
            Также, на нашем выезде есть специально огражденная и освещенная
            территория для палаточного городка, где вы сможете безопасно
            расположить вашу палатку.
          </p>
        </div>
      </div>

      <div className="sm:w-5/6 w-full mx-auto p-4 mb-10">
        <Slider {...settings}>
          <div>
            <Image src="/tent2.JPG" alt="tent2" width={400} height={400} />
          </div>
          <div>
            <Image src="/tent1.JPG" alt="tent2" width={400} height={400} />
          </div>
          <div>
            <Image src="/tent3.JPG" alt="tent2" width={400} height={400} />
          </div>
        </Slider>
      </div>

      <Image
        src="/pic3.png"
        height={300}
        width={300}
        alt="pic1"
        className="mx-auto"
      />
    </FadeIn>
    <FadeIn
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.5,
      }}
      className="bg-white mt-16"
    >
      <div className="p-4 mb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-[#F3A3B0] sm:text-4xl sm:leading-none">
            Твое время
          </h2>
          <p className="mb-4 sm:text-xl text-lg text-gray-700">
            Бог каждого человека наделил особым даром. В нашем выезде, каждый
            сможет поделиться своим талантом! Это может быть рисование, пение,
            танцы, сценка, гимнастическое представление и многое другое. Также,
            на «Твоё время» будут присутствовать жюри и зрители, которые выберут
            двух победителей, которым и будут вручены призы!
          </p>
        </div>
      </div>
      <div className="sm:w-3/4 w-full mx-auto p-4">
        <Slider {...settings}>
          <div>
            <Image src="/time.JPG" alt="tent2" width={400} height={400} />
          </div>
          <div>
            <Image src="/time2.JPG" alt="tent2" width={400} height={400} />
          </div>
          <div>
            <Image src="/time3.JPG" alt="tent2" width={400} height={400} />
          </div>
        </Slider>
      </div>

      <Image
        src="/pic2.png"
        height={300}
        width={300}
        alt="pic3"
        className="mx-auto"
      />
    </FadeIn>
    <FadeIn
      initial={{
        opacity: 0,
        y: -100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.5,
      }}
      className="bg-white "
    >
      <div className="p-4 mb-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-[#FECC17] sm:text-4xl sm:leading-none">
            Детская программа
          </h2>
          <p className="mb-4 sm:text-xl text-lg text-gray-700">
            Бог каждого человека наделил особым даром. В нашем выезде, каждый
            сможет поделиться своим талантом! Это может быть рисование, пение,
            танцы, сценка, гимнастическое представление и многое другое. Также,
            на «Твоё время» будут присутствовать жюри и зрители, которые выберут
            двух победителей, которым и будут вручены призы!
          </p>
        </div>
      </div>
      <Image
        src="/children.avif"
        height={300}
        width={300}
        alt="pic3"
        className="mx-auto"
      />
      <div className="flex justify-center mt-10">
        <Link href="/register">
          <Button>Подробнее</Button>
        </Link>
      </div>
    </FadeIn>

    <FadeIn
      initial={{
        opacity: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.5,
      }}
      className="bg-white "
    >
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="30.jpg"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="33.jpg"
            alt="office content 2"
          />
        </div>
        <div className="font-light text-gray-500 sm:text-lg ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
            Командные игры
          </h2>
          <p className="mb-4">
            В нашем выезде участники делятся по командам, где принять участие
            может каждый! Командные игры - это время, где каждый учится работать
            сообща, поддерживать, помогать друг другу. Участники учатся
            выстраивать отношения друг с другом, что даст отличный опыт для
            реальной жизни.
          </p>
        </div>
      </div>
    </FadeIn>
    <FadeIn
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.5,
      }}
      className="bg-white "
    >
      <div className="py-8 px-4 mx-auto max-w-screen-md lg:py-16 lg:px-6 text-gray-900">
        <div className="flex flex-wrap justify-center sm:mb-20 mb-10">
          <Image src={"/blob-1.PNG"} height={120} width={120} alt={""} />
          <Image src={"/blob-2.PNG"} height={120} width={120} alt={""} />
          <Image src={"/blob-3.PNG"} height={120} width={120} alt={""} />
        </div>
        <div>
          <h2 className="mb-4 text-4xl tracking-tight font-bold text-[#F3A3B0]">
            ЧТО НУЖНО ВЗЯТЬ С СОБОЙ НА ВЫЕЗД?
          </h2>
          <p className="mb-4 ">
            Мы предоставляем туалеты, а также холодную и горячую воду в душевых
            кабинках, трёхразовое питание, а также небольшое кафе, где вы
            сможете за небольшую плату купить мороженое или батончик.
          </p>
          <div className="text-xl font-bold text-[#FECC17] mt-10 mb-6">
            Для проживания в домиках вам необходимы:
          </div>
          <div className="mb-4 gap-y-4 flex flex-col">
            <div className="">Простынь для матраса, своё одеяло и подушка</div>
            <hr />
            <div className="">Зубная щётка, паста</div>
            <hr />
            <div className="">Полотенце</div>
            <hr />
            <div className="">Шампунь / гель для душа</div>
            <hr />
            <div className="">Средства личной гигиены</div>
            <hr />
            <div className="">Средства от комаров</div>
            <hr />
            <div className="">Тёплая и спортивная одежда</div>
            <hr />
            <div className="">Головной убор</div>
            <hr />
            <div className="">Библия, тетрадь, ручка</div>
            <hr />
          </div>
          <p className="mb-4 font-extrabold text-[#30548B]">
            Информация для девушек: Выезд не предоставляет фен!
          </p>
        </div>
      </div>
    </FadeIn>
    <Link href="/register" className="w-full flex justify-center mb-4">
      <Button>Регистрация</Button>
    </Link>
  </>
);
