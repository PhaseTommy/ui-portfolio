import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import LogoWebP from "../assets/logo.webp";

import { NavLink } from "react-router-dom";
import ImgWithFallbackTwo from "../components/ImgWithFallbackTwo";

const FooterWrap = styled.div`
    width: 100%;
    padding: 64px;
    margin-top: 300px;
`;

const FooterContent = styled.div`
    margin-left: 12%;
    margin-right: 12%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 1500px) {
        margin: 0 auto;
        max-width: 1200px;
    }
    @media (max-width: 1024px) {
        margin-left: 32px;
        margin-right: 32px;
    }
    @media (max-width: 800px) {
        justify-content: center;
        text-align: center;
    }
`;

const FooterTitle = styled.h3`
    color: #50616b;
    margin-bottom: 16px;
`;

const FooterItem = styled.h3`
    margin-bottom: 8px;
    &:hover {
        transition: all 0.1s ease-in-out;
        color: #ff661a !important;
    }
`;

const FooterLink = styled.a`
    &:hover {
        transition: all 0.1s ease-in-out;
        color: #ff661a !important;
    }
`;
const FootL = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
`;
const FootM = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const FootR = styled.div`
    @media (max-width: 800px) {
        display: none;
    }
`;

const FootLogo = styled(ImgWithFallbackTwo)`
    width: 70px;
`;

const LogoText = styled.h3`
    color: #50616b;
    margin-top: 16px;
`;

const Footer = () => {
    return (
        <FooterWrap className="tags">
            <FooterContent>
                <FootL>
                    <FooterTitle>Social Media</FooterTitle>
                    <FooterItem>
                        <FooterLink
                            className="paragraph"
                            href="https://dribbble.com/PhaseTommy"
                            style={{ textDecoration: "none" }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dribbble
                        </FooterLink>
                    </FooterItem>
                    <FooterItem className="paragraph">
                        <FooterLink
                            className="paragraph"
                            href="https://www.linkedin.com/in/tom-smith-09410a150/"
                            style={{ textDecoration: "none" }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </FooterLink>
                    </FooterItem>
                    <FooterItem
                        style={{ marginBottom: "0px" }}
                        className="paragraph"
                    >
                        The Dots
                    </FooterItem>
                </FootL>
                <FootM>
                    <FootLogo src={LogoWebP} fallback={Logo} alt="Logo" />
                    <LogoText>All rights reserved Tommy Smith</LogoText>
                </FootM>
                <FootR>
                    <FooterTitle>Navigation</FooterTitle>
                    <NavLink to="/diabetes" style={{ textDecoration: "none" }}>
                        <FooterItem className="paragraph">
                            Living With Diabetes
                        </FooterItem>
                    </NavLink>
                    <FooterItem className="paragraph">
                        Phase Robotics App
                    </FooterItem>
                    <FooterItem
                        style={{ marginBottom: "0px" }}
                        className="paragraph"
                    >
                        Redistributing Health
                    </FooterItem>
                </FootR>
            </FooterContent>
        </FooterWrap>
    );
};

export default Footer;
