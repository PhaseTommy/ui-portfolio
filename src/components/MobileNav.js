import { useContext } from "react";
import styled from "styled-components";
import CloseIcon from "../assets/close.svg";
import { NavbarContextList } from "../context/NavbarContext";
import { motion } from "framer-motion";

const NavWrapper = styled(motion.div)`
    position: absolute;
    top: 0;
    height: 100vh;
    right: 0;
    width: 100%;
    z-index: 5;
`;

const NavMain = styled(motion.div)`
    width: 100%;
    height: 100%;
    /* border-top-left-radius: 20px;
    border-bottom-left-radius: 20px; */
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
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
`;

const NavM = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    padding-left: 64px;
`;

const NavItems = styled(motion.h1)`
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 32px;
    :nth-child(3) {
        margin-bottom: 0px;
    }
`;

const Divider = styled.div`
    width: 100%;
    height: 2px;
    margin-top: 64px;
`;

const SocialTop = styled.div`
    padding: 32px 32px 0px 32px;
`;

const ContactButton = styled.button`
    height: 40px;
    padding-right: 24px;
    padding-left: 24px;
    background: #ff661a;
    border: 1px solid rgba(255, 255, 255, 0.39);
    box-sizing: border-box;
    border-radius: 8px;
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
                    <NavTitle>Navigation</NavTitle>
                    <CloseButton onClick={toggleMenu} className="toggle">
                        <img
                            style={{ paddingTop: "2px" }}
                            alt="Close Button"
                            src={CloseIcon}
                        ></img>
                    </CloseButton>
                </NavTop>
                <NavM>
                    <NavItems variants={item} className="nav-item">
                        Work
                    </NavItems>
                    <NavItems variants={item} className="nav-item">
                        About Me
                    </NavItems>
                    <NavItems variants={item} className="nav-item">
                        Skills
                    </NavItems>
                </NavM>

                <SocialTop>
                    <NavTitle>Social Media</NavTitle>
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
                    <ContactButton>Contact Me!</ContactButton>
                </NavBottom>
            </NavMain>
        </NavWrapper>
    );
};

export default MobileNav;
