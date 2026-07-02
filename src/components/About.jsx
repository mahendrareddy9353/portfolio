import { motion } from "framer-motion";
import { Code2, Award, Briefcase, FolderGit2 } from "lucide-react";

const stats = [
  {
    icon: <FolderGit2 size={32} />,
    number: "8+",
    title: "Projects",
  },
  {
    icon: <Code2 size={32} />,
    number: "15+",
    title: "Technologies",
  },
  {
    icon: <Briefcase size={32} />,
    number: "1",
    title: "Internship",
  },
  {
    icon: <Award size={32} />,
    number: "4",
    title: "Certifications",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity:0,y:50 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity:0,y:50 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.7 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-xl"
        >

          <p className="text-gray-300 leading-9 text-lg">

            I am a passionate Java Full Stack Developer with strong
            knowledge of Java, Spring Boot, React.js, MySQL,
            REST APIs, HTML, CSS, JavaScript and modern web
            technologies.

            <br /><br />

            I enjoy building scalable, secure and responsive
            web applications while continuously learning
            new technologies.

          </p>

        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mt-16">

          {stats.map((item,index)=>(

            <motion.div
              key={index}
              initial={{ opacity:0,scale:.8 }}
              whileInView={{ opacity:1,scale:1 }}
              transition={{ delay:index*.2 }}
              whileHover={{
                scale:1.05,
                y:-10
              }}
              className="backdrop-blur-xl bg-slate-900/60 rounded-2xl border border-cyan-500/20 p-8 text-center"
            >

              <div className="text-cyan-400 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-bold">
                {item.number}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}