import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const HeroWrapper = styled.div`
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 200px;
    z-index: 0;
    position: relative;
    user-select: none;
    @media (min-width: 1500px) {
        margin: 0 auto;
        max-width: 900px;
        margin-top: 180px;
    }

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    @media (max-width: 500px) {
        margin-top: 150px;
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
    border-radius: 8px;
`;

const HeroTitle = styled.h1`
    font-size: 3.6rem;
    margin-top: 32px;
    width: min(60vw, 22ch);
    @media (max-width: 1024px) {
        width: min(90vw, 28ch);
    }
    @media (max-width: 500px) {
        font-size: 2.5rem;
    }
`;

const InfoWrap = styled.div`
    padding: 8px;
    border-radius: 8px;
    display: inline-block;
    margin-top: 32px;
`;

const Hero = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

    return (
        <HeroWrapper>
            <SmallWrap>
                {isDesktop && <SmallLine className="line"></SmallLine>}
                {isTabletOrMobile && (
                    <SmallTitleMin className="small-title">
                        UI/UX Designer & Engineer
                    </SmallTitleMin>
                )}
                {isDesktop && (
                    <SmallTitle>UI/UX Designer & Engineer</SmallTitle>
                )}
            </SmallWrap>
            <HeroTitle className="hero-title">
                I build beautiful experiences with human interaction in mind.
            </HeroTitle>
            {isDesktop && (
                <InfoWrap className="info-wrap">
                    <SmallTitleMin>
                        Interact with the 3D shapes 😃
                    </SmallTitleMin>
                </InfoWrap>
            )}
        </HeroWrapper>
    );
};

export default Hero;
