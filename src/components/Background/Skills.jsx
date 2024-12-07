
import { skillCategories } from "../../constants";

export const Skills = () => {
    return (
        <section
            id="skills"
            className="flex flex-col items-center justify-center gap-10 h-full relative overflow-hidden py-20 px-4"
            style={{ transform: "scale(0.9)" }}
        >

            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                        My Technical Skills
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Explore the technologies and tools I&apos;ve mastered throughout my journey
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className={`
                                       ${category.bgColor} 
                                       rounded-3xl p-6 shadow-2xl transform transition-all duration-300 
                                       hover:scale-105 hover:rotate-1 hover:shadow-3xl
                                       group cursor-pointer overflow-hidden
                                      `}
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 text-center transition-all duration-300 group-hover:translate-y-[-10px]">
                                {category.title}
                            </h3>

                            <div className="grid grid-cols-4 gap-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <div
                                        key={skillIndex}
                                        className="flex flex-col items-center justify-center 
                                                   bg-opacity-10 backdrop-blur-sm rounded-xl p-3 
                                                   transform transition-all duration-300 
                                                   hover:scale-110 hover:bg-opacity-20">
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            width={48}
                                            height={48}
                                            className="mb-2"
                                        />
                                        <span className="text-xs text-white text-center">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
