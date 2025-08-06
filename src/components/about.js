import React from "react";
import "../styles/about.css";

const areas = [
  {
    title: "IA & Data Science",
    text: "Coleta, tratamento, análise e modelagem de dados, com foco em estratégias analíticas que apoiam a tomada de decisão. Aplicação de Machine Learning para gerar insights e otimização de processos de negócio.",
  },
  {
    title: "Backend",
    text: "Desenvolvimento de APIs robustas, sistemas escaláveis e soluções integradas, utilizando tecnologias como .NET Core, Python e bancos de dados relacionais e não-relacionais.",
  },
  {
    title: "Frontend",
    text: "Criação de interfaces modernas e responsivas com React, Angular e Vue.js, entregando experiências rápidas e intuitivas para usuários finais.",
  },
  {
    title: "UI/UX",
    text: "Foco na experiência do usuário desde a concepção até a entrega final, com design centrado no usuário, prototipação, usabilidade e acessibilidade.",
  },
];

export default function About() {
  return (
    <section className="about">
      <h2>Sobre Mim</h2>
      <p className="about-summary">
        Após a formação em Análise e Desenvolvimento de Sistemas e especialização em IA e Data Science,
        atuei em projetos voltados à Governança de Dados, Análise de Negócios e Desenvolvimento Full-Stack.
        Busco alinhar tecnologia, estratégia e experiência do usuário para gerar soluções eficientes e inovadoras.
      </p>

      <div className="about-cards">
        {areas.map((area) => (
          <div key={area.title} className="area-card">
            <h3>{area.title}</h3>
            <p>{area.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
