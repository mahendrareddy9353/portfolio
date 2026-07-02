import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const glow = document.createElement("div");

    glow.className =
      "fixed w-32 h-32 rounded-full pointer-events-none bg-cyan-500/20 blur-3xl z-0";

    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = `${e.clientX - 60}px`;
      glow.style.top = `${e.clientY - 60}px`;
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      glow.remove();
    };
  }, []);

  return null;
}