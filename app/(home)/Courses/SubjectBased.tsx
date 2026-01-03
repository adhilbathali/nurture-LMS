import { CheckCircle2, Calculator, Beaker, Languages } from "lucide-react";
// import Lottie from "lottie-react"; // Import your lottie player

const subjects = [
  {
    title: "Mathematics",
    description: "Empowering students with analytical thinking and numerical mastery.",
    points: ["Concept building", "Problem-solving techniques", "Exam confidence"],
    color: "bg-[#01823e]", // Brand Green
    accent: "text-[#01823e]",
    lightBg: "bg-[#01823e]/5",
    icon: <Calculator className="w-8 h-8" />,
    // lottieData: mathAnimation, // Placeholder for your Lottie JSON
  },
  {
    title: "Science",
    description: "Exploring the laws of nature through Physics, Chemistry, and Biology.",
    points: ["Physics, Chemistry, Biology focus", "Concept clarity and application", "Structured explanations"],
    color: "bg-[#6b4722]", // Brand Brown
    accent: "text-[#6b4722]",
    lightBg: "bg-[#6b4722]/5",
    icon: <Beaker className="w-8 h-8" />,
    // lottieData: scienceAnimation,
  },
  {
    title: "Languages",
    description: "Bridging communication gaps with curriculum-aligned linguistic mastery.",
    points: ["Subject-specific language learning", "Curriculum-aligned teaching", "Confidence in reading & writing"],
    color: "bg-slate-900",
    accent: "text-slate-900",
    lightBg: "bg-slate-900/5",
    icon: <Languages className="w-8 h-8" />,
    // lottieData: languageAnimation,
  }
];

export default function SubjectBased() {
  return (
    <section className="py-24 bg-[#F7FAF8]">
      <div className="container mx-auto px-6 max-md:px-0">

        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[#01823e] font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Specialized Learning
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            Subject-Based <span className="text-[#6b4722] italic font-light">Courses</span>
          </h3>
        </div>

        {/* The Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {subjects.map((item, index) => (
            <div key={index} className="group relative flex flex-col">

              {/* Main Card */}
              <div className="relative bg-white border border-slate-100 rounded-[2.5rem] p-10 pt-16 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-3 transition-all duration-500 h-full flex flex-col z-10">

                {/* Animation/Icon Header */}
                <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${item.lightBg} ${item.accent}`}>
                  {/*
                    Lottie Integration:
                    If you use lottie-react, replace the icon with:
                    <Lottie animationData={item.lottieData} className="w-16 h-16" />
                  */}
                  {item.icon}
                </div>

                <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  {item.description}
                </p>

                {/* Points List */}
                <ul className="space-y-4 mb-10 grow">
                  {item.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`mt-1 shrink-0 ${item.accent}`}>
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="text-gray-700 font-medium text-sm">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative Bottom Bar */}
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className={`h-full w-1/4 rounded-full transition-all duration-700 group-hover:w-full ${item.color}`} />
                </div>
              </div>

              {/* Creative Glow Effect - Using Brand Color */}
              <div className={`absolute inset-0 blur-3xl opacity-0 group-hover:opacity-15 transition-opacity rounded-[2.5rem] z-0 ${item.color}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}