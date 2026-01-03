import logo from "@/public/nurture_logo_white.png"
import mascots from "@/public/images/footer_mascots.png"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Footer(){
    return <footer className="relative flex justify-center w-full filter drop-shadow-[0_-1px_2px_rgba(0,0,0,0.25)] text-white">
              <div className="relative flex justify-center items-baseline p-10 max-lg:p-8 w-full max-w-[85vw] max-xl:max-w-[90vw] max-lg:max-w-[90vw] bg-gnurture rounded-t-[30px]">

                  {/* outer curve */}
                  <div className="absolute -left-[30px] bottom-0 h-[30px] w-[30px] overflow-hidden">
                      <div className="h-full w-full rounded-br-4xl shadow-[15px_15px_0_15px_#01823e]"></div>
                  </div>

                  <div className="absolute -right-[30px] bottom-0 h-[30px] w-[30px] overflow-hidden">
                      <div className="h-full w-full rounded-bl-4xl shadow-[-15px_15px_0_15px_#01823e]"></div>
                  </div>

                  {/* content */}
                  <div className="flex gap-30 w-full flex-col justify-center items-center pt-10">

                    {/* footer top */}
                    <div className="flex w-full max-lg:flex-col justify-center max-lg:gap-20  gap-20 items-center">
                      {/* left */}
                      <div className="flex flex-col max-xl:w-4/5 gap-20 max-lg:gap-10 max-lg:w-full">
                          <div className="flex max-lg:flex-col gap-10 justify-baseline w-full items-center pb-10">
                              {/* logo */}
                              <div className="flex flex-col items-center w-1/3 max-lg:w-full">
                                <div className="flex justify-center items-center mb-5">
                                  <Image
                                    src={logo}
                                    alt="nurture"
                                    height={60}
                                  />
                                </div>
                                <div className="flex w-full justify-center gap-3 items-baseline">
                                  <svg height={30} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/></svg>
                                  <svg height={30} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z"/></svg>
                                  <svg height={30} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"/></svg>
                                  <svg height={30} fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/></svg>
                                </div>
                              </div>
                              <div className="flex w-2/3 max-lg:w-full max-lg:text-center">
                                Ease your learning journey through focused lessons, smart practice, and real results that reflect in confidence and performance.
                              </div>
                          </div>

                          {/* Links */}
                          <div className="flex flex-col items-start gap-10 text-center md:flex-row md:justify-center md:text-left">

                            <div className="flex flex-col justify-center items-start">
                              <h5 className="mb-3 font-black">Quick Links</h5>
                              <ul className="flex flex-col gap-2 justify-center items-start">
                                <li><a href="#features" className="hover:underline">Features</a></li>
                                <li><a href="#courses" className="hover:underline">Courses</a></li>
                                <li><a href="#results" className="hover:underline">Results</a></li>
                              </ul>
                            </div>

                            <div className="flex flex-col justify-center items-start">
                              <h5 className="mb-3 font-black">Contacts</h5>
                              <ul className="flex flex-col gap-2 justify-center items-start">
                                <li><a href="tel:+912345678901" className="hover:underline">+91 2345678901</a></li>
                                <li><a href="mailto:nurture@learning.com" className="hover:underline">nurture@learning.com</a></li>
                                <li>Vytila</li>
                              </ul>
                            </div>

                            <div className="flex flex-col justify-center items-start">
                              <h5 className="mb-3 font-black">Access Portal</h5>
                              <ul className="flex flex-col gap-2 justify-center items-start">
                                <li><a href="/manager-login" className="hover:underline">Login as Manager</a></li>
                                <li><a href="/teacher-login" className="hover:underline">Login as Teacher</a></li>
                                <li><a href="/teacher-signup" className="hover:underline">Sign Up as Teacher</a></li>
                              </ul>
                            </div>

                          </div>

                      </div>

                      {/* right */}
                      <div className="flex flex-col items-center justify-center">
                        {/* Demo Section */}
                        <div className="flex flex-col gap-6 max-w-sm items-baseline">
                          <h5 className="text-4xl font-bold text-white tracking-tight">
                            Request a <br /> <span className="opacity-80">Demo</span>
                          </h5>

                          <div className="relative flex justify-start items-center">
                            <input
                              type="email"
                              placeholder="Enter your email"
                              className="w-full bg-white/10 border border-white/20 rounded-full py-4 px-6 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                            />
                            <button className="absolute right-2 bg-white text-[#01823e] hover:bg-[#6b4722] hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 font-bold">
                              <ArrowRight/>
                            </button>
                          </div>
                        </div>
                        {/* mascots */}
                        <div className="flex-1 px-10">
                          <Image
                            src={mascots}
                            alt="nurture mascots"
                            height={300}
                          />
                        </div>
                      </div>
                    </div>

                    {/* footer bottom */}
                    <div className="border-t border-white/10 mt-0 pt-8 pb-4">
                      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                        {/* Creative Copyright */}
                        <p>
                          © {new Date().getFullYear()} <span className="text-white font-medium">Nurture Learning Solutions</span>.
                          <span className="ml-2 hidden sm:inline text-white/40">|</span>
                          <span className="block sm:inline sm:ml-2 italic">Always growing. Always learning.</span>
                        </p>

                        {/* Secondary Links */}
                        <div className="flex gap-6">
                          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                          <a href="#" className="hover:text-white transition-colors">Help Center</a>
                        </div>

                      </div>
                    </div>
                  </div>
              </div>
           </footer>
}