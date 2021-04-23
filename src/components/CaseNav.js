import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import storage from "local-storage-fallback";
import { useMediaQuery } from "react-responsive";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global.js";
import { lightTheme, darkTheme } from "../theme.js";
import {
    motion,
    useViewportScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion";

import { NavLink } from "react-router-dom";
import { NavbarContextList } from "../context/NavbarContext";

const NavWrap = styled(motion.div)`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: fixed;
    top: 0;

    left: 0;
    right: 0;
    @media (max-width: 500px) {
        top: auto;
        bottom: 0;
        height: 64px;
    }
`;

const NavContent = styled.div`
    padding-left: 64px;
    padding-right: 64px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 500px) {
        padding-left: 16px;
        padding-right: 16px;
    } ;
`;

const NavButton = styled.h6`
    font-size: 14px;

    font-weight: bold;
    z-index: 10;
`;

const NavButtonWrapper = styled(motion.div)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
`;

const ToggleThemeBtn = styled(motion.button)`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background: none;
    margin-right: 4px;
    &:nth-child(3) {
        margin-right: 0px;
    }
`;

const MoonIcon = styled.path`
    transition: all 0.1s ease-in-out;
    @media (min-width: 1025px) {
        ${ToggleThemeBtn}:hover & {
            fill: #ff661a;
        }
    }
`;

const SunIcon = styled.path`
    transition: all 0.1s ease-in-out;
    @media (min-width: 1025px) {
        ${ToggleThemeBtn}:hover & {
            fill: #5813b1;
        }
    }
`;

const ProgressBar = styled(motion.div)`
    position: "fixed";
    top: 0;
    left: 0;
    right: 0;
    height: 40;

    background: "#8666E6";
`;

const MobileMenuButton = styled.button`
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;
    border: none;
    border-radius: 64px;
    z-index: 12;
`;

const CaseNav = () => {
    const { scrollYProgress } = useViewportScroll();
    const scaleX = useTransform(scrollYProgress, [1, 0], [1, 0]);
    const { caseNav, setCaseNav } = useContext(NavbarContextList);

    const getInitialTheme = () => {
        const savedTheme = storage.getItem("theme");
        return savedTheme ? JSON.parse(savedTheme) : { theme: "dark" };
    };
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

    const [theme, setTheme] = useState(getInitialTheme);
    const [themeCounter, setThemeCounter] = useState(0);

    const toggleTheme = () => {
        // if the theme is not light, then set it to dark
        if (theme === "light") {
            setTheme("dark");

            // otherwise, it should be light
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        storage.setItem("theme", JSON.stringify(theme), [theme]);
        if (theme === "dark") {
            setThemeCounter(0);
        } else if (theme === "light") {
            setThemeCounter(1);
        } else if (theme === "") {
            setThemeCounter(0);
            setTheme("dark");
        }
    }, [theme]);

    const HoverAnimation = {
        rest: {
            x: 0,
            ease: "easeInOut",
            duration: 0.2,
            type: "tween",
        },
        hover: {
            x: -4,
            ease: "easeInOut",
            duration: 0.2,
            type: "tween",
        },
    };

    useEffect(() => {
        console.log(scrollYProgress);
        if (scrollYProgress === 0) {
            setCaseNav(true);
        }
    }, []);

    return (
        <>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                <NavWrap
                    className="case-nav"
                    key="id"
                    initial={{ y: 0 }}
                    exit={{ y: -40 }}
                >
                    <motion.div
                        style={{
                            transformOrigin: "top left",
                            scaleX,
                        }}
                    ></motion.div>
                    <NavContent>
                        <NavLink
                            style={{ textDecoration: "none", color: "none" }}
                            to="/"
                        >
                            <NavButtonWrapper
                                initial="rest"
                                animate="rest"
                                whileHover="hover"
                                variants={HoverAnimation}
                            >
                                <motion.svg
                                    width="14"
                                    height="9"
                                    viewBox="0 0 14 9"
                                    className="nav-arrow"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                        marginRight: "8px",
                                        paddingTop: "2px",
                                    }}
                                    variants={HoverAnimation}
                                    initial="rest"
                                    animate="hover"
                                >
                                    <motion.path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M4.99372 8.73641C4.65201 9.08786 4.09799 9.08786 3.75628 8.73641L0.256279 5.1364C-0.0854262 4.78495 -0.0854262 4.21509 0.256279 3.86361L3.75628 0.263602C4.09799 -0.0878672 4.65201 -0.0878672 4.99372 0.263602C5.33543 0.61508 5.33543 1.18492 4.99372 1.5364L2.98743 3.60001H13.125C13.6083 3.60001 14 4.00295 14 4.50001C14 4.99708 13.6083 5.40001 13.125 5.40001H2.98743L4.99372 7.46363C5.33543 7.81508 5.33543 8.38496 4.99372 8.73641Z"
                                        fill="none"
                                    />
                                </motion.svg>
                                <NavButton>Back To Projects</NavButton>
                            </NavButtonWrapper>
                        </NavLink>

                        <MobileMenuButton
                            className="case-toggle"
                            onClick={toggleTheme}
                            whileHover={{ y: -2 }}
                        >
                            {themeCounter === 0 ? (
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 6.92226C9.34329 7.21926 8.61432 7.38456 7.84678 7.38456C4.95767 7.38456 2.61559 5.04251 2.61559 2.15342C2.61559 1.38577 2.78094 0.656737 3.07798 0C1.26292 0.820792 0 2.64734 0 4.76886C0 7.65795 2.34208 10 5.23119 10C7.35263 10 9.17916 8.7372 10 6.92226Z"
                                        fill="white"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 10 10"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M5.62522 0.624977C5.62522 0.279815 5.34542 0 5.00023 0C4.65506 0 4.37524 0.279815 4.37524 0.624977V1.24995C4.37524 1.59512 4.65506 1.87493 5.00023 1.87493C5.34542 1.87493 5.62522 1.59512 5.62522 1.24995V0.624977ZM8.53545 1.46528C8.29139 1.22121 7.89564 1.22121 7.65159 1.46528L7.20965 1.9072C6.9656 2.15127 6.9656 2.54699 7.20965 2.79105C7.45371 3.03512 7.84946 3.03512 8.09352 2.79105L8.53545 2.34913C8.7795 2.10506 8.7795 1.70935 8.53545 1.46528ZM9.37498 5.62496C9.72016 5.62496 9.99997 5.34515 9.99997 4.99998C9.99997 4.65481 9.72016 4.375 9.37498 4.375H8.74999C8.40481 4.375 8.125 4.65481 8.125 4.99998C8.125 5.34515 8.40481 5.62496 8.74999 5.62496H9.37498ZM1.90673 2.79105C2.1508 3.03512 2.54652 3.03512 2.79059 2.79105C3.03467 2.54699 3.03467 2.15127 2.79059 1.9072L2.34866 1.46528C2.10459 1.22121 1.70887 1.22121 1.46479 1.46528C1.22072 1.70934 1.22072 2.10506 1.46479 2.34912L1.90673 2.79105ZM1.25022 5.62496C1.59539 5.62496 1.87521 5.34515 1.87521 4.99998C1.87521 4.65481 1.59539 4.375 1.25022 4.375H0.625234C0.280065 4.375 0.000244141 4.65481 0.000244141 4.99998C0.000244141 5.34515 0.280065 5.62496 0.625234 5.62496H1.25022ZM3.75024 8.74998V8.125H6.2502V8.74998C6.2502 9.44033 5.69059 9.99993 5.00022 9.99993C4.30988 9.99993 3.75024 9.44033 3.75024 8.74998ZM6.54818 6.96302C6.37993 7.09589 6.25987 7.28714 6.25074 7.49982H3.74967C3.74054 7.28714 3.62048 7.09589 3.45222 6.96302C2.87239 6.50523 2.50024 5.796 2.50024 4.99991C2.50024 3.61925 3.61951 2.5 5.0002 2.5C6.38087 2.5 7.50016 3.61925 7.50016 4.99991C7.50016 5.796 7.12804 6.50523 6.54818 6.96302Z"
                                    />
                                </svg>
                            )}
                        </MobileMenuButton>
                    </NavContent>
                </NavWrap>
            </ThemeProvider>
        </>
    );
};

export default CaseNav;
