import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global.js";
import { lightTheme, darkTheme } from "./theme.js";
import storage from "local-storage-fallback";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import CaseNav from "./components/CaseNav";

import BackArrow from "./assets/back-arrow.svg";
import { NavLink } from "react-router-dom";
import DarkIcon from "./assets/dark.svg";
import DiabetesWireframes from "./assets/diabetes-wireframes.png";
import DiabetesWireframesWebP from "./assets/diabetes-wireframes.webp";

import DiabetesType from "./assets/type-choice.png";
import DiabetesTypeWebP from "./assets/type-choice.webp";

import ColoursDiabetes from "./assets/colours-diabetes.png";
import ColoursDiabetesWebP from "./assets/colours-diabetes.webp";

import FinalDiabetes from "./assets/diabetes-final-screens.png";
import FinalDiabetesWebP from "./assets/diabetes-final-screens.webp";

import { NavbarContextList } from "./context/NavbarContext";
import ImgWithFallback from "./components/ImgWithFallback";

import BallrDarkCoverWebP from "./assets/ballr-dark-cover.webp";
import BallrDarkCover from "./assets/ballr-dark-cover.png";

import BallrPersonasWebP from "./assets/ballr-user-personas.webp";
import BallrPersonas from "./assets/ballr-user-personas.png";

const Wrapper = styled.div``;

const CaseHero = styled.div`
    margin-top: 80px;
    margin-bottom: 64px;
`;

const CaseTitleSm = styled.h3`
    text-align: center;

    font-weight: 800;
    color: #ff661a;
`;

const CaseTitleLg = styled.h1`
    font-weight: 800;
    text-align: center;
    margin-top: 16px;
`;

const CaseSubtitle = styled.h3`
    text-align: center;
    margin-top: 16px;
`;

const BodyTitle = styled.h2`
    margin-top: 64px;
    font-weight: 800;
    color: #ff661a;
    font-size: 1.6rem;
`;

const QuoteBlock = styled.div`
    padding: 8px;
    border-radius: 8px;

    @media (max-width: 550px) {
        padding-left: 0px;
        padding-right: 0px;
    }
`;

const ReturnBtn = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    border-radius: 32px;
    position: fixed;
    right: 16px;
    bottom: 16px;
    font-weight: 800;
    color: #ff661a !important;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ModeToggle = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 32px;
    position: fixed;
    left: 16px;
    bottom: 16px;
    font-weight: 800;
    color: #ff661a !important;

    border: none;
`;

const ParagraphText = styled.p`
    font-family: "Merriweather";
    font-weight: 400;
    line-height: 180%;
`;

const MoonIcon = styled.path`
    transition: all 0.1s ease-in-out;
    @media (min-width: 1025px) {
        ${ModeToggle}:hover & {
            fill: #ff661a;
        }
    }
`;

const SunIcon = styled.path`
    transition: all 0.1s ease-in-out;
    @media (min-width: 1025px) {
        ${ModeToggle}:hover & {
            fill: #ff661a;
        }
    }
`;

const ExternalLink = styled(motion.div)`
    padding: 16px;
    display: flex;
    border-radius: 8px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
const ExternalIcon = styled(motion.svg)`
    ${ExternalLink}:hover & {
        transition: fill ease-in-out 0.2s;
        fill: #e57a44;
    }
`;

const ExternalLinkText = styled(motion.h4)`
    font-weight: 500;
    ${ExternalLink}:hover & {
        transition: all ease-in-out 0.2s;
        color: #e57a44;
    }
`;

const LinkMotion = {
    rest: { x: 0, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
        x: 4,
        transition: {
            duration: 0.1,
            type: "tween",
            ease: "easeIn",
        },
    },
};

const IconMotion = {
    rest: { scale: 1, ease: "easeOut", duration: 0.2, type: "tween" },
    hover: {
        scale: 1.08,
        transition: {
            duration: 0.1,
            type: "tween",
            ease: "easeIn",
        },
    },
};

