import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global.js";
import { lightTheme, darkTheme } from "./theme.js";
import storage from "local-storage-fallback";
import styled from "styled-components";
import DiabetesHeader from "./assets/diabetes-header.png";
import BackArrow from "./assets/back-arrow.svg";
import { NavLink } from "react-router-dom";
import DarkIcon from "./assets/dark.svg";
import DiabetesWireframes from "./assets/diabetes-wireframes.png";
import DiabetesType from "./assets/type-choice.png";
import ColoursDiabetes from "./assets/colours-diabetes.png";
import FinalDiabetes from "./assets/diabetes-final-screens.png";
import { NavbarContextList } from "./context/NavbarContext";

const Wrapper = styled.div``;

const CaseHero = styled.div`
    margin-top: 64px;
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
    border-radius: 8px;
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
    border-radius: 8px;
    position: fixed;
    left: 16px;
    bottom: 16px;
    font-weight: 800;
    color: #ff661a !important;

    border: none;
`;

const ParagraphText = styled.p`
    font-weight: 600;
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

const Diabetes = () => {
    const getInitialTheme = () => {
        const savedTheme = storage.getItem("theme");
        return savedTheme ? JSON.parse(savedTheme) : { theme: "light" };
    };

    const [theme, setTheme] = useState(getInitialTheme);
    const [themeCounter, setThemeCounter] = useState();

    const toggleTheme = () => {
        // if the theme is not light, then set it to dark
        if (theme === "light") {
            setTheme("dark");

            // otherwise, it should be light
        } else {
            setTheme("light");
        }
    };
    const { mobileNav, setMobileNav } = useContext(NavbarContextList);

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
                <NavLink exactly to="/">
                    <ReturnBtn className="hero-title toggle">
                        <img
                            alt="Back Arrow"
                            style={{ marginRight: "8px" }}
                            src={BackArrow}
                        ></img>
                        Back To Projects
                    </ReturnBtn>
                </NavLink>
                <ModeToggle onClick={toggleTheme} className="toggle">
                    {themeCounter === 0 ? (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <MoonIcon
                                d="M16 11.0756C14.9493 11.5508 13.7829 11.8153 12.5548 11.8153C7.93228 11.8153 4.18495 8.06802 4.18495 3.44547C4.18495 2.21723 4.44951 1.05078 4.92476 0C2.02067 1.31327 0 4.23575 0 7.63017C0 12.2527 3.74733 16 8.3699 16C11.7642 16 14.6867 13.9795 16 11.0756Z"
                                fill="white"
                            />
                        </svg>
                    ) : (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <SunIcon
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9 1C9 0.44772 8.5523 0 8 0C7.44771 0 7 0.44772 7 1V2C7 2.55228 7.44771 3 8 3C8.5523 3 9 2.55228 9 2V1ZM13.6573 2.34367C13.2668 1.95315 12.6336 1.95315 12.2431 2.34367L11.536 3.05078C11.1455 3.4413 11.1455 4.07447 11.536 4.46499C11.9265 4.85552 12.5597 4.85552 12.9502 4.46499L13.6573 3.75789C14.0478 3.36736 14.0478 2.7342 13.6573 2.34367ZM15.001 9C15.5533 9 16.001 8.5523 16.001 8C16.001 7.44771 15.5533 7 15.001 7H14.001C13.4487 7 13.001 7.44771 13.001 8C13.001 8.5523 13.4487 9 14.001 9H15.001ZM3.05078 4.46499C3.4413 4.85552 4.07447 4.85552 4.46499 4.46499C4.85552 4.07447 4.85552 3.4413 4.46499 3.05078L3.75789 2.34367C3.36736 1.95315 2.7342 1.95315 2.34367 2.34367C1.95315 2.73419 1.95315 3.36736 2.34367 3.75788L3.05078 4.46499ZM2 9C2.55228 9 3 8.5523 3 8C3 7.44771 2.55228 7 2 7H1C0.44772 7 0 7.44771 0 8C0 8.5523 0.44772 9 1 9H2ZM6 14.001V13.001H10V14.001C10 15.1056 9.1046 16.001 8 16.001C6.89543 16.001 6 15.1056 6 14.001ZM10.4768 11.1411C10.2076 11.3537 10.0155 11.6597 10.0009 12H5.99911C5.98451 11.6597 5.79241 11.3537 5.52319 11.1411C4.59545 10.4086 4 9.2738 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C12 9.2738 11.4046 10.4086 10.4768 11.1411Z"
                                fill="#25343C"
                            />
                        </svg>
                    )}
                </ModeToggle>
                <Wrapper className="wrapper">
                    <CaseHero>
                        <CaseTitleSm>Case Study, UI/UX</CaseTitleSm>
                        <CaseTitleLg className="case-title">
                            Living With Diabetes
                        </CaseTitleLg>
                        <CaseSubtitle className="case-subtitle">
                            A look at how Type 1 diabetics might make use of an
                            application to manage their condition easily.
                        </CaseSubtitle>
                    </CaseHero>
                    <img
                        loading="lazy"
                        alt="Mobile Screenshots"
                        className="full-bleed"
                        src={DiabetesHeader}
                    ></img>
                    <BodyTitle className="">The Problem</BodyTitle>
                    <QuoteBlock>
                        <CaseTitleLg
                            className="hero-title"
                            style={{ marginTop: "64px" }}
                        >
                            “How might we improve the functionality and features
                            of the CGM to ensure a better experience for
                            diabetics using them?”
                        </CaseTitleLg>
                    </QuoteBlock>
                    <ParagraphText
                        style={{ marginTop: "64px" }}
                        className="paragraph"
                    >
                        Through extensive research and user interviews it was
                        concluded that whilst the current diabetes management
                        applications are effective, they are also sub-optimal.
                        There was room for vast improvements across multiple
                        areas of the application. <br />
                        <br /> During the research phase, one of the largest
                        pain points of the user experience came with the
                        inability to set alarms for when the glucose levels fell
                        below a certain level. Something that ensures the user
                        knows when they are in dangerous glucose levels. <br />
                        <br /> I intended to create a much more refined
                        experience for the user by reworking some of the
                        existing UX patterns; but also improving on successful
                        patterns already found in similar applications.
                    </ParagraphText>
                    <img
                        loading="lazy"
                        style={{ marginTop: "64px" }}
                        alt="Mobile Screenshots"
                        className="full-bleed"
                        src={DiabetesWireframes}
                    ></img>
                    <BodyTitle className="">The Process</BodyTitle>
                    <ParagraphText
                        style={{ marginTop: "64px" }}
                        className="paragraph"
                    >
                        Determining a progressive and reformed layout was
                        pivotal to the success of this project. The layout
                        needed to prioritise the users most important data so
                        that it was accessible whenever the user required it.
                        The speed at which the user had access to this data
                        would determine the benefits of the entirety of the
                        application. <br />
                        <br />
                        Ensuring that the most recent blood sugar reading was
                        the focal point of the visual hierarchy would most
                        likely lead to a positive response from users in testing
                        the prototype. During my research this was something
                        that I found to be of great importance to diabetics who
                        already use an application to manage their diabetes.{" "}
                        <br />
                        <br />
                        The wireframes show the process of determining a layout
                        for each of the screens, and gives some insight into how
                        the visual structure would be represented in the final
                        screen design. It allows many layouts to be tested
                        quickly using a set of predetermined components to
                        represent different visual elements.
                    </ParagraphText>
                    <img
                        loading="lazy"
                        style={{ marginTop: "64px" }}
                        alt="Mobile Screenshots"
                        className="full-bleed"
                        src={DiabetesType}
                    ></img>
                    <BodyTitle className="">The Type Choice</BodyTitle>
                    <ParagraphText
                        style={{ marginTop: "64px" }}
                        className="paragraph"
                    >
                        Typeface choice is usually a dificult decision. In this
                        instance it was important to have something that was
                        visually appealing; but also very effective at
                        communicating data. This is because when dealing with
                        sensitive data it is imperative that it is easily
                        legible and not easily confused. <br />
                        <br /> Amidst the visual overhaul it was important to
                        have a typeface that showed off the modern visuals and
                        accompany it accordingly. I also ensured that it was
                        versatile at different weights and that light body text
                        was still easily legible.
                        <br />
                        <br />
                        The typeface that I decided was appropriate for this
                        project was 'Circular STD'. Circular is a geometric
                        sans-serif type that was created by Swiss designer
                        Laurenz Brunner; it is based off geometric shapes but
                        features significant quirks that add to the welcoming
                        feel of the type.
                    </ParagraphText>
                    <img
                        loading="lazy"
                        style={{ marginTop: "64px" }}
                        alt="Colours"
                        className="full-bleed"
                        src={ColoursDiabetes}
                    ></img>
                    <BodyTitle className="">The Colours</BodyTitle>
                    <ParagraphText
                        style={{ marginTop: "64px" }}
                        className="paragraph"
                    >
                        The colours in contribute massively to the UX of the
                        interface and allow for it to function effectively. The
                        purple was chosen as a calming and welcoming colour that
                        prevents the user from feeling overwhelmed before they
                        enter the crux of the application. <br />
                        <br /> The other three 'bright' colours are used in the
                        'traffic light' system to ensure the user gets a visual
                        response to accompany text values; allowing them to more
                        easily determine if they are too high or too low. I
                        wanted the colours to be recognisable but also modern,
                        as a result I decided that pastel colours where more
                        likely to give the application a more modern feel.
                    </ParagraphText>
                    <img
                        loading="lazy"
                        style={{ marginTop: "64px" }}
                        alt="Final Outcomes"
                        className="full-bleed"
                        src={FinalDiabetes}
                    ></img>
                    <BodyTitle className="">The Outcome</BodyTitle>
                </Wrapper>
            </ThemeProvider>
        </div>
    );
};

export default Diabetes;
