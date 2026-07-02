export default function ParticlesBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div className="absolute w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px] top-20 left-10 animate-pulse"></div>

      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] bottom-20 right-20 animate-pulse"></div>

    </div>
  );
}