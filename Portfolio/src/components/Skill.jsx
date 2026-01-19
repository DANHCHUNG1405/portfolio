import React from "react";
import SkillCard from "./SkillCard";
const skillItem = [
  {
    imgSrc: "/images/html.svg",
    label: "HTML",
    desc: "Structure",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "UI Library",
  },
  {
    imgSrc: "/images/redux.svg",
    label: "Redux",
    desc: "State Management",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "Utility-first CSS",
  },
  {
    imgSrc: "/images/sequelize.svg",
    label: "Sequelize",
    desc: "SQL ORM",
  },
  {
    imgSrc: "/images/PostgresSQL.svg",
    label: "PostgreSQL",
    desc: "Relational Database",
  },
  {
    imgSrc: "/images/mongodb.svg",
    label: "MongoDB",
    desc: "NoSQL Database",
  },
  {
    imgSrc: "/images/Ant Design.svg",
    label: "Ant Design",
    desc: "UI Component Library",
  },
  {
    imgSrc: "/images/Next.js.svg",
    label: "NextJS",
    desc: "React Framework",
  },
  {
    imgSrc: "/images/Nest.js.svg",
    label: "NestJS",
    desc: "Backend Framework",
  },
  {
    imgSrc: "/images/Socket.io.svg",
    label: "Socket.io",
    desc: "Real-time Communication",
  },
  {
    imgSrc: "/images/PHP.svg",
    label: "PHP",
    desc: "Server-side Language",
  },
  {
    imgSrc: "/images/Laravel.svg",
    label: "Laravel",
    desc: "PHP Framework",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Technologies I Use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create
          exceptional, high-performing websites & applications.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <div key={key}>
              {" "}
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
