import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Happy Makeup",
    description:
      "Um sistema de gestão de estoque para franquias de lojas de maquiagens, utilizando a MERN Stack. Completamente responsivo, oferece controle de usuários, CRUD e autenticação JWT. Simplificando a gestão e proporcionando segurança.",
    image: "/happy-makeup.png",
    github: "https://github.com/iBrunos/MernControleEstoque",
    link: "https://happymakeup.vercel.app",
    skills: [
      { skill: "Mongo DB" },
      { skill: "Express.js" },
      { skill: "React" },
      { skill: "Tailwind CSS" },
      { skill: "Vercel" },
      { skill: "JavaScript" },
    ],
  },
  {
    name: "Lion's Hearth",
    description: "Aplicativo de desktop e uma aplicação web projetada para aprimorar e otimizar sua experiência de jogo de RPG de mesa com amigos.",
    image: "/lionshearth.png",
    github: "https://github.com/victormssa/Lionhearth",
    link: "https://lionhearth.vercel.app/",
    skills: [
      { skill: "Tauri" },
      { skill: "Mongo DB" },
      { skill: "Express.js" },
      { skill: "React" },
      { skill: "Tailwind CSS" },
      { skill: "Vercel" },
    ],
  },
  {
    name: "Genious Design",
    description:
      "Modelo de plataforma para gerenciamento de designs, Cadastro de usuários, Cookies, JWT autentication, CRUD completo.",
    image: "/genious.png",
    github: "https://github.com/hqasmei/katorfamilyphotos",
    link: "https://katorfamilyphotos.com/",
    skills: [
      { skill: "Nest.js" },
      { skill: "TypeScript" },
      { skill: "MongoDB" },
      { skill: "React" },
      { skill: "Tailwind CSS" },
      { skill: "Next" },
      { skill: "Vercel" },
    ],
  },
]
const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projetos
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                      {project.skills.map((item, idx) => (
                        <p
                          key={idx}
                          className="bg-teal-700 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold hover:bg-gray-200 hover:text-black"
                        >
                          {item.skill}
                        </p>
                      ))}
                    </div>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer mt-2"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer mt-2"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;