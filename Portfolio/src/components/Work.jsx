import React from "react";
import ProjectCard from "./ProjectCard";

const professionalWorks = [
  {
    imgSrc: "/images/teacher-cms.png",
    title: "Teacher CMS",
    tags: ["Reactjs", "Nodejs", "Expressjs", "Ant Design"],
    projectLink: "#",
  },
  {
    imgSrc: "/images/review-tool.png",
    title: "Review Tools AI",
    tags: ["Nextjs", "Tailwindcss", "Laravel", "MongoDB"],
    projectLink: "https://reviewtools.ai/",
  },
  {
    imgSrc: "/images/vimma.png",
    title: "VIMMA",
    tags: ["Nextjs", "Nodejs", "Redis", "MySQL"],
    projectLink: "",
  },
  {
    imgSrc: "/images/unilearn.png",
    title: "UniLearn",
    tags: ["Nextjs", "Nodejs", "Redis", "MySQL"],
    projectLink: "",
  },
];

const personalWorks = [
  {
    imgSrc: "/images/quicknote.png",
    title: "QuickNote",
    tags: ["Nextjs", "Nodejs", "NestJS", "PostgreSQL"],
    projectLink: "https://reviewtools.ai/",
  },
  {
    imgSrc: "/images/chat-app.png",
    title: "Chat app realtime",
    tags: ["Reactjs", "Nodejs", "Expressjs", "Socket.io"],
    projectLink: "https://github.com/DANHCHUNG1405/chat-app",
  },
  {
    imgSrc: "/images/healthcare.png",
    title: "HealthCare",
    tags: ["Reactjs", "Nodejs", "Redux", "Expressjs"],
    projectLink: "https://github.com/DANHCHUNG1405/healthcare",
  },
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
];

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">My portfolio highlights</h2>

        <div className="mb-10 reveal-up">
          <div className="flex items-center gap-3 mb-5">
            <span className="material-symbols-rounded text-sky-400" aria-hidden="true">
              business_center
            </span>
            <h3 className="text-lg font-semibold text-zinc-200">Professional Experience</h3>
            <span className="text-xs text-zinc-500 bg-zinc-800 ring-1 ring-zinc-700 px-2 py-0.5 rounded-full">
              Built at companies
            </span>
          </div>
          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {professionalWorks.map(({ imgSrc, title, tags, projectLink }, key) => (
              <ProjectCard
                key={key}
                imgSrc={imgSrc}
                title={title}
                tags={tags}
                projectLink={projectLink}
                isProfessional={true}
                classes="reveal-up"
              />
            ))}
          </div>
        </div>

        <div className="reveal-up">
          <div className="flex items-center gap-3 mb-5">
            <span className="material-symbols-rounded text-zinc-400" aria-hidden="true">
              code
            </span>
            <h3 className="text-lg font-semibold text-zinc-200">Personal Projects</h3>
          </div>
          <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
            {personalWorks.map(({ imgSrc, title, tags, projectLink }, key) => (
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
      </div>
    </section>
  );
};

export default Work;
