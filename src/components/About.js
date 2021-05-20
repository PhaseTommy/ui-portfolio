import React from "react";
import styled from "styled-components";
import InfoIcon from "../assets/info-icon.png";
import InfoIconWebP from "../assets/info-icon.webp";
import ImgWithFallbackTwo from "../components/ImgWithFallbackTwo";

const ContentWrap = styled.section`
    padding: 64px 32px;
    width: 100% !important;

    margin-top: 300px;

    @media (max-width: 1024px) {
        margin-top: 180px;
    }
    @media (max-width: 550px) {
        padding-left: 0px;
        padding-right: 0px;
    }
    &:before {
        content: "";
        width: 100%;
        height: 8px;
        background: blue;
        bottom: 0;
        left: 0;
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

const AboutImage = styled(ImgWithFallbackTwo)`
    @keyframes hover {
        0% {
            transform: translate(0px, 0px);
        }
        50% {
            transform: translate(0px, 6px);
        }
        100% {
            transform: translate(0px, 0px);
        }
    }
    animation: hover 2.3s infinite;
    margin-right: 16px;
    min-width: 340px;
    max-width: 340px;
    filter: drop-shadow(0px 30px 51px 5px rgba(0, 0, 0, 0.2));
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
    margin-top: 32px;
`;
const LargeTitle = styled.h1`
    font-size: 2.4rem;
    color: #ff661a;
    @media (max-width: 450px) {
        font-size: 2rem;
    }
`;

const SmallLine = styled.span`
    width: 60px;
    height: 2px;
    border-radius: 40px;
`;

const SmallTitle = styled.h3`
    color: #ff661a;
    margin-left: 16px;
    @media (max-width: 1024px) {
        margin-left: 0px;
        padding: 16px;
        border-radius: 8px;
    }
`;

const SmallWrap = styled.div`
    display: flex;
    align-items: center;
    margin-top: 32px;
    margin-bottom: 32px;
    @media (max-width: 1024px) {
        margin-bottom: 16px;
    }
`;

const About = () => {
    return (
        <ContentWrap className="about-bg">
            <AboutWrapper>
                <AboutImage
                    className="test"
                    src={InfoIconWebP}
                    fallback={InfoIcon}
                    alt="About Me Icon"
                />
                <AboutInfoWrap>
                    <SmallWrap>
                        <SmallLine className="line"></SmallLine>
                        <SmallTitle className="colored-text">
                            About Me
                        </SmallTitle>
                    </SmallWrap>
                    <LargeTitle className="case-title">
                        Meet the person behind the screen.
                    </LargeTitle>
                    <ParagraphText className="hero-para">
                        I am a UX/UI designer and front-end developer. I am
                        currently studying Graphic Design at Sheffield Hallam
                        University (Final Year), where I am specialising in User
                        Experience this year. I already have a good
                        understanding of the product development process, and
                        believe that my skills as a designer and my
                        understanding of the development process give me a
                        unique skillset. <br />
                        <br />
                        Since the age of 17 I have been working freelance on a
                        range of products that have refined and developed my
                        skillset massively. Some of the projects I have worked
                        on include: Phase Robotics, Signal (Shift Management),
                        Trato (Contract Management). <br />
                        <br />
                        Outside of design and development I have a number of
                        hobbies. I enjoy getting outside as much as possible and
                        I am a keen carp angler, it provides a nice break from
                        screen time and allows me to reset and relax. I also
                        love Drum & Bass music and frequently DJ in my
                        spare-time, music is a great release for me from the
                        stresses of life.
                    </ParagraphText>
                </AboutInfoWrap>
            </AboutWrapper>
        </ContentWrap>
    );
};

export default About;
