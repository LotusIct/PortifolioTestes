import React from "react";
import "../styles/projects.css";

const projects = [
  {
    id: 1,
    title: "Projeto 1",
    description: "Descrição breve do projeto 1.",
    image: "/images/project1.png",
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Descrição breve do projeto 2.",
    image: "/images/project2.png",
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Descrição breve do projeto 3.",
    image: "/images/project3.png",
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "Descrição breve do projeto 4.",
    image: "/images/project4.png",
  },
  {
    id: 5,
    title: "Projeto 5",
    description: "Descrição breve do projeto 5.",
    image: "/images/project5.png",
  },
  {
    id: 6,
    title: "Projeto 6",
    description: "Descrição breve do projeto 6.",
    image: "/images/project6.png",
  },
  {
    id: 7,
    title: "Projeto 7",
    description: "Descrição breve do projeto 7.",
    image: "/images/project7.png",
  },
  {
    id: 8,
    title: "Projeto 8",
    description: "Descrição breve do projeto 8.",
    image: "/images/project8.png",
  },
  {
    id: 9,
    title: "Projeto 9",
    description: "Descrição breve do projeto 9.",
    image: "/images/project9.png",
  },
  {
    id: 10,
    title: "Projeto 10",
    description: "Descrição breve do projeto 10.",
    image: "/images/project10.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container">
      <h2>Side Projects
</h2>
      <div className="projects-grid">
        {projects.map(({ id, title, description, image }) => (
          <div key={id} className="box project-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
