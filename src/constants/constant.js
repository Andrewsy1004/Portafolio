export const skillCategories = [
  {
    title: "Frontend Skills",
    skills: [
      {
        icon: "https://camo.githubusercontent.com/49179b69f7956cc4b5e5e7987d011103b7e3ffc20c55ca4a43c8ff214c3b6796/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d68746d6c",
        name: "HTML",
      },

      {
        icon: "https://camo.githubusercontent.com/a266b2536a9f4e1b8dc325ca89d9ce8e7f323c1e140f8b830a42f474a56e3b4c/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d637373",
        name: "CSS",
      },

      {
        icon: "https://camo.githubusercontent.com/16edff857d92b7794d5f4241aa88b9db4463d06eb52b38624a5fe1cad1584e53/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6a73",
        name: "JavaScript",
      },

      {
        icon: "https://camo.githubusercontent.com/cb1fa2738a401d7952e8c150707084c5336ba9d544a238fad8c8d4d942353d8a/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7265616374",
        name: "React",
      },

      {
        icon: "https://camo.githubusercontent.com/369ce0f9d1b9e5e69b4b6df1752862ce1fc99699d6bb17d84cc2825c75d1e2d6/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6e6578746a73",
        name: "Next.js",
      },

      {
        icon: "https://camo.githubusercontent.com/f383e4b2c5e8c2ca73221c29ef270d55d82eb3beeb79bd6b409dcb6ab64a4b7c/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d7461696c77696e64",
        name: "Tailwind",
      },

      {
        icon: "https://camo.githubusercontent.com/6b1bf7b8b619209db3380bb7d254b3aa8eacd86d708ee47c4efd90c3e770c190/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d626f6f747374726170",
        name: "Boostrap",
      },
    ],
    bgColor: "bg-gradient-to-r from-blue-500 to-purple-600",
  },

  {
    title: "Backend Skills",
    skills: [
      {
        icon: "https://camo.githubusercontent.com/eed59029fe16e0f33431721522fb0eede534a072db478245b89b6bc4ab1b10f3/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d65787072657373",
        name: "Node.js",
      },

      {
        icon: "https://camo.githubusercontent.com/4f9dcd0c7f9b4bf35e34d8e9c117c2098ad66dff523c4ec6748bb373ef10df60/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6e6573746a73",
        name: "Nest.js",
      },

      {
        icon: "https://camo.githubusercontent.com/8c779088a37e29fdc8fca5576357aa67c86f30041734226d17f70e150eececdf/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d6d6f6e676f6462",
        name: "Mongo",
      },

      {
        icon: "https://camo.githubusercontent.com/8ac99a8f9df10832e35eb2fb7fad603424fa19b103551cdebf76cbae20d9ef0c/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f693d706f737467726573",
        name: "PostgreSQL",
      },
    ],
    bgColor: "bg-gradient-to-r from-blue-500 to-purple-600",
  },

  {
    title: "Data Science",
    skills: [
      { icon: "https://skillicons.dev/icons?i=r", name: "R" },
      { icon: "https://skillicons.dev/icons?i=python", name: "Python" },
      { icon: "https://skillicons.dev/icons?i=sklearn", name: "Scikit" },

      {
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
        name: "PowerBI",
      },
    ],
    bgColor: "bg-gradient-to-r from-blue-500 to-purple-600",
  },

  {
    title: "Other Skills",
    skills: [
      { icon: "https://skillicons.dev/icons?i=docker", name: "Docker" },
      { icon: "https://skillicons.dev/icons?i=git", name: "Git" },
      { icon: "https://skillicons.dev/icons?i=aws", name: "AWS" },
    ],
    bgColor: "bg-gradient-to-r from-blue-500 to-purple-600",
  },
];

export const projectCategories = {
  frontend: [
    {
      title: "Economy Website",
      description: "An educational platform that transforms economic concepts into interactive and accessible learning experiences.",
      technologies: ["React.js", "Tailwind", "Tostify", "Framer Motion", "Javascript" ],
      githubLink: "https://github.com/Andrewsy1004/Economia",
      image: "/Econmia_App_Frontend.png",
      LinkDeploy: "https://economia-peach.vercel.app/"
    },

    {
      title: "Automated Logic Expression Generator",
      description: "This project converts simple sentences into logical expressions, generates truth tables, and classifies them as tautologies, contradictions, or contingencies based on their truth values.",
      technologies: ["React.js", "Tailwind", "Tostify", "Framer Motion", "Javascript" ],
      githubLink: "https://github.com/Andrewsy1004/Logica_Matematica",
      image: "/Logica_App_Frontend.png",
      LinkDeploy: "https://logica-matematica.vercel.app/"
    },
    
    {
      title: "Interactive Set Operations Visualizer",
      description: "An app designed to teach set operations through interactive graphical and mathematical visualization.",
      technologies: ["React.js", "Tailwind", "Tostify", "Javascript" ],
      githubLink: "https://github.com/Andrewsy1004/Logica_Matematica",
      image: "/Conjuntos_App_Frontend.png",
      LinkDeploy: "https://diagrama-venn.vercel.app/"
    },

  ],

  backend: [
    {
      title: "API to manage medical appointments for a business",
      description: "This is the robust and scalable backend of a comprehensive appointment management system, designed to provide advanced functionalities for the efficient administration of medical, business, or other scheduled events.",
      technologies: ["Node.js", "Express", "MongoDB","JWT" ],
      githubLink: "https://github.com/Andrewsy1004/BackendAppointments",
      image: "/API_BACKEND_.png",
    },  
  ],
  
  fullstack: [
    {
      title: "A Personal Blogging Platform",
      description: "This project is a blogging platform where users can create personal blog posts, update or delete their own posts, and comment on others' posts",
      technologies: ["React", "Node.js", "mongodb", "Bootstrap", "Cloudinary", "Socket.io" ],
      githubLink: "https://github.com/Andrewsy1004/Project_Post",
      image: "/Blog_Full_Stack_.png",
    },
    
    {
      title: "EVSpot: Event Space Reservation & Management Platform",
      description: "EVSpot is a comprehensive platform for event space reservations, offering easy browsing, booking, and management.",
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind", "Cloudinary", "Docker", "Joi" ],
      githubLink: "https://github.com/Andrewsy1004/EvSpot",
      image: "/EvSpot_FullStack_.png",
    },
  
  ],
  
  datascience: [
    {
      title: "House Price Prediction with Linear Regression",
      description: "A linear regression model to predict house prices based on features",
      technologies: ["Python", "xgbregressor", "Scikit-learn"],
      githubLink: "https://github.com/Andrewsy1004/Linear-Regression-Model-for-House-Price-Prediction",
      image: "/LR_DATA_SCIENCE.png",
    },
  ],

};
