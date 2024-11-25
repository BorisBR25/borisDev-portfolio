"use client"
import Image from "next/image"
import MotionTransition from "./transition-component"

const AvatarPortfolio = () => {
  return (
    <MotionTransition position="bottom" className="bottom-0 left-0 hidden md:inline-block md:absolute">
      <Image src="/avatar.png" priority className="w-full h-full lg:w-[600px] lg:h-[600px]" width={350} height={350} alt="avatar-project" />
    </MotionTransition>
  )
}

export default AvatarPortfolio