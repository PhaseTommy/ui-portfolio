import "./App.css";
import { useContext } from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import { AnimatePresence, motion } from "framer-motion";
import MobileNav from "./components/MobileNav";
import { NavbarContextList } from "./context/NavbarContext";
import Hero from "./components/Hero";
import Work from "./components/Work";

function Home() {
    const { mobileNav, setMobileNav } = useContext(NavbarContextList);

    return (
        <div className="App">
            <Background />
            <Navbar />
            <AnimatePresence>
                {mobileNav && <MobileNav key="menu" />}
            </AnimatePresence>
            <Hero />
            <Work />
        </div>
    );
}

export default Home;
