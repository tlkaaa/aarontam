import { useEffect, useRef, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
    const [viewPortHeight, setViewPortHeight] = useState(window.innerHeight);
    const [heroOpacity, setHeroOpacity] = useState(1);

    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;

        if (window.pageYOffset > 50) {
            document.getElementById("nav").classList.add("drop-shadow-lg");
        } else {
            document.getElementById("nav").classList.remove("drop-shadow-lg");
        }

        if (prevScrollpos < currentScrollPos) {
            document.getElementById("nav").style.opacity = "0";
        } else {
            document.getElementById("nav").style.opacity = "1";
        }
        prevScrollpos = currentScrollPos;

        // console.log(window.pageYOffset + "   " + viewPortHeight);

        //set opacity of hero
        var opacity =
            (viewPortHeight - window.pageYOffset * 2.5) / viewPortHeight;
        opacity = Math.round(opacity * 100) / 100;
        if (opacity >= 0) {
            setHeroOpacity(opacity);
            document.getElementById("hero").style.display = "flex";
        } else {
            setHeroOpacity(0);
            document.getElementById("hero").style.display = "none";
        }
    };

    window.addEventListener("resize", () => {
        setViewPortHeight(window.innerHeight);
    });

    return (
        <>
            <Nav />

            <Hero opacity={heroOpacity} />

            <About />
            <Skills />
            <Projects />
            <Contact />
            <footer className="text-center mb-5 text-slate-500">
                Design and Built by Aaron Tam
            </footer>
        </>
    );
}

export default App;
