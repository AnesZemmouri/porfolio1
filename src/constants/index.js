import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  tactical,
  coffeeshop,
  threejs,
  expensestracker,
  AT,
  Routimize,
  projectpulse,
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

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Telecommunications Intern (Observational Training)",
    company_name: "Algérie Télécom",
    icon: AT,
    iconBg: "#161329",
    date: "Dec 2024 - Jan 2025",
    points: [
      "Learned about the internal network infrastructure and technologies used in Algeria’s leading telecom provider.",
      "Observed how internet services (ADSL, fiber optics) are configured and maintained across different regions.",
      "Explored internal applications used for client management, diagnostics, and service deployment.",
    ],
  },
  {
    title: "Fullstack Developer Intern",
    company_name: "Routimize",
    icon: Routimize,
    iconBg: "#161329",
    date: "Apr 2025 - ",
    points: [
      "Gained insight into cutting-edge route optimization technologies for the logistics and transportation sectors.",
      "Learned how algorithms are applied to optimize delivery routes, reduce fuel consumption, and improve operational efficiency.",
      "Explored the software tools and platforms used to analyze traffic data, customer demands, and delivery patterns.",
    ],
  },
];

export const projects = [
  {
    name: "Tactical",
    description:
      "A platform that provides detailed analyses and breakdowns of football tactics, aimed at enthusiasts, coaches, and analysts looking to deepen their understanding of the sport.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.5", color: "pink-text-gradient" },
    ],
    image: tactical,
    source_code_link: "https://aneszemmouri.github.io/Tactical/",
  },
  {
    name: "Project Pulse",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "NodeJs", color: "pink-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: projectpulse,
    source_code_link: "",
  },
  {
    name: "Expenses tracker",
    description:
      "A tool that helps users track and manage their expenses, providing insights into spending patterns to improve financial management.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "PHP", color: "pink-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
    ],
    image: expensestracker,
    source_code_link: "",
  },
  {
    name: "Coffee Shop",
    description:
      "A simple coffee shop website that showcases the menu, location, and contact information.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "blue-text-gradient" },
    ],
    image: coffeeshop,
    source_code_link: "https://aneszemmouri.github.io/CoffeeShop/",
  },
];
