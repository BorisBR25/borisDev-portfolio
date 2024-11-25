"use client"
import MotionTransition from "./transition-component"
import Image from "next/image"


const Avatar = () => {
  return (
    <MotionTransition position="bottom" className="botton-0 right-0 md:-bottom-60 md:-right-20 hidden md:inline-block md:absolute lg:bottom-0 lg:right-0">
      <Image src="/avataraboutme.png" priority width={400} height={400} alt="avatar"/>
    </MotionTransition>
  )
}

export default Avatar