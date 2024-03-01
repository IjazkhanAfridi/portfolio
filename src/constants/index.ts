import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  // jobit,
  // tripguide,
  // threejs,
  nextjs,
  mui,
  expressjs,
  firebase,
  // sass,
  // chakraui,
  divedeepai,
  alrighttech,
  fiverr,

  conversationalAI,
  ecommerceai,
  whyportfolio,
  avatare,
  companionanimalhealth,
  contracta,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies: TTechnology[] = [
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Material UI",
    icon: mui,
  },
  // {
  //   name: "Chakra UI",
  //   icon: chakraui,
  // },
  // {
  //   name: "Sass",
  //   icon: sass,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
  {
    title: "Frontend Developer",
    companyName: "DiveDeepAI",
    icon: divedeepai,
    iconBg: "#383E56",
    date: "may 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js, Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend  Developer",
    companyName: "Alright tech",
    icon: alrighttech,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - May 2023",
    points: [
      "Developing and maintaining web applications and User Interface using React.js , Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Fiverr - Freelacer",
    icon: fiverr,
    iconBg: "#383E56",
    date: "Aug 2021 - Present",
    points: [
      "Developing and maintaining User Interfaces and web applications using React.js, Next.js, Node js Express js and other related technologies.",
      "Managing Clients with meeting and best communication skills.",
    ],
  },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "Contracta",
    description:
      "contracta is a web-based contract platform, where creating contracts for various purposes is made simple. Whether you're drafting agreements for services, partnerships, or other needs, our platform offers a user-friendly interface to easily customize and generate contracts",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Open AI",
        color: "green-text-gradient",
      },
      {
        name: "Contaxt API",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: contracta,
    sourceCodeLink: "https://contracta.app/",
  },
  {
    name: "Companion Animal Health",
    description:
      "Companion Animal Health is a platform for all things related to animal well-being. Whether you're seeking treatment options, essential supplies for animal care, or educational courses on proper pet care, we've got you covered.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind css",
        color: "pink-text-gradient",
      },
      {
        name: "contaxt api",
        color: "blue-text-gradient",
      },
    ],
    image: companionanimalhealth,
    sourceCodeLink: "https://www.companionanimalhealth.com/",
  },
  {
    name: "Why Portfolio",
    description:
      "Why Portfolio is a go-to platform for showcasing your projects and landing your dream job. web-based platform allows you to easily add and highlight your projects, creating a compelling portfolio to impress potential employers.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: whyportfolio,
    sourceCodeLink: "https://whyportfolio1.netlify.app/",
  },
  {
    name: "Avatare",
    description:
      "Avatare is a comprehensive platform offering a range of AI-driven products to enhance your business capabilities. From E-commerce AI to Playbook AI and Conversational AI, Avatare provides cutting-edge solutions to streamline operations, improve customer interactions, and drive growth. ",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: avatare,
    sourceCodeLink: "http://www.avatare.com/",
  },
  {
    name: "Conversation AI",
    description:
      "Conversational AI is a platform, where you can create, train, and integrate chatbots with ease. web-based platform empowers users to build customized chatbots, train them with relevant data, and seamlessly integrate them into websites, apps, and other platforms. ",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Contaxt Api",
        color: "pink-text-gradient",
      },
    ],
    image: conversationalAI,
    sourceCodeLink: "https://conversational.avatare.com/login",
  },
  {
    name: "E-Commerce AI",
    description:
      "Ecommerce AI is a platform, revolutionizing the way wholesalers and retailers access and utilize product data. E-Commerce platform provides real-time data from major websites like Amazon, Alibaba, and more, leveraging AI to find the best matches and prices for your business needs.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "Contaxt Api",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerceai,
    sourceCodeLink: "https://ecommerce.avatare.com/signin",
  },
];

export { services, technologies, experiences, testimonials, projects };
