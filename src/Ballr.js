import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global.js";
import { lightTheme, darkTheme } from "./theme.js";
import storage from "local-storage-fallback";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import CaseNav from "./components/CaseNav";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import { NavbarContextList } from "./context/NavbarContext";
import ImgWithFallback from "./components/ImgWithFallback";
import ImgWithFallbackTwo from "./components/ImgWithFallbackTwo";

import BallrDarkCoverWebP from "./assets/ballr-dark-cover.webp";
import BallrDarkCover from "./assets/ballr-dark-cover.png";

import BallrPersonasWebP from "./assets/ballr-persona-mh.webp";
import BallrPersonas from "./assets/ballr-persona-mh.png";

import BallrUserFlowWebP from "./assets/ballr-user-flow.webp";
import BallrUserFlow from "./assets/ballr-user-flow.png";

import NavbarWireframe from "./assets/navbar-wireframes.png";
import NavbarWireframeWebP from "./assets/navbar-wireframes.webp";

import BallrNavbar from "./assets/ballr-navbar.png";
import BallrNavbarWebP from "./assets/ballr-navbar.webp";

import BallrHome from "./assets/ballr-dark-home.png";
import BallrHomeWebP from "./assets/ballr-dark-home.webp";

import BallrDiscussions from "./assets/ballr-discussions-home.png";
import BallrDiscussionsWebP from "./assets/ballr-discussions-home.webp";

import BallrDiscussionsThread from "./assets/ballr-discussions-thread.png";
import BallrDiscussionsThreadWebP from "./assets/ballr-discussions-thread.webp";

