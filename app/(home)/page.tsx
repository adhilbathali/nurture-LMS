"use client"

import Courses from "../(home)/Courses/index"
import Features from "./Features";
import Hero from "./Hero";
import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useScroll } from "framer-motion";
import Results from "./Results";
import About from "./About";

export default function Home(){

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number){
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return(
        <div className="overflow-hidden" >
            <Hero />
            <About/>
            <Features/>
            <Courses/>
            <Results/>
        </div>
    )
}