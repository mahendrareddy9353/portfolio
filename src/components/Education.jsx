import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Education
        </h2>

        <motion.div
          whileHover={{ scale:1.03 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-3xl font-bold">
            Bachelor of Engineering
          </h3>

          <p className="text-cyan-400 mt-2">
            Computer Science & Engineering
          </p>

          <p className="mt-3 text-gray-300">
            Veerappa Nisty Engineering College (VTU)
          </p>

          <p className="text-gray-400 mt-2">
            2022 – 2026
          </p>

        </motion.div>

      </div>
    </section>
  );
}