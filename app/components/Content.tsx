import Link from "next/link";
import { Button } from "./Button";

export const Content = () => {
  return (
    <>
      <section className="bg-white z-10">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="2.jpg"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="3.jpg"
              alt="office content 2"
            />
          </div>
          <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Расселение
            </h2>
            <p className="mb-4">
              Дорогие участники! В нашем лагере домики распределены по гендерным
              признакам: девушки в одном доме, парни в другом.
            </p>
            <p>
              <span className="text-red-300">*</span> К сожалению, у нас нет
              возможности расселить семейные пары в отдельные комнаты. Если вас
              это устраивает, мы расселим вас и вашего/вашу супруга/у в разные
              домики. Если же нет, мы предоставляем отдельное место для
              палаточного городка, где вы сможете «поставить свою палатку. Цена
              за проживание в палатке будет ниже.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
              Твое время
            </h2>
            <p className="mb-4">
              Бог каждого человека наделил особым даром. В нашем лагере, каждый
              сможет поделиться своим талантом! Это может быть рисование, пение,
              танцы, сценка, гимнастическое представление и многое другое.
              Также, на «Твоё время» будут присутствовать жюри и зрители,
              которые выберут двух победителей, которым и будут вручены призы!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="/your-1.jpg"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="/your-2.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
      <section className="bg-white ">
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
              В нашем лагере участники делятся по командам, где принять участие
              может каждый! Командные игры - это время, где каждый учится
              работать сообща, поддерживать, помогать друг другу. Участники
              учатся выстраивать отношения друг с другом, что даст отличный опыт
              для реальной жизни.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 ">
              ЧТО НУЖНО ВЗЯТЬ С СОБОЙ В ЛАГЕРЬ?
            </h2>
            <p className="mb-4 font-light">
              Мы предоставляем туалеты, а также холодную и горячую воду в
              душевых кабинках, трёхразовое питание, а также небольшое кафе, где
              вы сможете за небольшую плату купить мороженое или батончик.
            </p>
            <div className="mb-4">Для проживания в домиках вам необходимы:</div>
            <div className="mb-4 font-medium text-start sm:ml-6 ml-0">
              <div className="mb-4 font-medium">
                ⁃ Простынь для матраса, своё одеяло и подушка
              </div>
              <div className="mb-4 font-medium">⁃ Зубная щётка, паста</div>
              <div className="mb-4 font-medium">⁃ Полотенце</div>
              <div className="mb-4 font-medium">⁃ Шампунь / гель для душа</div>
              <div className="mb-4 font-medium">⁃ Средства личной гигиены</div>
              <div className="mb-4 font-medium">⁃ Средства от комаров</div>
              <div className="mb-4 font-medium">
                ⁃ Тёплая и спортивная одежда
              </div>
              <div className="mb-4 font-medium">⁃ Головной убор</div>
              <div className="mb-4 font-medium">⁃ Библия, тетрадь, ручка</div>
            </div>
            <p className="mb-4 font-light">
              Информация для девушек: Лагерь не предоставляет фен!
            </p>
          </div>
        </div>
      </section>
      <Link href="/register" className="w-full flex justify-center mb-4">
        <Button>Регистрация</Button>
      </Link>
    </>
  );
};