import BallrUserTestingWebP from "./assets/ballr-user-test-1.webp";
import BallrUserTesting from "./assets/ballr-user-test-1.png";

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
    const { mobileNav, setMobileNav, caseNav, setCaseNav, desktopNav } =
        useContext(NavbarContextList);

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
                        <CaseTitleSm className="colored-text">
                            Case Study, UI/UX
                        </CaseTitleSm>
                        <CaseTitleLg className="case-title">
                            Ballr Football Statistics
                        </CaseTitleLg>
                        <CaseSubtitle className="case-subtitle">
                            A football statistics app to promote discussion and
                            provide useful metrics to assess football players,
                            teams & leagues.
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
                    <SmallTitle
                        className="paragraph"
                        style={{ marginTop: "48px", marginBottom: "16px" }}
                    >
                        Navigation Issues
                    </SmallTitle>
                    <ParagraphText className="paragraph">
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
                        to use a search bar.
                    </ParagraphText>
                    <SmallTitle
                        style={{ marginTop: "48px", marginBottom: "16px" }}
                        className="paragraph"
                    >
                        Rectifying Navigation Issues
                    </SmallTitle>
                    <ParagraphText className="paragraph">
                        To rectify this navigation nightmare I placed a section
                        on the home page featuring links to all the top leagues
                        in Europe, with the option to view more. This would
                        allow the user to quickly glance at the home page and
                        reach the intended league, and consequently team, in as
                        few steps as possible. <br />
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
                    <BodyTitle className="colored-text">The Process</BodyTitle>
                    <SmallTitle
                        style={{ marginTop: "48px", marginBottom: "16px" }}
                        className="paragraph"
                    >
                        User Personas
                    </SmallTitle>
                    <ParagraphText className="paragraph">
                        Producing user personas for this project allowed me to
                        take a closer look at the intended users of the website
                        and what some of their needs might be. From taking a
                        look at the different user personas I was able to
                        determine some key wants and needs that would be
                        applicable to a wider user base.
                    </ParagraphText>
                    <ImgWithFallbackTwo
                        src={BallrPersonasWebP}
                        fallback={BallrPersonas}
                        alt="User Personas"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "8px",
                        }}
                    />
                    <SmallTitle
                        style={{ marginTop: "48px", marginBottom: "16px" }}
                        className="paragraph"
                    >
                        User Flow Diagram
                    </SmallTitle>
                    <ParagraphText className="paragraph">
                        Building a user flow diagram allowed me to assess how a
                        user might want to interact with the interface based on
                        their needs. By providing a visual representation of the
                        user's journey I am able to streamline the experience
                        for the user by ensuring they get maximum use from the
                        site in as few steps as possible.
                    </ParagraphText>
                    <ImgWithFallbackTwo
                        src={BallrUserFlowWebP}
                        fallback={BallrUserFlow}
                        alt="User Flow Diagram"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "8px",
                        }}
                    />
                    <SmallTitle
                        style={{ marginTop: "48px", marginBottom: "16px" }}
                        className="paragraph"
                    >
                        Wireframing{" "}
                    </SmallTitle>
                    <ParagraphText className="paragraph">
                        Knowing that navigation would be a potential stipulation
                        to the success of the interface, I ensured that I tested
                        different variants of the navigation bar to find the
                        best solution. I decided that the search bar would need
                        to take up a significant portion of the navigation
                        section as it would be the main way for users to
                        navigate to new areas of the site.
                    </ParagraphText>
                    <ImgWithFallbackTwo
                        src={NavbarWireframeWebP}
                        fallback={NavbarWireframe}
                        alt="Navbar Wireframe"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "8px",
                        }}
                    />
                    <BodyTitle className="colored-text">The Outcomes</BodyTitle>
                    <SmallTitle
                        style={{ marginTop: "48px", marginBottom: "16px" }}
                        className="paragraph"
                    >
                        Navigation Bar
                    </SmallTitle>
                    <ParagraphText className="paragraph">
                        Knowing that navigation would be a potential stipulation
                        to the success of the interface, I ensured that I tested
                        different variants of the navigation bar to find the
                        best solution. I decided that the search bar would need
                        to take up a significant portion of the navigation
                        section as it would be the main way for users to
                        navigate to new areas of the site.
                    </ParagraphText>
                    <ImgWithFallbackTwo
                        src={BallrNavbarWebP}
                        fallback={BallrNavbar}
                        alt="Ballr Navbar"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "4px",
                        }}
                    />
                    <SmallTitle
                        style={{ marginTop: "48px", marginBottom: "16px" }}
                        className="paragraph"
                    >
                        Home Page
                    </SmallTitle>
                    <ParagraphText className="paragraph">
                        The home page is the most essential part of the
                        interface as it sets the tone for the rest of the users
                        experience. The home page needs to be clear concise and
                        easy navigate so that the user is able to reach their
                        desired process as quickly as possible, with as little
                        stress as possible.
                    </ParagraphText>
                    <ImgWithFallbackTwo
                        src={BallrHomeWebP}
                        fallback={BallrHome}
                        alt="Ballr Home"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "4px",
                        }}
                    />
                    <ParagraphText className="paragraph">
                        The home screen needed to feel as welcoming as possible,
                        whilst also making sure it was still packed full of
                        useful content, and quick navigation options. Included
                        is a 'Team of the Week' as the hero graphic. By doing
                        this the user gets a quick look at some of the
                        statistics they might find on the site, whilst
                        introducing the concept of the rating system. <br />
                        <br />
                        It was important to include a 'Top Leagues' section next
                        to the fixtures so the user has an easy navigation
                        option, instead of having to default to using the search
                        bar. The other features on the home page include a top
                        rankings for all the key positions, and a brief
                        introduction to the discussions section.
                    </ParagraphText>
                    <SmallTitle
                        style={{ marginTop: "48px", marginBottom: "16px" }}
                        className="paragraph"
                    >
                        Discussions Section
                    </SmallTitle>
                    <ParagraphText className="paragraph">
                        The discussions section is integral to the ethos of the
                        application. The aim was to incorporate a real community
                        experience inside of the website. This section is where
                        users can discuss the statistics they have seen, and
                        engage in meaningful conversations with other members of
                        the community.
                    </ParagraphText>
                    <ImgWithFallbackTwo
                        src={BallrDiscussionsWebP}
                        fallback={BallrDiscussions}
                        alt="Ballr Discussions"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "4px",
                        }}
                    />
                    <ParagraphText className="paragraph">
                        I decided to include a discussions button in the
                        navigation bar to reinforce the idea that this is an
                        integral aspect of the website, and somewhat of a unique
                        selling point. Upon arrival at the discussions section,
                        the user is presented with a familiar blog style layout
                        with filter options. From here the user can select or
                        search for a particular thread and engage in the
                        conversation.
                    </ParagraphText>
                    <ImgWithFallbackTwo
                        src={BallrDiscussionsThreadWebP}
                        fallback={BallrDiscussionsThread}
                        alt="Ballr Discussions Thread"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "4px",
                        }}
                    />
                    <BodyTitle className="colored-text">
                        User Testing{" "}
                    </BodyTitle>
                    <ImgWithFallbackTwo
                        src={BallrUserTestingWebP}
                        fallback={BallrUserTesting}
                        alt="Ballr User Testing"
                        style={{
                            marginTop: "32px",
                            gridColumn: "2/3",
                            width: "100%",
                            borderRadius: "4px",
                        }}
                    />
                    <ParagraphText className="paragraph">
                        The user testing process allowed the application to be
                        tested against an actual users needs. The user is a
                        football fan who is also interested in the statistical
                        side of the game. The testing process involved the user
                        completing five pre-determined tasks inside the
                        prototype. The aim was to assess how well the user
                        completed the tasks, and for them to communicate
                        anything they found difficult.
                    </ParagraphText>
                    <SmallTitle
                        style={{ marginTop: "48px", marginBottom: "16px" }}
                        className="paragraph"
                    >
                        User Testing Findings{" "}
                    </SmallTitle>

                    <ul className="paragraph">
                        <li>
                            The user was pleased with the aesthetics of the
                            site.
                        </li>
                        <li style={{ marginTop: 12, lineHeight: "150%" }}>
                            Whilst the user completed each task eventually,
                            there was some sticking points with the navigation
                            system.
                        </li>
                        <li style={{ marginTop: 12, lineHeight: "150%" }}>
                            The user enjoyed the premise of having an area to
                            discuss with other community members.
                        </li>
                        <li style={{ marginTop: 12, lineHeight: "150%" }}>
                            The user struggled to find a way to include site
                            statistics into their discussions.
                        </li>
                    </ul>
                    <BodyTitle className="colored-text">
                        Reflection & Development
                    </BodyTitle>
                    <ParagraphText className="paragraph">
                        Overall the project can be considered a success, it
                        addresses most of the users needs, and effectively
                        reinforces the idea of community and discussion in
                        relation to football, and more specifically, football
                        statistics. <br />
                        <br />
                        There are however some developments that need to be
                        implemented. The user testing exposed some of the
                        potential developments that could be made. For example,
                        reworking the navigation system with some form of
                        breadcrumb system so that the user can visually see
                        their path through the application. As well as this
                        there needs to be a way to include actual statistics
                        from the site, directly into the discussions thread.
                    </ParagraphText>
                </Wrapper>
            </ThemeProvider>
        </div>
    );
};

export default Diabetes;
