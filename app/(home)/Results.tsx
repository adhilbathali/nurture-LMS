import React from 'react';
import { TrendingUp, BookOpen, BarChart3, CheckCircle2, ArrowUpRight } from 'lucide-react';

const Results = () => {
  return (
    <section id="results" className="py-30 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">

        {/* Subtle Decorative Accents */}
        <div
  className="
    pointer-events-none
    absolute
    top-0 right-0
    -translate-y-8 sm:-translate-y-12
    translate-x-0 sm:translate-x-6 md:translate-x-12
    w-56 h-56
    sm:w-72 sm:h-72
    md:w-96 md:h-96
    bg-[#01823e]/5
    rounded-full
    blur-[80px] sm:blur-[100px]
  "
/>
        <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-[#6b4722]/5 rounded-full blur-[100px]" />

        {/* Header */}
        <div className="relative z-10 mb-20">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#01823e]/10 border border-[#01823e]/20 mb-6">
              <span className="text-[#01823e] text-xs font-bold uppercase tracking-[0.2em]">Impact Report 2025</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-[#101828] mb-6 tracking-tight">
              Real Results. <span className="text-[#01823e]">Measurable</span> Success.
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
              We empower students with a data-driven approach. Our LMS doesn&apos;t just deliver content; it nurtures quantifiable academic evolution.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">

          {/* Card 1: Concept Mastery */}
          <div className="lg:col-span-7 group relative bg-white border border-slate-200 p-8 md:p-12 rounded-[2.5rem] hover:shadow-2xl hover:shadow-[#6b4722]/10 transition-all duration-500">
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#6b4722]/10 text-[#6b4722] mb-8">
                  <BookOpen size={28} />
                </div>
                <h3 className="text-3xl font-bold text-[#101828] mb-4 tracking-tight">Stronger Concept Mastery</h3>
                <p className="text-slate-500 text-lg max-w-md leading-relaxed">
                  Students achieve clear understanding of core concepts within a structured framework, building the foundation for advanced problem-solving.
                </p>
              </div>

              <div className="mt-16 flex items-baseline gap-4">
                <span className="text-7xl md:text-8xl font-black text-[#6b4722] tracking-tighter">4–6</span>
                <div>
                  <span className="block text-[#101828] font-bold text-2xl uppercase leading-none">Weeks</span>
                  <span className="text-slate-400 text-sm font-medium italic">To core mastery</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Exam Performance (The "Hero" Stat) */}
          <div className="lg:col-span-5 group bg-[#01823e] p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-[#01823e]/20 flex flex-col justify-between transform transition-all duration-500 hover:translate-y-[-4px]">
            <div className="text-white">
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-md border border-white/20">
                  <TrendingUp size={32} className="text-white" />
                </div>
                <div className="flex items-center gap-1 bg-white text-[#01823e] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                  Live Stats <ArrowUpRight size={12} />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">Exam Performance</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                Significant improvement in scores through strategy-based learning and confidence-building assessments.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-baseline gap-2">
                <span className="text-7xl font-black text-white tracking-tighter">30%</span>
                <span className="text-2xl font-bold text-white/50">Gain</span>
              </div>
              <p className="text-white/70 font-bold uppercase tracking-widest text-xs mt-2 italic">Performance Analytics Baseline</p>
            </div>
          </div>

          {/* Card 3: Tracked Progress (Wide Footer Card) */}
          <div className="lg:col-span-12 group bg-white border border-slate-200 p-8 md:p-10 rounded-[2.5rem] hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-5 mb-6">
                <div className="p-3 bg-[#01823e]/10 text-[#01823e] rounded-xl">
                  <BarChart3 size={24} />
                </div>
                <h3 className="text-3xl font-bold text-[#101828] tracking-tight">Tracked & Measurable Progress</h3>
              </div>
              <p className="text-slate-500 text-lg max-w-3xl leading-relaxed">
                <span className="text-[#101828] font-semibold">100% Transparency.</span> Every student journey is logged and visualized. We provide full visibility into academic growth for both parents and educators.
              </p>
            </div>

            <div className="flex items-center gap-8 px-10 py-8 bg-slate-50 rounded-[2rem] border border-slate-100 group-hover:bg-[#01823e]/5 transition-colors">
              <div className="text-center">
                <span className="block text-5xl font-black text-[#01823e] tracking-tighter">100%</span>
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] mt-2 block">Data Driven</span>
              </div>
              <div className="h-16 w-px bg-slate-200" />
              <div className="text-center">
                <span className="block text-5xl font-black text-[#101828] tracking-tighter">Live</span>
                <span className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] mt-2 block">Reporting</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Credibility Section
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-slate-200 pt-10">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-400">
                  U{i}
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm font-medium">
              Joined by <span className="text-[#101828] font-bold">500+ students</span> this semester
            </p>
          </div>

          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 text-slate-400">
               <CheckCircle2 size={18} className="text-[#01823e]" />
               <span className="text-sm font-semibold uppercase tracking-wider">Verified Outcomes</span>
             </div>
             <div className="flex items-center gap-2 text-slate-400">
               <CheckCircle2 size={18} className="text-[#01823e]" />
               <span className="text-sm font-semibold uppercase tracking-wider">Global Pedagogy</span>
             </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Results;