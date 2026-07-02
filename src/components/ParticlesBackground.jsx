export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px] animate-pulse"></div>

      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full bg-sky-500/20 blur-[120px] animate-pulse"></div>
    </div>
  );
}