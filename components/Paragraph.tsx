import { motion, MotionValue, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

type Props = {
  value: string
}

export default function Paragraph({ value }: Props) {
  const element = useRef<HTMLParagraphElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  })

  const words = value.split(" ")

  return (
    <p
      ref={element}
      className="
        max-w-7xl
        flex flex-wrap
        justify-center  sm:justify-start
        px-4 sm:px-6 lg:px-10
        py-10

        cursive
        font-semibold
        text-slate-800

        text-2xl
        sm:text-3xl
        md:text-4xl
        lg:text-[50px]

        leading-snug
        sm:leading-normal
        lg:leading-relaxed
      "
    >
      {words.map((word, i) => {
        const start = i / words.length
        const end = start + 1 / words.length

        return (
          <Word
            key={i}
            range={[start, end]}
            progress={scrollYProgress}
          >
            {word}
          </Word>
        )
      })}
    </p>
  )
}

const Word = ({
    children,
    range,
    progress,
  }: {
    children: string
    range: [number, number]
    progress: MotionValue<number>
  }) => {
    const chars = children.split("")
    const amount = range[1] - range[0]
    const step = amount / chars.length

    return (
      <span className="relative inline-block mr-2 sm:mr-3 whitespace-nowrap">
        {chars.map((char, i) => {
          const start = range[0] + step * i
          const end = range[0] + step * (i + 1)

          return (
            <Char
              key={i}
              range={[start, end]}
              progress={progress}
            >
              {char}
            </Char>
          )
        })}
      </span>
    )
  }

  const Char = ({
    children,
    range,
    progress,
  }: {
    children: string
    range: [number, number]
    progress: MotionValue<number>
  }) => {
    const opacity = useTransform(progress, range, [0, 1])

    return (
      <span className="relative inline-block">
        <span className="absolute left-0 top-0 opacity-20 select-none">
          {children}
        </span>

        <motion.span
          style={{ opacity }}
          className="relative"
        >
          {children}
        </motion.span>
      </span>
    )
  }
