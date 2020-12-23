import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import storage from "local-storage-fallback";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global.js";
import { lightTheme, darkTheme } from "../theme.js";
import DarkIcon from "../assets/dark.svg";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "../assets/menu.svg";
import { NavbarContextList } from "../context/NavbarContext";

const NavWrapper = styled.section`
    display: flex;
    margin-left: 20%;
    margin-right: 20%;
    padding-top: 16px;
    padding-bottom: 16px;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    position: relative;
    @media (max-width: 1024px) {
        margin-left: 32px;
        margin-right: 32px;
    }
`;

const NavL = styled.div``;
const NavM = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const NavR = styled.div`
    display: flex;
    align-items: center;
`;

const BrandTitle = styled.h2`
    color: #ff661a;
`;

const NavItem = styled.h3`
    margin-right: 56px;
    @media (max-width: 1200px) {
        margin-right: 24px;
    }
    :nth-child(3) {
        margin-right: 0px;
    }
`;

const ToggleThemeBtn = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 8px;
`;

const ContactButton = styled.button`
    height: 40px;
    padding-right: 32px;
    padding-left: 32px;
    margin-left: 32px;
    background: #ff661a;
    border: 1px solid rgba(255, 255, 255, 0.39);
    box-sizing: border-box;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.8rem;
    color: white;
    @media (max-width: 1200px) {
        padding-left: 16px;
        padding-right: 16px;
    }
`;

const MobileMenuButton = styled.button`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 8px;
    margin-left: 16px;
`;

const Navbar = () => {
    const { setMobileNav, mobileNav } = useContext(NavbarContextList);

    const getInitialTheme = () => {
        const savedTheme = storage.getItem("theme");
        return savedTheme ? JSON.parse(savedTheme) : { theme: "light" };
    };
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

    const [theme, setTheme] = useState(getInitialTheme);

    const toggleTheme = () => {
        // if the theme is not light, then set it to dark
        if (theme === "light") {
            setTheme("dark");

            // otherwise, it should be light
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        storage.setItem("theme", JSON.stringify(theme), [theme]);
    });

    const toggleMenu = () => {
        setMobileNav(!mobileNav);
        console.log(mobileNav);
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <NavWrapper>
                <NavL>
                    <BrandTitle>Tommy Smith</BrandTitle>
                </NavL>
                {isDesktop ? (
                    <NavM className="nav-item">
                        <NavItem>Work</NavItem>
                        <NavItem>About Me</NavItem>
                        <NavItem>Skills</NavItem>
                    </NavM>
                ) : null}

                <NavR>
                    <ToggleThemeBtn onClick={toggleTheme} className="toggle">
                        <img alt="Dark Mode Icon" src={DarkIcon}></img>
                    </ToggleThemeBtn>
                    {isDesktop ? (
                        <ContactButton className="button-text">
                            Contact Me!
                        </ContactButton>
                    ) : null}
                    {isTabletOrMobile ? (
                        <MobileMenuButton
                            onClick={toggleMenu}
                            className="toggle"
                        >
                            <img alt="Menu Icon" src={MenuIcon}></img>
                        </MobileMenuButton>
                    ) : null}
                </NavR>
            </NavWrapper>
        </ThemeProvider>
    );
};

export default Navbar;
