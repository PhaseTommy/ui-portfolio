import { useContext, useEffect } from "react";
import styled from "styled-components";
import CloseIcon from "../assets/close.svg";
import { NavbarContextList } from "../context/NavbarContext";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NavWrapper = styled(motion.div)`
    position: fixed;
    top: 0;
    height: 100%;

    width: 100%;
    z-index: 5;
    @media (min-width: 1024px) {
        width: 440px;
        /* border-left: 1px solid #ffffff; */
        right: 0;
    }
`;

const NavMain = styled(motion.div)`
    width: 100%;
    height: 100%;
    /* border-top-left-radius: 20px;
    border-bottom-left-radius: 20px; */
    display: flex;
    flex-direction: column;
`;

const NavTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 32px 0px 32px;
`;

const NavTitle = styled.h3`
    color: #50616b;
`;

const CloseButton = styled.button`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: none;
    background: none;
`;

const NavM = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    padding-left: 48px;
`;

const NavItems = styled(motion.h1)`
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 32px;
    :nth-child(3) {
        margin-bottom: 0px;
    }
`;

const SocialTop = styled.div`
    padding: 32px 32px 0px 32px;
`;

const ContactButton = styled.button`
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 24px;
    padding-left: 24px;
    background: #ff661a;
    border: none;
    box-sizing: border-box;
    border-radius: 64px;
    font-weight: 700;
    font-size: 0.8rem;
    color: white;
    width: 100%;
`;

const NavBottom = styled.div`
    padding-left: 32px;
    padding-right: 32px;
    position: absolute;
    bottom: 32px;
    width: 100%;
`;

const variants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.05,
        },
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        x: -50,
        transition: {
            duration: 0.05,
        },
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const MobileNav = () => {
    const { mobileNav, setMobileNav } = useContext(NavbarContextList);

    const toggleMenu = () => {
        setMobileNav(!mobileNav);
    };

    return (
        <NavWrapper
            key="menu"
            exit={{ opacity: 0 }}
            initial={{ x: 400 }}
            animate={{ x: 0 }}
        >
            <NavMain
                initial="hidden"
                animate="show"
                variants={variants}
                delay="0.5"
                className="mobile-nav"
            >
                <NavTop>
                    <NavTitle className="hero-para">Case Studies</NavTitle>
                    <CloseButton onClick={toggleMenu}>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M0.29289 0.29289C0.68342 -0.09763 1.31658 -0.09763 1.70711 0.29289L6 4.58579L10.2929 0.29289C10.6834 -0.09763 11.3166 -0.09763 11.7071 0.29289C12.0976 0.68342 12.0976 1.31658 11.7071 1.70711L7.4142 6L11.7071 10.2929C12.0976 10.6834 12.0976 11.3166 11.7071 11.7071C11.3166 12.0976 10.6834 12.0976 10.2929 11.7071L6 7.4142L1.70711 11.7071C1.31658 12.0976 0.68342 12.0976 0.29289 11.7071C-0.09763 11.3166 -0.09763 10.6834 0.29289 10.2929L4.58579 6L0.29289 1.70711C-0.09763 1.31658 -0.09763 0.68342 0.29289 0.29289Z"
                                fill="#50616B"
                            />
                        </svg>
                    </CloseButton>
                </NavTop>
                <NavM>
                    <NavLink
                        onClick={toggleMenu}
                        exactly
                        to="/diabetes"
                        style={{ textDecoration: "none" }}
                    >
                        <NavItems variants={item} className="nav-item">
                            Living with Diabetes
                        </NavItems>
                    </NavLink>
                    <NavItems variants={item} className="nav-item">
                        About Me
                    </NavItems>
                    <NavItems variants={item} className="nav-item">
                        Skills
                    </NavItems>
                </NavM>

                <SocialTop>
                    <NavTitle className="hero-para">Social Media</NavTitle>
                </SocialTop>
                <NavM>
                    <NavItems variants={item} className="nav-item">
                        LinkedIn
                    </NavItems>
                    <NavItems variants={item} className="nav-item">
                        Dribble
                    </NavItems>
                </NavM>
                <NavBottom>
                    <ContactButton className="mobile-nav-button">
                        Contact Me!
                    </ContactButton>
                </NavBottom>
            </NavMain>
        </NavWrapper>
    );
};

export default MobileNav;
