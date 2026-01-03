"use client"

import { useState } from "react"
import logo from "../../public/nurture_logo.png"
import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight, Menu, X } from "lucide-react"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
<nav className="fixed top-0 left-0 right-0 z-[110] flex justify-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
  <div className="relative overflow-x-hidden w-full flex justify-center">
                {/* Navbar Inner */}
                <div className="flex items-center justify-between w-[92%] md:w-9/10 max-w-[1200px] px-6 md:px-20 py-5 rounded-b-4xl bg-white relative h-20 md:h-25">

                    {/* Outward Corners - Now visible on all screen sizes */}
                    <div className="absolute -left-[30px] top-0 h-[30px] w-[30px] bg-transparent rounded-tr-4xl shadow-[15px_-15px_0_15px_white]"></div>
                    <div className="absolute -right-[30px] top-0 h-[30px] w-[30px] bg-transparent rounded-tl-4xl shadow-[-15px_-15px_0_15px_white]"></div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden flex-1">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-nurture p-2 transition-transform active:scale-90"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Left Section (Desktop) */}
                    <div className="hidden md:flex items-center flex-1 text-nurture">
                        <ul className="flex gap-10 font-extralight text-sm lg:text-base">
                            <li className="hover:text-gnurture transition-colors"><a href="#features">Features</a></li>
                            <li className="hover:text-gnurture transition-colors"><a href="#courses">Courses</a></li>
                            <li className="hover:text-gnurture transition-colors"><a href="#results">Results</a></li>
                        </ul>
                    </div>

                    {/* Center Section (Logo) */}
                    <div className="flex items-center justify-center">
                        <Image
                            src={logo}
                            alt="nurture learning solutions"
                            height={40}
                            className="md:h-[45px] w-auto"
                            placeholder="blur"
                        />
                    </div>

                    {/* Right Section (Desktop) */}
                    <div className="hidden md:flex flex-1 items-center justify-end gap-3">
                        <Button variant='ghost' className="hover:text-slate-700 h-11 text-slate-600">Sign in</Button>
                        <Button variant='default' className="hover:bg-white hover:text-gnurture border border-gnurture h-11 bg-gnurture font-semibold">
                            Demo <div className="ml-2 bg-green-600 text-white p-1 rounded-full"><ArrowRight size={16}/></div>
                        </Button>
                        <Button variant='outline' className="h-11 hover:text-gnurture border-gnurture text-gnurture font-semibold">Register</Button>
                    </div>

                    {/* Placeholder for mobile balance */}
                    <div className="flex md:hidden flex-1"></div>
                </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay - Animated Slide */}
            <div
                className={`
                    fixed left-0 right-0 z-[100] md:hidden bg-white border-t border-slate-100 shadow-2xl transition-all duration-500 ease-in-out px-8 pb-10 pt-28 rounded-b-[3rem]
                    ${isOpen ? "top-0 opacity-100" : "-top-[100%] opacity-0"}
                `}
            >
                <div className="flex flex-col gap-8">
                    <ul className="flex flex-col gap-6 text-xl font-medium text-nurture">
                        <li><a href="#features" onClick={() => setIsOpen(false)}>Features</a></li>
                        <li><a href="#courses" onClick={() => setIsOpen(false)}>Courses</a></li>
                        <li><a href="#results" onClick={() => setIsOpen(false)}>Results</a></li>
                    </ul>

                    <div className="h-[1px] bg-slate-100 w-full" />

                    <div className="flex flex-col gap-4">
                        <Button variant='outline' className="w-full h-14 border-gnurture text-gnurture text-lg font-semibold rounded-xl">
                            Register
                        </Button>
                        <Button variant='default' className="w-full h-14 bg-gnurture text-white text-lg font-semibold rounded-xl flex items-center justify-center gap-2">
                            Get a Demo <ArrowRight size={20} />
                        </Button>
                        <Button variant='ghost' className="w-full text-slate-500 text-lg">
                            Sign in
                        </Button>
                    </div>
                </div>
            </div>

            {/* Background Dimmer (optional) */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/20 z-[90] transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />

        </>
    )
}