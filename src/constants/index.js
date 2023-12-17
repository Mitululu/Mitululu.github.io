import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    creativex,
    cmu,
    cylab,
    reactjs,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tora,
    lbsystem,
    cpp,
    postgres,
    python,
    ruby,
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
      title: "Application Developer",
      icon: mobile,
    },
    {
      title: "Back-End Software Engineer",
      icon: backend,
    },
    {
      title: "Full-Stack Software Engineer",
      icon: creator,
    }
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
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Ruby",
      icon: ruby,
    },
    {
      name: "C++",
      icon: cpp,
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
      name: "Postgres",
      icon: postgres,
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
      title: "Full-Stack Software Engineer",
      company_name: "CreativeX",
      icon: creativex,
      iconBg: "#383E56",
      date: "June 2022 - August 2023",
      points: [
        "Identified and completed sub-tasks and project requirements within Sprint-based developer timelines",
        "Supported new API and platform account connection flows across back-end Ruby on Rails processes",
        "Developed dynamic components and responsive pages in ReactJS per Figma mock-ups and internal design patterns",
        "Built RSpec unit tests for newly written controller functions for application resiliency and efficient debugging",
        "Designed scalable PostgreSQL table structures and performant retrieval queries for filterable search tables",
        "Led cross-team feature QA communications with product managers, technical operations, and other engineers",
      ],
    },
    {
      title: "B.S. in Computer Engineering",
      company_name: "Carnegie Mellon University",
      icon: cmu,
      iconBg: "#E6DEDD",
      date: "Graduated May 2022",
      edu: true,
      points: [
        "Intro to Computer Systems: intro to computer fundamentals such as assembly logic and multi-threading in the C language",
        "Intro to Machine Learning: grad-level course on current ML theory and popular models with Python projects",
        "Computer Graphics: grad-level course on graphics domains such as aliasing, meshing, and ray-tracing with C++ projects",
        "Natural Language Processing: grad-level course on NLP theory areas and prototyping projects in PyTorch",
        "Web Application Development: grad-level course on MVC system design with a Twitter-clone project in Django",
      ],
    },
    {
      title: "Computer Vision Research Assistant",
      company_name: "Carnegie Mellon CyLab",
      icon: cylab,
      iconBg: "#E6DEDD",
      date: "June 2021 - September 2021",
      points: [
        "Designed an automated terminal system to generate 3D OBJ files from 2D input images of common objects",
        "Implemented a tool to gather shape and measurement details of input images using the Python OpenCV library",
        "Solo-developed the above using experimental features of running Python scripts within a background Blender shell",
      ],
    },
    {
      title: "Application Development Intern",
      company_name: "Tora Trading Services",
      icon: tora,
      iconBg: "#E6DEDD",
      date: "June 2019 - August 2019",
      points: [
        "Created a unit-testing suite for data formatting validation in a transaction cost analysis platform using PyTest",
        "Built out API functionality for turning JSON financial data into insightful graphs using NumPy and Pandas frameworks",
        "Reformatted client data with scripts to insert aggregated text entries into a Salesforce database system",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Dynamic Load Balancing Research",
      description:
        "Custom-built load balancing algorithms based on Multi-Armed Bandits online learning methods. Algorithms were tested on a video streaming server with large-scale user simulation.",
      tags: [
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "AWS-S3",
          color: "blue-text-gradient",
        },
        {
          name: "AWS-Cloudwatch",
          color: "pink-text-gradient",
        },
      ],
      image: lbsystem,
      source_code_link: "https://drive.google.com/file/d/1ANXL7NoDuuHMhrZlUbDcVuH-e1NBuoAY/view",
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  