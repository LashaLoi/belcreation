"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "../components/Button";

type Inputs = {
  fullName: string;
  age: number;
  phone: string;
  church: string;
  city: string;
  child: boolean;
  childInfo: string;
  childAge: string;
  alerg: string;
  youtime: string;
  merried: boolean;
  merriedInfo: string;
  merriedAge: string;
  house: string;
  comment: string;
  tranfer: string;
};

export default function Register() {
  const router = useRouter();
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const supabase = createClientComponentClient();

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const isChild = watch("child");
  const isMerried = watch("merried");

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);

    const user = await supabase.from("users").insert([
      {
        fullName: data["fullName"] ?? "-",
        age: data["age"] ?? "-",
        phone: data["phone"] ?? "-",
        church: data["church"] ?? "-",
        city: data["city"] ?? "-",
        child: data["child"] ?? "-",
        childInfo: (data["childInfo"] ?? "-") + " " + (data["childAge"] ?? "-"),
        alerg: data["alerg"] ?? "-",
        youtime: data["youtime"] ?? "-",
        merried: data["merried"] ?? "-",
        merriedInfo:
          (data["merriedInfo"] ?? "-") + " " + (data["merriedAge"] ?? "-"),
        house: data["house"] ?? "-",
        comment: data["comment"] ?? "-",
        tranfer: data["tranfer"] ?? "-",
      },
    ]);

    if (user.error) {
      setError(true);
      setLoading(false);

      return;
    }

    router.push("/final");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
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
          <h2 className="font-semibold text-xl text-gray-600 mb-4">
            Регистрация на BELCREATION
          </h2>
          <div className="text-gray-500 mb-2">ОПЛАТА</div>
          <div className="text-gray-500 mb-2">
            <div>Проживание в домике будет стоить - 210р</div>
            <div>Проживание в палатке будет стоить - 150р</div>
          </div>

          <div className="text-gray-500 mb-4">
            <div>Для семьи от 5 человек:</div>
            <div>Цена за проживание в домике (за одного человека) - 150р</div>
            <div>Цена за проживание в палатке (за одного человека) - 100р</div>
          </div>

          <div className="text-gray-500 mb-6">
            <div>Детям до 3 лет - бесплатно</div>
          </div>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Персональные данные</p>
                <p>Пожалуйста, заполните все поля</p>
              </div>

              <div className="lg:col-span-2">
                <form
                  className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="md:col-span-5">
                    <label htmlFor="fullName">Фамилия и имя</label>
                    <input
                      {...register("fullName")}
                      id="fullName"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="age">Возраст</label>
                    <input
                      {...register("age")}
                      type="number"
                      id="age"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="phone">Номер телефона</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      name="phone"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="church">Церковь</label>
                    <input
                      {...register("church")}
                      id="church"
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      required
                    />
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="city">Город</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        {...register("city")}
                        id="city"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div className="md:col-span-5 flex flex-col mb-2">
                    <label htmlFor="city" className="mb-2">
                      Расселение
                    </label>
                    <select
                      className="select select-primary w-full max-w-xs"
                      defaultValue="Нужно место в палатке"
                      {...register("house")}
                    >
                      <option value="Нужно место в палатке">
                        Нужно место в палатке
                      </option>
                      <option value="Своя палаткай">Своя палатка</option>
                      <option value="В домике">В домике</option>
                    </select>
                  </div>

                  <div className="md:col-span-5">
                    <label htmlFor="youtime">
                      Хочу участвовать в «Твое время»
                    </label>
                    <p className="text-gray-500 mt-2">
                      <span className="text-red-300">*</span>большая просьба, до
                      лагеря скачать необходимую музыку на флешку, или взять
                      нужный вам реквизит для вашего номера
                    </p>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        {...register("youtime")}
                        id="youtime"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        required
                      />
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="form-control">
                      <label className="cursor-pointer label w-[230px]">
                        <span className="label-text">
                          Еду с супругой / супругом
                        </span>
                        <input
                          {...register("merried")}
                          type="checkbox"
                          className="checkbox checkbox-primary"
                        />
                      </label>
                    </div>
                  </div>
                  {isMerried && (
                    <>
                      <div className="md:col-span-5">
                        <label htmlFor="merriedInfo">
                          Укажите фамилию и имя
                        </label>
                        <div className="h-32 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <textarea
                            {...register("merriedInfo")}
                            id="merriedInfo"
                            className="px-4 h-28 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            required
                          />
                        </div>
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="merriedAge">Укажите возраст</label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            {...register("merriedAge")}
                            type="number"
                            id="merriedAge"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <div className="md:col-span-5">
                    <div className="form-control">
                      <label className="cursor-pointer label w-[140px]">
                        <span className="label-text">Еду с детьми</span>
                        <input
                          {...register("child")}
                          type="checkbox"
                          className="checkbox checkbox-primary"
                        />
                      </label>
                    </div>
                  </div>
                  {isChild && (
                    <>
                      <div className="md:col-span-5">
                        <label htmlFor="childInfo">Укажите имя / имена</label>
                        <div className="h-32 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <textarea
                            {...register("childInfo")}
                            id="childInfo"
                            className="px-4 h-28 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            required
                          />
                        </div>
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="childAge">
                          Укажите возраст / возроста
                        </label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            {...register("childAge")}
                            id="childAge"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            required
                          />
                        </div>
                      </div>
                      <div className="md:col-span-5">
                        <label htmlFor="alerg">
                          Есть ли какая-то пищевая аллергия или аллергия на
                          медикаменты?
                        </label>
                        <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                          <input
                            {...register("alerg")}
                            id="alerg"
                            className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                            required
                          />
                        </div>
                      </div>
                    </>
                  )}
                  <div className="md:col-span-5 flex flex-col">
                    <label htmlFor="tranfer" className="mb-2">
                      Транспорт
                      <div className="text-sm mt-2">
                        База находится 20 км от Баранович в сторону Ляховичей.
                        Сбор отправления в 12:00 со Смоленской 28, г. Барановичи
                      </div>
                    </label>
                    <select
                      className="select select-primary w-full max-w-xs"
                      defaultValue="Eду на общем автобусе"
                      {...register("tranfer")}
                    >
                      <option value="Eду на общем автобусе">
                        Eду на общем автобусе
                      </option>
                      <option value="Eду на своем транспорте">
                        Eду на своем транспорте
                      </option>
                    </select>
                  </div>
                  <div className="md:col-span-5">
                    <label htmlFor="merriedInfo">Комментарий</label>
                    <div className="h-32 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <textarea
                        {...register("comment")}
                        id="merriedInfo"
                        className="px-4 h-28 appearance-none outline-none text-gray-800 w-full bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-5 mt-5 text-right">
                    <div className="inline-flex items-end">
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
      </div>
    </div>
  );
}
