import Link from "next/link";

// export const Header = () => {
//   return (
//     <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
//       <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
//         <svg
//           className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
//           viewBox="0 0 100 100"
//           fill="currentColor"
//           preserveAspectRatio="none slice"
//         >
//           <path d="M50 0H100L50 100H0L50 0Z" />
//         </svg>
//         <img
//           className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
//           src="/1.jpg"
//           alt="logo"
//         />
//       </div>
//       <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
//         <div className="mb-16 lg:my-40 lg:max-w-xl lg:pr-5">
//           <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider bg-teal-500 uppercase rounded-full h-2 w-8"></p>
//           <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
//             BELCREATION
//           </h2>
//           <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
//             Семейный лагерь для всех возрастов! Вас ждут шесть дней полного
//             погружения в атмосферу Духа Святого. Семинары, проповеди, личное
//             время с Богом, вечер хвалы и поклонения - это все для того, чтобы
//             каждый смог отвлечься от своих ежедневных дел и посвятить себя Богу!
//             А также командные игры, твоё время, творческие выступления, где
//             поучаствовать сможет каждый! Не пропусти это время! Время, где ты
//             сможешь не только обрести новых друзей, семью, скинуть килограммы,
//             но и провести качественное время с Исусом.
//           </p>
//           <Link href="/register" className="flex items-center">
//             <button className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-teal-500 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
//               Регистрация
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

export const Header = () => {
  return (
    // <section className="relative bg-[url(/1.jpg)] bg-cover bg-center bg-no-repeat">
    //   <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

    //   <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
    //     <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
    //       <h1 className="text-3xl font-extrabold sm:text-5xl">
    //         Let us find your
    //         <strong className="block font-extrabold text-rose-700">
    //           Forever Home.
    //         </strong>
    //       </h1>

    //       <p className="mt-4 max-w-lg sm:text-xl/relaxed">
    //         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
    //         illo tenetur fuga ducimus numquam ea!
    //       </p>

    //       <div className="mt-8 flex flex-wrap gap-4 text-center">
    //         <a
    //           href="#"
    //           className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
    //         >
    //           Get Started
    //         </a>

    //         <a
    //           href="#"
    //           className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
    //         >
    //           Learn More
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </section>

    <section className="bg-white dark:bg-gray-900 mt-24">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            BELCREATION
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Семейный лагерь для всех возрастов! Вас ждут шесть дней полного
            погружения в атмосферу Духа Святого. Семинары, проповеди, личное
            время с Богом, вечер хвалы и поклонения - это все для того, чтобы
            каждый смог отвлечься от своих ежедневных дел и посвятить себя Богу!
            А также командные игры, твоё время, творческие выступления, где
            поучаствовать сможет каждый! Не пропусти это время! Время, где ты
            сможешь не только обрести новых друзей, семью, скинуть килограммы,
            но и провести качественное время с Исусом.
          </p>
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-white text-center rounded-lg bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-900"
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
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Галерея
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
          <img src="/1.jpg" alt="mockup" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
};
