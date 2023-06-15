export const Content = () => {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{" "}
            Расселение
          </h2>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="2.jpg"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="3.jpg"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="4.jpg"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-4 mb-4 border-b">
              <p className="text-lg text-gray-900">
                Дорогие участники! В нашем лагере домики распределены по
                гендерным признакам??: девушки в одном доме, парни в другом.
              </p>
            </div>
            <div className="pb-4 mb-4 border-b">
              <p className="text-lg text-gray-900">
                К сожалению, у нас нет возможности расселить семейные пары в
                отдельные комнаты. Если вас это устраивает, мы расселим вас и
                вашего/вашу супруга/у в разные домики. Если же нет, мы
                предоставляем отдельное место для палаточного городка, где вы
                сможете расставить свою палатку. Цена за проживание в палатке
                будет ниже.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
                  ЧТО НУЖНО ВЗЯТЬ С СОБОЙ В ЛАГЕРЬ?
                </h2>
                <p className="mb-4 font-light">
                  Мы предоставляем туалеты, а также холодную и горячую воду в
                  душевых кабинках, трёхразовое питание, а также небольшое кафе,
                  где вы сможете за особую плату купить мороженое или батончик.
                </p>
                <div className="mb-4 font-medium text-start sm:ml-6 ml-0">
                  <div className="mb-4 font-medium">
                    ⁃ Для проживания в домиках вам необходимо наволочка для
                    матраса, своё одеяло и подушка.
                  </div>
                  <div className="mb-4 font-medium">⁃ Зубная щётка, паста</div>
                  <div className="mb-4 font-medium">⁃ Полотенце</div>
                  <div className="mb-4 font-medium">
                    ⁃ Шампунь / гель для душа
                  </div>
                  <div className="mb-4 font-medium">
                    ⁃ Средства личной гигиены
                  </div>
                  <div className="mb-4 font-medium">⁃ Средства от комаров</div>
                  <div className="mb-4 font-medium">
                    ⁃ Тёплая и спортивная одежда
                  </div>
                  <div className="mb-4 font-medium">⁃ Головной убор</div>
                  <div className="mb-4 font-medium">
                    ⁃ Библия, тетрадь, ручка
                  </div>
                  <p className="mb-4 font-light">
                    Информация для девушек: Лагерь не предоставляет фен!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
