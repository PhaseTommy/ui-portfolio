import "./App.css";
import { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import MobileNav from "./components/MobileNav";
import { NavbarContextList } from "./context/NavbarContext";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import DesktopMenu from "./components/DesktopMenu";
import ContactForm from "./components/ContactForm";
import { useHotkeys } from "react-hotkeys-hook";
import { useMediaQuery } from "react-responsive";
import ContactFormMobile from "./components/ContactFormMobile";

import FadeIn from "./FadeIn";
import Backdrop from "./components/Backdrop";

const item = {
    hidden: {
        opacity: 0,
        y: 40,
    },
    show: {
        opacity: 1,
        y: 0,
    },
};

const variants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.05,
        },
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

function Home() {
    const {
        mobileNav,
        desktopNav,
        contactForm,
        setContactForm,
        contactWarning,
        setContactWarning,
    } = useContext(NavbarContextList);

    useHotkeys(
        "c",
        () => setContactForm(!contactForm),
        console.log(contactForm)
    );

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 500px)",
    });

    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });

    return (
        <div className="App">
            <Background />
            <Navbar />
            {desktopNav && <DesktopMenu />}
            <AnimatePresence>
                {mobileNav && <MobileNav key="menu" />}
            </AnimatePresence>
            <AnimatePresence>
                {contactForm && (
                    <>
                        {isTabletOrMobile ? (
                            <ContactFormMobile />
                        ) : (
                            <>
                                {" "}
                                <ContactForm /> <Backdrop />{" "}
                            </>
                        )}
                    </>
                )}
            </AnimatePresence>

            <Hero />

            <About />

            <Work />

            <Skills />

            <Contact />

            <Footer />
        </div>
    );
}

export default Home;
