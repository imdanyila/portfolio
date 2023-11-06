import {
    mobile,
    backend,
    creator,
    web,
    bestbuy,
    ace,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    threejs,
    git,
    figma,
    dishdex,
    sudoku,
    portfolio,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: backend,
    },
    {
      title: "UI & UX Designer",
      icon: mobile,
    },
    {
      title: "Project Management",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Customer Experience Specialist",
      company_name: "Best Buy",
      icon: bestbuy,
      iconBg: "white",
      date: "August 2022 - Present",
      points: [
        "Provide exceptional support, address inquiries, resolve technical issues, and make product recommendations, which leads to consistently high customer satisfaction.",
        "Demonstrate expertise in consumer electronics, computer hardware, and software, effectively troubleshooting and educating customers on the latest technology trends.",
        "Contribute actively to team success, participate in training sessions, share product knowledge, and foster a positive work environment.",
      ],
    },
    {
      title: "Frontend Web Developer",
      company_name: "Association of Computer Engineers at UF",
      icon: ace,
      iconBg: "white",
      date: "October 2023 - Present",
      points: [
        "Collaborate with a team of fellow developers to design, code, and maintain the organization's website, ensuring a user-friendly and visually appealing online presence.",
        "Improve the website's user interface by implementing modern design principles and responsive web design techniques, resulting in enhanced user engagement and accessibility.",
        "Work closely with team members to identify and address technical challenges, debug code, and implement new features, while fostering a collaborative and innovative development environment.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "DishDex",
      description:
        "Web application that enables users to input their favorite recipes, search for recipes, manage their recipes, and generate shopping lists for convenience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "prisma",
          color: "green-text-gradient",
        },
      ],
      image: dishdex,
      source_code_link: "https://github.com/imdanyila/ddex",
    },
    {
      name: "Sudoku",
      description:
        "Created a Python program, using Pygame, which generates Sudoku boards based on the selected user difficulty, offers an AI generated solution, and win and lose screens.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "pygame",
          color: "green-text-gradient",
        },
      ],
      image: sudoku,
      source_code_link: "https://github.com/imdanyila/sudoku",
    },
    {
      name: "3D Portfolio Website",
      description:
        "Created an online portfolio showcasing my coding projects. Not only does it demonstrate my web development skills, but it also incorporates 3D modeling.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/imdanyila/portfolio",
    },
  ];
  
  export { services, technologies, experiences, projects };