const Diabetes = () => {
    const getInitialTheme = () => {
        const savedTheme = storage.getItem("theme");
        return savedTheme ? JSON.parse(savedTheme) : { theme: "dark" };
    };

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
    const { mobileNav, setMobileNav, caseNav, setCaseNav } = useContext(
        NavbarContextList
    );

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
        if (mobileNav) {
            setMobileNav(!mobileNav);
        }
    });

    return (
        <div>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
                <GlobalStyles />
                <AnimatePresence>
                    {caseNav && <CaseNav key="id"></CaseNav>}
                </AnimatePresence>

                <Wrapper className="wrapper">
                    <CaseHero>
                        <CaseTitleSm className="colored-text">
                            Case Study, UI/UX
                        </CaseTitleSm>
                        <CaseTitleLg className="case-title">
                            Ballr Football Statistics
                        </CaseTitleLg>
                        <CaseSubtitle className="case-subtitle">
                            A look at how Type 1 diabetics might make use of an
                            application to manage their condition easily.
                        </CaseSubtitle>
                    </CaseHero>

                    <ImgWithFallback
                        src={BallrDarkCoverWebP}
                        fallback={BallrDarkCover}
                        alt="Mobile Screenshots"
                    />

                    <BodyTitle className="colored-text">The Problem</BodyTitle>
                    <QuoteBlock>
                        <CaseTitleLg
                            className="hero-title"
                            style={{ marginTop: "64px" }}
                        >
                            “How might we design a football statistics
                            application that provides the most insightful data
                            and graphics to football enthusiasts and scouts.”
                        </CaseTitleLg>
                    </QuoteBlock>
                    <div
                        className="external-link"
                        style={{
                            paddingTop: "16px",
                            paddingBottom: "16px",
                            paddingLeft: "24px",
                            paddingRight: "24px",
                            borderRadius: "8px",
                            marginTop: "64px",
                        }}
                    >
                        <ParagraphText
                            style={{
                                fontFamily: "europa",
                                fontSize: "18px",
                                fontWeight: "600",
                            }}
                            className="paragraph"
                        >
                            <strong>What </strong>is the product?{" "}
                            <p style={{ fontWeight: "400", marginTop: "0px" }}>
                                A website.
                            </p>
                        </ParagraphText>

                        <ParagraphText
                            style={{
                                marginTop: "16px",
                                fontFamily: "europa",
                                fontSize: "18px",
                                fontWeight: "600",
                            }}
                            className="paragraph"
                        >
                            <strong>Who </strong>is it for?{" "}
                            <p style={{ fontWeight: "400", marginTop: "0px" }}>
                                Football enthusiasists / scouts.{" "}
                            </p>
                        </ParagraphText>

                        <ParagraphText
                            style={{
                                marginTop: "16px",
                                fontFamily: "europa",
                                fontSize: "18px",
                                fontWeight: "600",
                            }}
                            className="paragraph"
                        >
                            <strong>Why </strong>does it need to exist?{" "}
                            <p style={{ fontWeight: "400", marginTop: "0px" }}>
                                To give football enthusiasts insight into useful
                                statistics.{" "}
                            </p>
                        </ParagraphText>

                        <ParagraphText
                            style={{
                                marginTop: "16px",
                                fontFamily: "europa",
                                fontSize: "18px",
                                fontWeight: "600",
                            }}
                            className="paragraph"
                        >
                            What does it need to do?{" "}
                            <p style={{ fontWeight: "400", marginTop: "0px" }}>
                                Provide delightful data visualisation and an
                                engaging community experience.{" "}
                            </p>
                        </ParagraphText>
                    </div>

                    <ParagraphText
                        style={{ marginTop: "64px" }}
                        className="paragraph"
                    >
                        As a football and data fanatic I wanted to design an
                        interface that rectified some of the common issues with
                        existing platforms. The research stage of this project
                        was pivotal in providing a foundation to create an
                        effective design response. The goal was to create
                        something that provided a meaningful experience for the
                        user, whilst still incorporating the large amount of
                        content associated with football statistics websites.{" "}
                        <br />
                        <br />
                        Through various research methods it was determined that
                        a few key areas would contribute massively to the
                        success of the interface. For example, through the
                        questionnaire process it was decided that there needed
                        to be a focus on comparing different players, beautiful
                        data visualisations and an abundance of 'useful'
                        statistics.
                    </ParagraphText>

                    <BodyTitle className="colored-text">Challenges </BodyTitle>
                    <ParagraphText
                        style={{ marginTop: "32px" }}
                        className="paragraph"
                    >
                        One of the biggest challenges I faced with this project
                        was providing an effective navigation system for the
                        application. Dealing with interfaces with large amounts
                        of content (like this one) require special attention to
                        how you intend the user to navigate the site. <br />
                        <br /> Initially I thought that a search bar inside the
                        Navbar section would be sufficient as a form of
                        navigation but quickly realised that it may not be as
                        effective as I had desired. Through user research and
                        testing I found that often the user was looking for a
                        way to visit specific leagues and teams without having
                        to use a search bar. <br /> <br /> To rectify this
                        navigation nightmare I placed a section on the home page
                        featuring links to all the top leagues in Europe, with
                        the option to view more. This would allow the user to
                        quickly glance at the home page and reach the intended
                        league, and consequently team, in as few steps as
                        possible. <br />
                        <br /> With further insight into an effective navigation
                        system, I decided that it could be strengthened with a
                        breadcrumb type system that would allow users to retrace
                        their steps. Despite this, the efficacy of a breadcrumb
                        system is heightened by the prototype itself, as in a
                        live version of the site the user would simply be able
                        to hit the back arrow in their browser. Despite this, I
                        still think a breadcrumb system provides the user with a
                        useful visual aid when navigating a site, therefore its
                        inclusion can be justified.
                    </ParagraphText>
                    <ImgWithFallback
                        src={BallrPersonasWebP}
                        fallback={BallrPersonas}
                        alt="User Personas"
                        style={{ marginTop: "32px" }}
                    />
                </Wrapper>
            </ThemeProvider>
        </div>
    );
};

export default Diabetes;

const AnimateGrowLeft = {
    rest: {
        width: "50%",
    },
    hover: {
        width: "0%",
    },
};

const AnimateGrowRight = {
    rest: {
        width: "50%",
    },
    hover: {
        width: "100%",
    },
};
