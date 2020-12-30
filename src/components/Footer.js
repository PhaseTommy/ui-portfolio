import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

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

const FootLogo = styled.img`
    width: 95px;
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
                        <a
                            className="paragraph"
                            href="https://dribbble.com/PhaseTommy"
                            style={{ textDecoration: "none" }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Dribbble
                        </a>
                    </FooterItem>
                    <FooterItem className="paragraph">
                        <a
                            className="paragraph"
                            href="https://www.linkedin.com/in/tom-smith-09410a150/"
                            style={{ textDecoration: "none" }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </FooterItem>
                    <FooterItem className="paragraph">The Dots</FooterItem>
                </FootL>
                <FootM>
                    <FootLogo src={Logo}></FootLogo>
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
                    <FooterItem className="paragraph">
                        Redistributing Health
                    </FooterItem>
                </FootR>
            </FooterContent>
        </FooterWrap>
    );
};

export default Footer;
