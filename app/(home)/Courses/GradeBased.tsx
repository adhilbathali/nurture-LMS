import Card from "@/components/ui/3dCard";
import { GraduationCap, School, BookOpen } from "lucide-react";

export default function GradeBased() {
  const programs = [
    {
      title: "Primary School",
      grades: "Grades 1–5",
      content: "Building a strong academic foundation where curiosity meets clarity.",
      icon: <School />,
    },
    {
      title: "Middle School",
      grades: "Grades 6–8",
      content: "Transitioning from learning to application and critical thinking.",
      icon: <BookOpen />,
    },
    {
      title: "Secondary & Higher",
      grades: "Grades 9–13",
      content: "Mastering subjects and preparing for global competitive excellence.",
      icon: <GraduationCap />,
    },
  ];

  return (
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-[#01823e] font-bold text-sm tracking-[0.2em] uppercase mb-4">
            Levels
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
            Grade-Based <span className="text-[#6b4722] italic font-light">Courses</span>
          </h3>
        </div>
        {/* 3D Cards Grid */}
        <div className="flex justify-center max-md:flex-col max-md:items-center">
          {programs.map((program, index) => (
            <div key={index} className="relative group">
              <Card
                icon={program.icon}
                title={program.title}
                content={program.content}
                grade={program.grades}
              />
            </div>
          ))}
        </div>

      </div>
  );
}