"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"


const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 mr-4">
          <Image
            src="/profileImage.jpg"
            alt=""
            width={2000}
            height={1000}
            className="rounded-full shadow-2xl w-[40rem] h-[27.5em]"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Oi, sou o Bruno Seixas!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Sou {" "}
            <span className="font-semibold text-teal-600">
              Software Engineer{" "}
            </span>
           no 8° semestre de Bacharel em Ciência da computação focado em desenvolvimento Full-Stack, de Salvador-BA para o Mundo!
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 cursor-pointer rounded shadow hover:bg-teal-700 mr-4"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projetos
          </Link>
          <Link
            to="Contatos"
            className="text-black font-semibold px-6 py-3 bg-transparent cursor-pointer border-2 border-teal-600 rounded shadow  hover:bg-zinc-200 hover:text-black dark:text-white"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contatos
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
