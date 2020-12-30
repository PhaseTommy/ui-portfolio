import "./App.css";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import { AnimatePresence } from "framer-motion";
import MobileNav from "./components/MobileNav";
import { NavbarContextList } from "./context/NavbarContext";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home() {
    const { mobileNav } = useContext(NavbarContextList);

    return (
        <div className="App">
            <Background />
            <Navbar />
            <AnimatePresence>
                {mobileNav && <MobileNav key="menu" />}
            </AnimatePresence>
            <Hero />
            <Work />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default Home;
