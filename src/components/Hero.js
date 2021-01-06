import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const HeroWrapper = styled.div`
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 140px;
    z-index: 0;
    position: relative;
    user-select: none;
    @media (min-width: 1500px) {
        margin: 0 auto;
        max-width: 900px;
        margin-top: 180px;
    }

    @media (max-width: 1024px) {
        /* display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center; */
        margin-left: 32px;
        margin-right: 32px;
        margin-top: 160px;
    }
    @media (max-width: 500px) {
        margin-top: 100px;
    }
`;

const SmallWrap = styled.div`
    display: flex;
    align-items: center;
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

const SmallTitleMin = styled.h3`
    color: #ff661a;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    border-radius: 64px;
`;

const HeroTitle = styled.h1`
    font-size: 3.6rem;
    margin-top: 32px;
    width: min(60vw, 22ch);
    @media (max-width: 1024px) {
        width: min(90vw, 28ch);
    }
    @media (max-width: 570px) {
        font-size: 2.4rem;
    }
`;

const InfoWrap = styled.div`
    padding: 8px;
    border-radius: 8px;
    display: inline-block;
    margin-top: 32px;
`;

const HireButton = styled.button`
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: none;
    background: #ff661a;
    border-radius: 64px;
    margin-top: 32px;
    font-size: 0.8rem;
    font-weight: bold;
`;
const ParagraphText = styled.p`
    font-weight: 600;
    line-height: 180%;
    margin-top: 32px;
    width: min(60ch, calc(100% - 64px));
    @media(max-width: 500px){
        min(60ch, 100%);
    }
`;

const Hero = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

    return (
        <HeroWrapper>
            <SmallWrap>
                {isDesktop && <SmallLine className="line"></SmallLine>}
                {isTabletOrMobile && (
                    <SmallTitleMin className="small-title colored-text">
                        UI/UX Designer & Engineer
                    </SmallTitleMin>
                )}
                {isDesktop && (
                    <SmallTitle className="colored-text">
                        UI/UX Designer & Engineer
                    </SmallTitle>
                )}
            </SmallWrap>
            <HeroTitle className="hero-title">
                I build beautiful digital experiences.
            </HeroTitle>
            <ParagraphText className="hero-para">
                I am an experienced designer with knowledge in front-end
                development giving me a unique skillset to tackle a variety of
                projects.
            </ParagraphText>

            <HireButton className="hero-button">Contact Me!</HireButton>
        </HeroWrapper>
    );
};

export default Hero;
