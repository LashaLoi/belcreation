import Link from "next/link";
import { Confetti } from "../components/Confetti";

export default function FinalPage() {
  return (
    <div className="flex flex-col items-center h-[300px] mt-[100px]">
      <div className="mt-4 mb-4">
        <div className="mb-6 lg:mb-8 text-2xl dark:text-gray-400 text-center p-6 font-bold">
          Вы успешно зарегестриваролись на BELCREATION!!
        </div>
      </div>

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
      <Confetti />
    </div>
  );
}
