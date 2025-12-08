"use client"
import { motion } from "framer-motion"

export default function Home(){
  return(
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <motion.div
          initial={{opacity:0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        ><h1 className="text-4xl text-yellow-900">Nurture Public Page</h1></motion.div>
      </main>
    </>
  )
}