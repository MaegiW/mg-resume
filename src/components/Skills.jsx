import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import {
  Code2,
  GitBranch,
  Layout,
  Globe,
  Paintbrush,
  Database,
  Monitor,
  Layers,
  Cpu,
} from "lucide-react";

function Skills() {
  const [filter, setFilter] = useState("all");

  const skills = {
    frontend: [
      {
        name: "React",
        description: "Modern UI",
        icon: <Code2 className="w-6 h-6 text-blue-500" />,
      },
      {
        name: "JavaScript",
        description: "Web Logic",
        icon: <Monitor className="w-6 h-6 text-yellow-500" />,
      },
      {
        name: "HTML/CSS",
        description: "Structure & Style",
        icon: <Layout className="w-6 h-6 text-orange-500" />,
      },
      {
        name: "Tailwind",
        description: "Styling",
        icon: <Paintbrush className="w-6 h-6 text-cyan-500" />,
      },
    ],
    others: [
      {
        name: "Git",
        description: "Version Control",
        icon: <GitBranch className="w-6 h-6 text-gray-700" />,
      },
      {
        name: "REST API",
        description: "Integration",
        icon: <Database className="w-6 h-6 text-purple-500" />,
      },
      {
        name: "Responsive",
        description: "Adaptability",
        icon: <Globe className="w-6 h-6 text-green-500" />,
      },
      {
        name: "UI/UX",
        description: "Design",
        icon: <Layers className="w-6 h-6 text-pink-500" />,
      },
      {
        name: "Testing",
        description: "Quality",
        icon: <Cpu className="w-6 h-6 text-red-500" />,
      },
    ],
  };

  const filteredSkills = () => {
    if (filter === "frontend") return skills.frontend;
    if (filter === "others") return skills.others;
    return [...skills.frontend, ...skills.others].slice(0, 9); // 限制最多顯示9個
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" className="">
      <div className="max-w-full h-screen  mx-auto bg-white rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold mb-4 text-center">Skills</h2>
        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === "all"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("frontend")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === "frontend"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter("others")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              filter === "others"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Others
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {filteredSkills().map((skill, index) => (
            <div
              key={index}
              className=" bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-all flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center w-12 h-12 mb-2 rounded-full bg-gray-800 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-sm font-bold text-center text-gray-800 mb-1">
                {skill.name}
              </h3>
              <p className="text-xs text-center text-gray-500">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
