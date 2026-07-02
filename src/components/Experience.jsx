import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Experience
        </h2>

        <motion.div
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:.8 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-3xl font-bold text-cyan-400">
            Java Full Stack Development Intern
          </h3>

          <p className="text-xl mt-2">
            EchoBrains Technologies Pvt. Ltd.
          </p>

          <ul className="mt-6 space-y-3 text-gray-300 list-disc pl-5">
            <li>Developed Spring Boot REST APIs.</li>
            <li>Built responsive React.js applications.</li>
            <li>Worked with MySQL database.</li>
            <li>Implemented CRUD operations.</li>
            <li>Used Git & GitHub for version control.</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}