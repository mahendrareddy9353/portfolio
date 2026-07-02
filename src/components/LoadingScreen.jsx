import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-[#020817] flex items-center justify-center z-[999]">
      <h1 className="text-5xl font-bold text-cyan-400 animate-pulse">
        Mahendra Reddy
      </h1>
    </div>
  );
}