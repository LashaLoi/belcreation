import Link from "next/link";

export const Header = () => {
  return (
    <div
      className="hero min-h-screen bg-fixed bg-cover"
      style={{ backgroundImage: "url(/1.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="flex flex-col justify-center items-center max-w-[700px]">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            BELCREATION
          </h1>
          <p className="mb-6 font-light lg:mb-8 md:text-md lg:text-xl text-lg dark:text-gray-400 text-start">
            Семейный лагерь для всех возрастов! Вас ждут шесть дней полного
            погружения в атмосферу Духа Святого. Семинары, проповеди, личное
            время с Богом, вечер хвалы и поклонения - это все для того, чтобы
            каждый смог отвлечься от своих ежедневных дел и посвятить себя Богу!
            А также командные игры, твоё время, творческие выступления, где
            поучаствовать сможет каждый! Не пропусти это время! Время, где ты
            сможешь не только обрести новых друзей, семью, скинуть килограммы,
            но и провести качественное время с Иисусом.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white text-center rounded-lg bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-900"
          >
            Регистрация
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
