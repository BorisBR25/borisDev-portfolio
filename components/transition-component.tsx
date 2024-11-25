"use client"
import { fadeIn } from "@/utils/motion-transitions"
import { motion } from "framer-motion"

interface MotionTransitionProps {
  children: React.ReactNode,
  position: "right" | "bottom",
  className?: string
}

const MotionTransition = (props: MotionTransitionProps) => {
  const { children, position, className     } = props
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={fadeIn(position)}
      className={className}>
        {children}
      </motion.div>
  )

}

export default MotionTransition