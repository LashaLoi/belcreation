import { motion } from "framer-motion";
import { FadeIn } from "@/app/components/FadeIn";
import { MutableRefObject } from "react";

const links = [
  {
    name: "О нас",
    refName: "about",
  },
  {
    name: "Расселение",
    refName: "places",
  },
  {
    name: "Твое время",
    refName: "time",
  },
  {
    name: "Детская программа",
    refName: "child",
  },
  {
    name: "Командные игры",
    refName: "games",
  },
  {
    name: "Что нужно взять с собой",
    refName: "tools",
  },
  {
    name: "Часто задаваемые вопросы",
    refName: "faq",
  },
];

type LinksProps = {
  refs: Record<string, MutableRefObject<HTMLDivElement>>;
};

export default function Links({ refs }: LinksProps) {
  const handleClick = (refName: string) => {
    refs[refName].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <FadeIn className="mx-auto max-w-lg sm:p-0 p-4 gap-2 flex flex-col">
      {links.map(({ name, refName }, i) => (
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => handleClick(refName)}
          role="button"
          className="bg-gray-100 hover:bg-gray-200 cursor-pointer transition-all sm:p-4 p-2 rounded"
          key={i}
        >
          {name}
        </motion.div>
      ))}
    </FadeIn>
  );
}
