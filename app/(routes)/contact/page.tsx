"use client"

import ContactForm from "@/components/contact-form"
import ContainerPage from "@/components/container"
import TransitionPage from "@/components/transition-page"

const Contactpage = () => {
  return (
    <ContainerPage>
          <TransitionPage/>
          <h1 className='text-2xl leading-tight text-center pb-5 md:text-left md:text-5xl md:mt-10'>Contacta 
          <span className='font-bold text-secondary'> conmigo</span>
        </h1>
          <ContactForm/>
    </ContainerPage>

  )
}

export default Contactpage