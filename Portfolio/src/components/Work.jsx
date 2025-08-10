import React from "react";
import ProjectCard from "./ProjectCard";
const works = [
  {
    imgSrc: "/images/todoapp.png",
    title: "ToDo App",
    tags: ["Reactjs", "Tailwindcss"],
    projectLink: "https://todo-ecru-two-76.vercel.app/",
  },
  {
    imgSrc: "/images/bookstore.png",
    title: "BookStore",
    tags: ["Reactjs", "Tailwindcss"],
    projectLink: "https://bookstore-dtfr.vercel.app/",
  },
  {
    imgSrc: "/images/healthcare.png",
    title: "HealthCare",
    tags: ["Reactjs", "Nodejs", "Redux", "Expressjs"],
    projectLink: "https://github.com/DANHCHUNG1405/healthcare",
  },
  {
    imgSrc: "/images/portfolio.png",
    title: "My portfolio",
    tags: ["Reactjs", "Tailwindcss"],
    projectLink: "#",
  },
  {
    imgSrc: "/images/chat-app.png",
    title: "Chat app realtime",
    tags: ["Reactjs", "Nodejs", "Expressjs", "Socket.io"],
    projectLink: "https://github.com/DANHCHUNG1405/chat-app",
  },
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
