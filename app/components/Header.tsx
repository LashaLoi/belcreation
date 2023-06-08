export const Header = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="/1.jpg"
          alt="logo"
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-xl lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider bg-teal-500 uppercase rounded-full h-2 w-8"></p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            BELCREATION
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Семейный лагерь для всех возрастов! Вас ждут шесть дней полного
            погружения в атмосферу Духа Святого. Семинары, проповеди, личное
            время с Богом, вечер хвалы и поклонения - это все для того, чтобы
            каждый смог отвлечься от своих ежедневных дел и посвятить себя Богу!
            А также командные игры, твоё время, творческие выступления, где
            поучаствовать сможет каждый! Не пропусти это время! Время, где ты
            сможешь не только обрести новых друзей, семью, скинуть килограммы,
            но и провести качественное время с Исусом.
          </p>
          <div className="flex items-center">
            <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-teal-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
              Регистрация
            </button>
            <button className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700">
              О лагере
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
