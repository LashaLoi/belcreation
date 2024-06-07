import { AnimatePresence, motion } from "framer-motion";
import MobileLink from "@/app/components/MobileLink";
import { items } from "@/app/components/Header/constants";

export default function MobileView({
  isMenuOpen,
  pathname,
}: {
  isMenuOpen: boolean;
  pathname: string;
}) {
  const mobileItems = [
    ...items,
    {
      path: "/register",
      text: "РЕГИСТРАЦИЯ",
    },
  ];

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.nav
          className="absolute top-[60px] left-0 w-full z-50 p-5 bg-white rounded space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {mobileItems.map(({ path, text }) => (
            <MobileLink
              key={path}
              isActive={pathname === path}
              path={path}
              text={text}
            />
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
