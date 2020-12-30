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
                        I am a UX/UI designer and front-end developer. I am
                        currently studying Graphic Design at Sheffield Hallam
                        University (Final Year), where I am specialising in User
                        Experience this year. I already have great understanding
                        of the entire product development process, and believe
                        that my skills as a designer and my understanding of the
                        development process give me a unique skillset. <br />
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
