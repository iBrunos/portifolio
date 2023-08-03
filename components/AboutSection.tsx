import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Scrum" },
  { skill: "Express" },
  { skill: "Mongo DB" },
  { skill: "VBA" },
  { skill: "Vercel" },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Sobre Mim
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Venha me Conhecer!
            </h1>
            <p>
              Oi sou o Bruno Seixas{" "}
              <span className="font-bold">{"altamente ambicioso"}</span>,
              <span className="font-bold">{" motivado"}</span>, e
              <span className="font-bold">{" criado como "}</span> software engineer
              em Salvador-Bahia.
            </p>
            <br />
            <p>

              Estou me formando na Universidade Salvador, em 2023
              em bacharelado em Ciência da Computação e tenho trabalhado na
              area desde então.
            </p>
            <br />
            <p>
              Tenho uma ampla gama de hobbies e paixões que me mantêm ocupado. Desde ler, praticar esportes, viajar e até fazer vídeos no YouTube, estou sempre em busca de novas experiências e adoro me manter engajado e aprendendo coisas novas.

            </p>
            <br />
            <p>
            Acredito que nunca{" "}
              <span className="font-bold text-teal-500">
              se deve parar de crescer
              </span>{" "}
              e é isso que me esforço para fazer, tenho paixão por tecnologia e vontade de sempre ultrapassar os limites do que é possível. Estou animado para ver onde minha carreira me levará e estou sempre aberto a novas oportunidades. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-teal-700 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold hover:bg-gray-200 hover:text-black"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/avatar.png"
              alt=""
              width={400}
              height={400}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
