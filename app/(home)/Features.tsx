import { Brain, Users, Globe, LineChart, Clock, LayoutDashboard, FileText, CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Personalized Online Tuition",
    desc: "Bespoke 1-on-1 and small-group sessions tailored to each student’s unique cognitive pace and curriculum.",
    icon: <Brain className="w-7 h-7" />,
    style: "md:col-span-8 bg-[#01823e] text-white",
    iconBg: "bg-white/20",
  },
  {
    title: "Expert Faculty",
    desc: "Mentorship from certified international educators.",
    icon: <Users className="w-7 h-7" />,
    style: "md:col-span-4 bg-white border-slate-100 shadow-sm",
    iconBg: "bg-[#6b4722] text-white",
  },
  {
    title: "The Smart LMS Hub",
    desc: "Your central command center. Access live classes, recorded sessions, and organized digital notes at any time, from any device.",
    icon: <LayoutDashboard className="w-7 h-7" />,
    style: "md:col-span-4 bg-slate-50 border-slate-200",
    iconBg: "bg-[#01823e] text-white",
    extra: (
      <div className="mt-4 flex gap-2">
        <span className="text-[10px] px-2 py-1 bg-white border border-slate-200 rounded text-slate-500 flex items-center gap-1">
          <FileText size={10} /> Class Notes
        </span>
        <span className="text-[10px] px-2 py-1 bg-white border border-slate-200 rounded text-slate-500 flex items-center gap-1">
          <CheckCircle2 size={10} /> Assignments
        </span>
      </div>
    )
  },
  {
    title: "Growth Analytics",
    desc: "Real-time performance reports and regular assessments. We visualize progress so parents and students see exactly where mastery is happening.",
    icon: <LineChart className="w-7 h-7" />,
    style: "md:col-span-8 bg-white border-2 border-dashed border-[#6b4722]/20",
    iconBg: "bg-[#6b4722] text-white",
    visual: (
      <div className="mt-6 flex items-end gap-1 h-12">
        {[40, 70, 55, 90, 65, 100].map((h, i) => (
          <div key={i} className="flex-1 bg-[#01823e]/20 rounded-t-sm" style={{ height: `${h}%` }} />
        ))}
      </div>
    )
  },
  {
    title: "Global Curriculum Alignment",
    desc: "Expertly synced with UK, US, Australian, UAE, and Kerala syllabi across all key subjects.",
    icon: <Globe className="w-7 h-7" />,
    style: "md:col-span-6 bg-slate-900 text-white",
    iconBg: "bg-[#6b4722] text-white",
  },
  {
    title: "Time-Zone Flexibility",
    desc: "Education that fits your life. Convenient scheduling tailored to international school hours.",
    icon: <Clock className="w-7 h-7" />,
    style: "md:col-span-6 bg-[#6b4722]/5 border-[#6b4722]/10",
    iconBg: "bg-white text-[#6b4722] shadow-sm",
  }
];

export default function Features() {
  return (
    <section id="features" className="bg-white relative overflow-hidden py-30">
      {/* Background Brand Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#01823e]/5 rounded-full blur-[120px] -mr-64 -mt-64" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-[#01823e] font-bold text-sm tracking-[0.2em] uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-[#01823e]"></span>
            Elite Features
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            A specialized approach to <br />
            <span className="italic font-light text-[#6b4722]">academic excellence.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between overflow-hidden relative ${feature.style}`}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${feature.iconBg}`}>
                  {feature.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h4>
                <p className={`text-lg leading-relaxed ${feature.style.includes('text-white') ? 'text-white/80' : 'text-slate-600'}`}>
                  {feature.desc}
                </p>

                {feature.extra}
                {feature.visual}
              </div>

              {/* Subtle Decorative Hover Icon */}
              <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                {feature.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}