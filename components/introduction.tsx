"use client"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
const Introduction = () => {
  return (
    <div className='z-20 w-full bg-darkBg/60'>
      <div className='z-20 grid items-center h-fit p-6 py-20 md:py-0 md:pt-24 md:grid-cols-2 lg:px-32'>
        <Image src="/imageHome.png" priority width={600} height={600} alt="avatar" />

        <div className='flex flex-col justify-center max-w-md'>
          <h1 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10'>
            Si puedes imaginarlo,
            <TypeAnimation
              sequence={
                [
                  "¡Puedes crearlo!",
                  1000,
                  "¡Puedes desarrollarlo!",
                  1000,
                  "¡Puedes programarlo!",
                  1000,
                ]
              }
              wrapper="span"
              className="block font-bold text-secondary"  
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8 lg:text-2xl'>
          ¡Hola! Soy Boris, desarrollador de software junior, con experiencia en backend adquirida en mis practicas, creando soluciones sólidas y escalables para aplicaciones web.
          Me apasiona optimizar procesos, diseñar arquitecturas eficientes y colaborar en proyectos que integren frontend y backend para ofrecer experiencias completas. ¡Bienvenido a mi portafolio!
          </p>
          <div className='flex items-center justify-center gap-3 '>
            <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50 lg:text-lg">
              Ver proyectos
            </a>
            <a href="/contact" className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary  lg:text-lg" >
              Contacta conmigo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction