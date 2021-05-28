import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global.js";
import { lightTheme, darkTheme } from "./theme.js";
import storage from "local-storage-fallback";
import styled from "styled-components";
import DiabetesHeader from "./assets/diabetes-header.png";
import DiabetesHeaderWebP from "./assets/diabetes-header.webp";
import { motion } from "framer-motion";

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
import ImgWithFallbackTwo from "./components/ImgWithFallbackTwo";

import UserFlowManualWebP from "./assets/user-flow-manual.webp";
import UserFlowManual from "./assets/user-flow-manual.png";

import UserFlowAlert from "./assets/user-flow-alert.png";
import UserFlowAlertWebP from "./assets/user-flow-alert.webp";

import HomeSS from "./assets/home-ss.png";
import HomeSSWebP from "./assets/home-ss.webp";

import ManualSS from "./assets/manual-ss.png";
import ManualSSWebP from "./assets/manual-ss.webp";

import EmergencySS from "./assets/emergency-ss.png";
import EmergencySSWebP from "./assets/emergency-ss.webp";

const Wrapper = styled.div``;

const CaseHero = styled.div`
    margin-top: 80px;
    margin-bottom: 64px;
`;

const SmallTitle = styled.h3`
    font-size: 1.2rem;

    font-weight: 700;
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
    font-family: "Nunito Sans";
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
    font-family: "Nunito Sans";
    font-weight: 600;
    line-height: 180%;

    font-size: 1rem;
    @media (min-width: 1500px) {
        font-size: 1.1rem;
    }
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
            fill: #734ee2;
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

const ChallengesBox = styled.div`
    padding-left: 16px;
    color: ${({ theme }) => theme.primaryText};
    font-size: 1.1rem;
    font-weight: 700;
    margin-top: 32px;
    background-color: ${({ theme }) => theme.secondary};
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    line-height: 150%;
`;

const ExternalLinkText = styled(motion.h4)`
    font-weight: 500;
    ${ExternalLink}:hover & {
        transition: all ease-in-out 0.2s;
        color: #e57a44;
    }
`;
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
                    <ReturnBtn className="contact-btn">
                        <svg
                            style={{ marginRight: "8px" }}
                            className="svg-switch-two"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.7071 5.70711C9.0976 5.31658 9.0976 4.68342 8.7071 4.29289C8.3166 3.90237 7.68342 3.90237 7.29289 4.29289L4.29289 7.29289C3.90237 7.68342 3.90237 8.3166 4.29289 8.7071L7.29289 11.7071C7.68342 12.0976 8.3166 12.0976 8.7071 11.7071C9.0976 11.3166 9.0976 10.6834 8.7071 10.2929L7.41421 9H11C11.5523 9 12 8.5523 12 8C12 7.44772 11.5523 7 11 7H7.41421L8.7071 5.70711Z"
                            />
                        </svg>
                        Back To Projects
                    </ReturnBtn>
                </NavLink>
                <ModeToggle onClick={toggleTheme} className="toggle">
                    {themeCounter === 0 ? (
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
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
                        <CaseTitleSm className="colored-text">
                            Case Study, UI/UX
                        </CaseTitleSm>
                        <CaseTitleLg className="case-title">
                            Living With Diabetes
                        </CaseTitleLg>
                        <CaseSubtitle className="case-subtitle">
                            A look at how Type 1 diabetics might make use of an
                            application to manage their condition easily.
                        </CaseSubtitle>
                    </CaseHero>
                    <ImgWithFallback
                        src={DiabetesHeaderWebP}
                        fallback={DiabetesHeader}
                        alt="Mobile Screenshots"
                    />

                    <BodyTitle className="colored-text">The Problem</BodyTitle>
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
                        <div
                            className="external-link"
                            style={{
                                paddingTop: "16px",
                                paddingBottom: "16px",
                                paddingLeft: "24px",
                                paddingRight: "24px",
                                borderRadius: "8px",
                                marginTop: "32px",
                                marginBottom: "64px",
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
                                <p
                                    style={{
                                        fontWeight: "400",
                                        marginTop: "0px",
                                    }}
                                >
                                    A mobile applciation.
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
                                <p
                                    style={{
                                        fontWeight: "400",
                                        marginTop: "0px",
                                    }}
                                >
                                    Type 1 Diabetics.
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
                                <p
                                    style={{
                                        fontWeight: "400",
                                        marginTop: "0px",
                                    }}
                                >
                                    To allow Type 1 Diabetics to better control
                                    their illness.
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
                                <p
                                    style={{
                                        fontWeight: "400",
                                        marginTop: "0px",
                                    }}
                                >
                                    Provide an effective way for diabetics to
                                    record their blood sugar levels.
                                </p>
                            </ParagraphText>
                        </div>
                        Through extensive research and user interviews it was
                        concluded that whilst the current diabetes management
                        applications are fairly effective, there is significant
                        improvements that can be made to the user experience
                        with a few subtle changes. <br />
                        <br /> During the research phase, one of the largest
                        pain points for the user came from the inability to set
                        alarms when their glucose levels fell below a certain
                        level. Something that ensures the user knows when they
                        are in dangerous glucose levels. <br />
                        <br /> I intended to create a much more refined
                        experience for the user by reworking some of the
                        existing UX patterns; but also improving on successful
                        patterns already found in similar applications.
                    </ParagraphText>
                    <BodyTitle className="colored-text">Challenges </BodyTitle>
                    <ChallengesBox>
                        Establishing an effective UX route to alert emergency
                        contacts of low blood sugar levels.
                    </ChallengesBox>
                    <ParagraphText className="paragraph">
                        Ensuring that the user had a clear route to alert
                        emergency contacts of low blood sugar levels was
                        integral to the success of the project. I decided that
                        the most effective way to communicate this UX pathway
                        was through a large red button on the homescreen. The
                        red colour reinforces the emergency aspect.
                    </ParagraphText>
                    <ChallengesBox>
                        Ensuring the user is able to manually add blood sugar
                        readings through the app.
                    </ChallengesBox>
                    <ParagraphText className="paragraph">
                        It was imperative that the user was able to add their
                        own blood sugar readings, that had not been
                        automatically recorded by the device. To solve this I
                        placed the plus button on the homescreen to indicate to
                        the user that they could add new readings.
                    </ParagraphText>
                    <ChallengesBox>
                        Allowing the user to see their previously recorded blood
                        sugar levels at a glance.
                    </ChallengesBox>
                    <ParagraphText className="paragraph">
                        By allowing the user a look at their average blood sugar
                        levels for the week, they are able to determine the
                        appropriate lifestyle changes to ensure they are in a
                        safe range. To accomplish this a graph with the daily
                        averages is featured on the homescreen, coupled with a
                        traffic light system to indicate to the user whether or
                        not they are in their ideal range.
                    </ParagraphText>

                    <BodyTitle className="colored-text">The Process</BodyTitle>
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
                    </ParagraphText>
                    <SmallTitle
                        className="paragraph"
                        style={{ marginTop: "48px", marginBottom: "16px" }}
                    >
                        Wireframes:
                    </SmallTitle>
                    <ParagraphText className="paragraph">
                        {" "}
                        The wireframing process allowed for the quick testing of
                        multiple different layouts for some of the interfaces
                        key touch points.
                    </ParagraphText>
                    <ImgWithFallbackTwo
                        src={DiabetesWireframesWebP}
                        fallback={DiabetesWireframes}
                        alt="User Personas"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "8px",
                        }}
                    />
                    <SmallTitle
                        className="paragraph"
                        style={{ marginTop: "48px", marginBottom: "16px" }}
                    >
                        User Flows:
                    </SmallTitle>
                    <ParagraphText className="paragraph">
                        {" "}
                        In order to streamline the UX for the user, it was
                        important to map out how they might interact with some
                        of the key features. The first feature that was mapped
                        out was the ability to manually add blood sugar
                        readings. By determining an optimal route for the user
                        to take to add their own blood sugar readings, it made
                        the design process much easier.
                    </ParagraphText>
                    <ImgWithFallbackTwo
                        src={UserFlowManualWebP}
                        fallback={UserFlowManual}
                        alt="User Flow - Manual Add"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "8px",
                        }}
                    />
                    <ParagraphText style={{}} className="paragraph">
                        {" "}
                        Due to the important nature of the emergency contact
                        alert system, it was imperative that the user experience
                        allowed for the button to be pressed in as few steps as
                        possible. This explains the inclusion of this feature on
                        the homescreen, as well as being reinforced by the red
                        colour.
                    </ParagraphText>
                    <ImgWithFallbackTwo
                        src={UserFlowAlertWebP}
                        fallback={UserFlowAlert}
                        alt="User Flow - Manual Add"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "8px",
                        }}
                    />

                    <BodyTitle className="colored-text">
                        The Outcomes:
                    </BodyTitle>
                    <ImgWithFallbackTwo
                        src={HomeSSWebP}
                        fallback={HomeSS}
                        alt="Homepage Screenshot"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "8px",
                        }}
                    />
                    <ImgWithFallbackTwo
                        src={ManualSSWebP}
                        fallback={ManualSS}
                        alt="Manual Add Screenshot"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "8px",
                        }}
                    />
                    <ImgWithFallbackTwo
                        src={EmergencySSWebP}
                        fallback={EmergencySS}
                        alt="Emergency Contact Screenshot"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "8px",
                        }}
                    />
                    <ParagraphText
                        style={{ marginTop: "64px", marginBottom: "64px" }}
                        className="paragraph"
                    >
                        The result of the project was a modern application that
                        could suitably deal with the needs of the modern
                        diabetic. It prioritises versatility and mobility, which
                        ultimately leads to a significant improvement in the day
                        to day life of a diabetic. <br />
                        <br />
                        Having tested the app with diabetics I was able to
                        refine it further so that it was fulfilling its maximum
                        potential. The ability to add manual readings went down
                        especially well and made sure that the application was
                        suitable to all Type 1 diabetics. <br />
                        <br />
                        Upon review, I was pleased with the final outcomes of
                        the project, from a UX stand point I feel as though all
                        the user pain points that I had identified with existing
                        apps had been rectified, as well as new intuitive
                        features being added.
                    </ParagraphText>
                </Wrapper>
            </ThemeProvider>
        </div>
    );
};

export default Diabetes;
