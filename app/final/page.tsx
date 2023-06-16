import Link from "next/link";
import { Confetti } from "../components/Confetti";

export default function FinalPage() {
  return (
    <div
      className="hero min-h-[600px] bg-fixed bg-cover"
      style={{ backgroundImage: "url(/1.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="flex flex-col justify-center items-center max-w-[700px]">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            BELCREATION
          </h1>
          <p className="mb-6 font-light lg:mb-8 md:text-md lg:text-xl text-lg dark:text-gray-400 text-start">
            Регистрацяи прошла успешно!
          </p>
          <div className="z-50 gap-4 flex">
            <Link href="/">
              <button className="btn bg-teal-500 hover:bg-teal-700 text-white">
                На главную
              </button>
            </Link>

            <Link href="/register">
              <button className="btn">Регистрация</button>
            </Link>
          </div>
        </div>
        <Confetti />
      </div>
    </div>
  );
}
