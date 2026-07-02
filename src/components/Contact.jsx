import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">

      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Contact Me
        </h2>

        <form className="space-y-6 bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-cyan-500/20">

          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 rounded-xl bg-slate-900"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl bg-slate-900"
          />

          <input
            type="text"
            placeholder="Phone"
            className="w-full p-4 rounded-xl bg-slate-900"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-4 rounded-xl bg-slate-900"
          />

          <button className="bg-cyan-500 px-8 py-3 rounded-xl hover:bg-cyan-600">
            Send Message
          </button>

        </form>

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="flex items-center gap-3">
            <Mail />
            mahendrareddypatil328@gmail.com
          </div>

          <div className="flex items-center gap-3">
            <FaGithub />
            github.com/mahendrareddy9353
          </div>

          <div className="flex items-center gap-3">
            <FaLinkedin />
            linkedin.com
          </div>

          <div className="flex items-center gap-3">
            <MapPin />
            Karnataka, India
          </div>

        </div>

      </div>

    </section>
  );
}