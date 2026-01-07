import Paragraph from "@/components/Paragraph"

const paragraph =
  "Learning grows best when it’s nurtured. With personalized online tuition and expert guidance, we help students build strong foundations and lasting confidence."

export default function About() {
  return (
    <main className="w-full flex justify-center items-center px-4 sm:px-6 lg:px-12 py-16">
      <Paragraph value={paragraph} />
    </main>
  )
}
