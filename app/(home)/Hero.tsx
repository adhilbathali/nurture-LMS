import Image from "next/image";
import picture1 from '@/public/landing-images/picture1.png';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-slate-50 pt-30">
      {/* Optional: Subtle Background Decorative Element */}
      <div className="absolute top-0 right-0
                -translate-y-1/2
                translate-x-0 md:translate-x-1/4
                w-[350px] md:w-[500px]
                h-[350px] md:h-[500px]
                bg-[#01823e]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 z-10">

        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#01823e]/10 text-[#01823e] font-medium text-sm tracking-wide uppercase">
            Transforming Education Online
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1]">
            <span className="text-[#01823e]">Nurturing</span> <span className="text"     style={{ WebkitTextStroke: "1px #0F172B" }} >Minds.</span> <br />
            <span className="text-[#6b4722]">Empowering</span> <span className="text" style={{ WebkitTextStroke: "1px #0F172B"}}>Futures.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
            Expert, personalized online tuition for students from Grade 1 to higher grades.
            Give your child the academic edge they deserve.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-[#01823e] hover:bg-[#016a32] text-white rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-[#01823e]/20 hover:-translate-y-1 w-full sm:w-auto">
              Book a Free Demo
            </button>
            <button className="px-8 py-4 border-2 border-gray-200 hover:border-[#6b4722] hover:text-[#6b4722] text-gray-700 rounded-xl font-semibold text-lg transition-all w-full sm:w-auto">
              Explore Courses
            </button>
          </div>

          {/* Trust Element */}
          <div className="flex items-center gap-3 pt-6 justify-center md:justify-start">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200" />
              ))}
            </div>
            <p className="text-sm text-gray-500">
              <span className="font-bold text-gray-900">500+</span> Students already learning
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative z-10 w-full animate-float">
            <Image
              src={picture1}
              alt="Online Student Learning"
              className="w-full h-auto object-contain drop-shadow-2xl"
              priority
              placeholder="blur"
            />
          </div>

          {/* Background Accent for Image */}
          <div className="absolute inset-0 bg-linear-to-tr from-[#01823e]/20 to-transparent rounded-4xl rotate-3 scale-95 z-0" />
        </div>

      </div>
    </section>
  );
}