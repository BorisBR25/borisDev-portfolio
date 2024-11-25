"use client"

import { motion, AnimatePresence } from "framer-motion"
import { transitionVariantsPage } from "@/utils/motion-transitions"


const TransitionPage = () => {
  return (
    <AnimatePresence mode="wait">
      <div>
        <motion.div
          className="fixed top-0 right-full bottom-0 w-screen z-30 bg-[#2e2257]"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={transitionVariantsPage}
          transition={{delay: 0.2, duration: 0.6, ease: "easeInOut"}}
        >
          
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default TransitionPage