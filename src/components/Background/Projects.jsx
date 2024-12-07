import { useState } from "react";
import { Code, Database, Rocket, Server } from "lucide-react";

import { projectCategories } from "../../constants"; // Assuming this is your project data
import { ProjectCard } from ".."; // Assuming ProjectCard is a separate component

const categoryIcons = {
  frontend: <Code className="mr-2" />,
  backend: <Server className="mr-2" />,
  fullstack: <Rocket className="mr-2" />,
  datascience: <Database className="mr-2" />
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <div className="flex flex-col items-center justify-center mb-20 px-10 z-10" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      {/* Categories of projects */}
      <div className="flex flex-wrap gap-4 mb-10 justify-center sm:justify-start">
        {Object.keys(projectCategories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              flex items-center px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer
              ${activeCategory === category
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"}`}
          >
            {categoryIcons[category]}
            {category === 'datascience' ? 'Data Science' : category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" key={activeCategory} >
        {projectCategories[activeCategory].map((project, index) => (
          <ProjectCard key={`${activeCategory}-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};
