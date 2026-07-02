import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-cyan-500 hover:bg-cyan-600 shadow-lg"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}