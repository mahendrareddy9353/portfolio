const filters = ["All", "Java", "Python", "Spring Boot"];

export default function ProjectFilter({ selected, onChange }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => onChange(item)}
          className={`px-5 py-2 rounded-full transition ${
            selected === item
              ? "bg-cyan-500 text-white"
              : "bg-slate-800 text-gray-300 hover:bg-cyan-500"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}