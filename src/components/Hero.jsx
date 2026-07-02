import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-cyan-400 mb-3">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-extrabold">
            Mahendra Reddy
          </h1>

          <div className="text-3xl mt-6 text-blue-400 font-semibold">
            <TypeAnimation
              sequence={[
                "Java Developer",
                1500,
                "Spring Boot Developer",
                1500,
                "React Developer",
                1500,
                "Backend Developer",
                1500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-400 mt-8 leading-8">
            Passionate Java Full Stack Developer creating secure,
            scalable and modern web applications using Java,
            Spring Boot, React and MySQL.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600">
              Download Resume
            </button>

            <button className="border border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-500">
              View Projects
            </button>
          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/mahendrareddy9353"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="hover:text-cyan-400" />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400" />
            </a>

            <a href="mailto:mahendrareddypatil328@gmail.com">
              <Mail className="hover:text-cyan-400" />
            </a>

          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="/profile.png"
            alt="Mahendra"
            className="w-96 rounded-full border-4 border-cyan-400 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}