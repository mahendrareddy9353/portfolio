import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Education",
  "Certifications",
  "Contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "backdrop-blur-xl bg-slate-900/70 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Mahendra
        </h1>

        <div className="hidden md:flex gap-8">

          {links.map((item) => (

            <Link
              key={item}
              to={item.toLowerCase()}
              smooth
              duration={500}
              offset={-70}
              className="cursor-pointer text-gray-300 hover:text-cyan-400 transition"
            >
              {item}
            </Link>

          ))}

        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="md:hidden bg-slate-900/95"
          >

            {links.map((item) => (

              <Link
                key={item}
                to={item.toLowerCase()}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 border-b border-slate-700 cursor-pointer hover:text-cyan-400"
              >
                {item}
              </Link>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}