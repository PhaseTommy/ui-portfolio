import React from "react";
import styled from "styled-components";
import InfoIcon from "../assets/info-icon.png";

const ContentWrap = styled.section`
    padding: 64px 32px;

    width: 100%;
    margin-top: 300px;
    @media (max-width: 1024px) {
        margin-top: 180px;
    }
    @media (max-width: 550px) {
        padding-left: 0px;
        padding-right: 0px;
    }
`;

const AboutWrapper = styled.div`
    margin-left: 32px;
    margin-right: 32px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    max-width: 1200px;
    @media (max-width: 1024px) {
        margin-left: 0px;
        margin-right: 0px;

        flex-direction: column;
        align-items: center;
    }
    @media (min-width: 1500px) {
        margin: 0 auto;
        /* max-width: 1200px; */
    }
`;

const AboutImage = styled.img`
    margin-right: 16px;

    min-width: 340px;
    max-width: 340px;
    @media (max-width: 550px) {
        display: none;
    }
`;

const AboutInfoWrap = styled.div`
    max-width: min(55ch, calc(100% - 64px));
    @media (max-width: 1024px) {
        margin-top: 64px;
    }
    @media (max-width: 550px) {
        margin-top: 0px;
    }
`;

const ParagraphText = styled.p`
    font-weight: 600;
    line-height: 180%;
    margin-top: 64px;
`;
const LargeTitle = styled.h1`
    font-size: 2.4rem;
    color: #ff661a;
`;

const About = () => {
    return (
        <ContentWrap className="about-bg">
            <AboutWrapper>
                <AboutImage src={InfoIcon} alt="About Me Icon" />

                <AboutInfoWrap>
                    <LargeTitle>A little bit about me.</LargeTitle>
                    <ParagraphText className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. <br />
                        <br /> Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est
                        laborum. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </ParagraphText>
                </AboutInfoWrap>
            </AboutWrapper>
        </ContentWrap>
    );
};

export default About;
