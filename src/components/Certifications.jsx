const certificates = [
  "Java Full Stack Development Internship",
  "Spring Boot",
  "React.js",
  "SQL & MySQL"
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((item,index)=>(

            <div
              key={index}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 hover:scale-105 transition"
            >

              <h3 className="text-2xl font-semibold text-cyan-400">
                {item}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}