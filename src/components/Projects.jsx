import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projects from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project) => (

            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-cyan-500/20"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((item, index) => (

                    <span
                      key={index}
                      className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-xl hover:bg-cyan-500"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 px-4 py-2 rounded-xl hover:bg-cyan-600"
                  >
                    <ExternalLink />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}