import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-700 py-8">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <p>
          Designed & Developed by Mahendra Reddy © 2026
        </p>

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="mt-4 md:mt-0 bg-cyan-500 p-3 rounded-full hover:bg-cyan-600"
        >
          <ArrowUp />
        </button>

      </div>

    </footer>
  );
}