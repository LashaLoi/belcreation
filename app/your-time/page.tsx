export default function YourTime() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Твое время
          </h2>
          <p className="mb-4">
            Бог каждого человека наделил особым даром. Поэтому на нашем лагере,
            каждый сможет поделиться своим талантом! Это может быть рисование,
            пение, танцы, сценка, гимнастическое представление и многое другое.
            Также, на «Твоё время» будут присутствовать жюри и зрители, которые
            выберут двух победителей, которым и будут вручены призы!
          </p>
          <p>
            <span className="text-red-300">*</span>большая просьба до лагеря
            скачать необходимую музыку на флешку, или взять нужный вам реквизит
            для вашего номера
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
  );
}
