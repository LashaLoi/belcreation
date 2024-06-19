"use client";

import { Button } from "../components/Button";
import { useSubmit } from "@/app/register/hooks";
import { Input } from "@/app/components/Input";
import { Textarea } from "@/app/components/Textarea";
import { Select } from "@/app/components/Select";
import { Checkbox } from "@/app/components/Checkbox";
import Image from "next/image";
import React from "react";
import { FadeIn } from "@/app/components/FadeIn";

export default function Register() {
  const { onSubmit, isChild, isMerried, register, error, loading } =
    useSubmit();

  return (
    <FadeIn className="min-h-screen bg-gray-100 flex items-center justify-center overflow-x-hidden">
      <div className="sm:p-4 p-0">
        {error && (
          <div className="alert alert-error mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>
              Что-то пошло не так, перезагрузите страницу и попробуйте снова
            </span>
          </div>
        )}
        <div>
          <h2 className="font-bold text-3xl text-[#30548B] p-4 sm:block flex justify-center items-center text-center">
            Регистрация на BELCREATION
          </h2>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="w-full flex flex-col items-center justify-center">
              <p className="text-xl font-bold text-[#FECC17]">
                19-24 августа (6 дней)
              </p>

              <h2 className="text-xl mt-10 mb-4 text-[#F3A3B0]">
                ДОБРОВОЛЬНОЕ ПОЖЕРТВОВАНИЕ
              </h2>

              <div className="flex flex-col justify-center items-center text-gray-600">
                <p>
                  от 0-3 лет <span className="font-bold">бесплатно</span>
                </p>
                <p>
                  <span className="font-bold">210Р</span> - за одного человека в
                  домике
                </p>
                <p className="mb-4">
                  <span className="font-bold">150Р</span> - за одного человека в
                  палатке
                </p>

                <p>
                  семья <span className="font-bold">(от 5 человек):</span>
                </p>

                <p>
                  <span className="font-bold">150Р</span> - за одного человека в
                  домике
                </p>
                <p>
                  <span className="font-bold">100р</span> - за одного человека в
                  палатке
                </p>
              </div>

              <Image
                height={400}
                width={600}
                src={"/camp2.jpeg"}
                alt={"camp"}
              />
            </div>
            <div className="lg:col-span-2">
              <form
                className="grid gap-4 gap-y-4 text-sm grid-cols-1 md:grid-cols-5"
                onSubmit={onSubmit}
              >
                <div className="md:col-span-5 mt-4">
                  <Input
                    label={"Фамилия и имя"}
                    register={register}
                    registerName={"fullName"}
                    required
                  />
                </div>
                <div className="md:col-span-5">
                  <Input
                    label={"Дата рождения"}
                    required
                    register={register}
                    registerName={"age"}
                  />
                </div>
                <div className="md:col-span-5">
                  <Input
                    label={"Номер телефона"}
                    register={register}
                    registerName={"phone"}
                    required
                  />
                </div>
                <div className="md:col-span-5">
                  <Input
                    label={"Церковь"}
                    register={register}
                    registerName={"church"}
                    required
                  />
                </div>
                <div className="md:col-span-5">
                  <Input
                    label={"Город"}
                    register={register}
                    registerName={"city"}
                    required
                  />
                </div>
                <div className="md:col-span-5 flex flex-col">
                  <Select
                    options={[
                      "Нужно место в палатке",
                      "Своя палатка",
                      "В домике",
                    ]}
                    label={"Расселение"}
                    register={register}
                    registerName={"house"}
                  />
                </div>
                <div className="md:col-span-5">
                  <Input
                    label={" Хочу участвовать в «Твое время»"}
                    register={register}
                    registerName={"youtime"}
                  />
                  <p className="text-gray-500 mt-2">
                    <span className="text-red-300">*</span>большая просьба, до
                    лагеря скачать необходимую музыку на флешку, или взять
                    нужный вам реквизит для вашего номера
                  </p>
                </div>
                <div className="md:col-span-5">
                  <Checkbox
                    label={"Еду с супругой / супругом"}
                    id="merried"
                    register={register}
                    registerName={"merried"}
                  />
                </div>
                {isMerried && (
                  <>
                    <div className="md:col-span-5">
                      <Textarea
                        label={"Укажите фамилию и имя"}
                        register={register}
                        registerName={"merriedInfo"}
                        required
                      />
                    </div>
                    <div className="md:col-span-5">
                      <Input
                        label={"Укажите дату рождения"}
                        register={register}
                        registerName={"merriedAge"}
                        required
                      />
                    </div>
                  </>
                )}
                <div className="md:col-span-5">
                  <Checkbox
                    label={"Еду с детьми"}
                    id="child"
                    register={register}
                    registerName={"child"}
                  />
                  <p className="text-gray-500 mt-2">
                    <span className="text-red-300">*</span> внимание! дети до 14
                    лет только в сопровождении родителей! с 15 до 18 лет должна
                    быть доверенность от родителей на детей.
                  </p>
                </div>
                {isChild && (
                  <>
                    <div className="md:col-span-5">
                      <Textarea
                        label={"Укажите имя / имена"}
                        register={register}
                        registerName={"childInfo"}
                        required
                      />
                    </div>
                    <div className="md:col-span-5">
                      <Input
                        label={"Укажите даты рождения"}
                        register={register}
                        registerName={"childAge"}
                        required
                      />
                    </div>
                    <div className="md:col-span-5">
                      <Input
                        label={"Есть ли аллергии?"}
                        register={register}
                        registerName={"alerg"}
                        required
                      />
                    </div>
                  </>
                )}
                <div className="md:col-span-5 flex flex-col">
                  <Select
                    options={[
                      "Eду на общем автобусе",
                      "Eду на своем транспорте",
                    ]}
                    label={"Транспорт"}
                    register={register}
                    registerName={"tranfer"}
                  />
                </div>
                <div className="md:col-span-5">
                  <Textarea
                    label={"Комментарий"}
                    register={register}
                    registerName={"comment"}
                  />
                </div>

                <div className="md:col-span-5 text-right">
                  <div className="flex justify-center w-full">
                    <Image
                      src={"/blob-1.PNG"}
                      height={120}
                      width={120}
                      alt={""}
                    />
                    <Image
                      src={"/blob-2.PNG"}
                      height={120}
                      width={120}
                      alt={""}
                    />
                    <Image
                      src={"/blob-3.PNG"}
                      height={120}
                      width={120}
                      alt={""}
                    />
                  </div>
                  <div className="flex items-center w-full justify-center my-10">
                    <Button disabled={loading}>
                      {loading ? "Отправка..." : "Отправить"}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
