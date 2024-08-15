import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  PE,
  geomtec,
  involys,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "NextJS Devloper",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
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
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "geomtec",
    icon: geomtec,
    iconBg: "#E6DEDD",
    date: "March 2020 - April 2021",
    points: [
"Developing dynamic, user-centric web applications using React.js.",
"Building reusable components to ensure code maintainability and scalability.",
"Collaborating with designers and back-end developers to integrate APIs seamlessly.",
"Optimizing applications for performance and responsiveness across all devices.",
"Staying ahead of industry trends to implement the latest best practices in React development.",
"Ensuring the technical feasibility of UI/UX designs.",
"Debugging and troubleshooting complex issues to enhance user experience."

    ],
  },
  {
    title: ".NET Developer",
    company_name: "involys",
    icon: involys,
    iconBg: "#383E56",
    date: "Jan 2021 - Jan 2023",
    points: [
      "Developing and maintaining robust web applications using the .NET framework and C#.",
"Building scalable and high-performance server-side applications with ASP.NET Core.",
"Designing and implementing RESTful APIs and integrating them with front-end applications.",
"Working with relational databases like SQL Server for data storage, retrieval, and management.",
"Utilizing Entity Framework for efficient data access and ORM-based solutions.",
"Ensuring application security and data protection through industry best practices.",
"Collaborating with front-end developers to integrate UI components with server-side logic.",
"Conducting unit testing and debugging to ensure software quality and reliability."


    ],
  },
  {
    title: "Web Developer",
    company_name: "Public Events",
    icon: PE,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
"Designing, developing, and maintaining user-friendly websites and web applications.",
"Creating clean, efficient, and well-documented code using HTML, CSS, and JavaScript.",
"Ensuring cross-browser compatibility and optimizing websites for performance and speed.",
"Collaborating with designers and stakeholders to implement engaging and responsive designs.",
"Integrating third-party APIs and services to enhance functionality.",
"Troubleshooting and debugging issues to provide seamless user experiences.",
"Staying updated with the latest web development trends and technologies to continually improve skills and processes."

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mouhcine proved me wrong.",
    name: "Ruby Reyes",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Mouhcine does.",
    name: "Amine Bouzoubaâ",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Mouhcine optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Billie Walters",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
