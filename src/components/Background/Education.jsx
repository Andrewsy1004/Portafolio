

import { FaLaptopCode, FaMobileAlt, FaUniversity } from "react-icons/fa";

const educationData = [
    {
        title: 'Universidad Libre',
        descriptions: [
            'Studying systems engineering in 7th semester',
            'Focus on software development and data science',
            'Expected graduation in 2026',
        ],
        icon: <FaUniversity size={40} className="text-blue-600" />,
    },
    {
        title: 'SENA',
        descriptions: [
            'Mobile development with Android Studio',
            'Technician in the Accounting of Commercial and Financial Operations'
        ],
        icon: <FaMobileAlt size={40} className="text-green-600" />,
    },
    {
        title: 'Devtalles courses',
        descriptions: [
            'Backend development with Node.js, NestJS, and Express',
            'Frontend development with React, TypeScript, and TailwindCSS',
            'Exploring full-stack technologies and modern web frameworks',
        ],
        icon: <FaLaptopCode size={40} className="text-orange-600" />,
    },
    {
        title: 'Others Courses',
        descriptions: [
            'PROGRAMMING LANGUAGE JAVASCRIPT Francisco José de Caldas District University',
            'PROGRAMMING FUNDAMENTALS Technological University of Pereira',
        ],
        icon: <FaLaptopCode size={40} className="text-red-600" />,
    },
];

export const Education = () => {
    return (
        <section id="Background" className="container mx-auto px-4 py-16 scroll-mt-20 z-10">

            <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-500 dark:to-pink-600 mb-4 tracking-wide leading-tight">
                    Educational Journey
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mt-4 opacity-80 hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    My academic and professional development
                </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {educationData.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-white dark:bg-gray-800 
                            rounded-xl shadow-lg overflow-hidden 
                            transition-all duration-300 transform 
                            hover:scale-105 hover:shadow-2xl 
                            hover:bg-gray-50 dark:hover:bg-gray-700
                            opacity-0 motion-safe:opacity-100
                            ${index === 3 ? 'md:col-start-2' : ''}`}
                        style={{ transitionDelay: `${index * 100}ms` }} // Adds a slight delay between elements
                    >
                        <div className="p-6 flex flex-col items-center text-center">
                            <div className="mb-4 p-4 rounded-full bg-gray-100 dark:bg-gray-700">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                                {item.title}
                            </h3>

                            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                                {item.descriptions.map((desc, descIndex) => (
                                    <li
                                        key={descIndex}
                                        className="flex items-center justify-center text-center group-hover:text-blue-600 transition-all duration-300 transform hover:translate-x-2"
                                    >
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
