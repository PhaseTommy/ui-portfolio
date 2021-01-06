import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import storage from "local-storage-fallback";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global.js";
import { lightTheme, darkTheme } from "../theme.js";
import { useMediaQuery } from "react-responsive";
import { NavbarContextList } from "../context/NavbarContext";
import Headroom from "react-headroom";
import { motion } from "framer-motion";

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
    @media (min-width: 1500px) {
        margin: 0 auto;
        max-width: 900px;
    }

    @media (max-width: 1025px) {
        padding-top: 16px;
    }
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
    @media (min-width: 1025px) {
        display: none;
    }
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

const ToggleThemeBtn = styled(motion.button)`
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 8px;
    background: none;
    margin-right: 4px;
    &:nth-child(3) {
        margin-right: 0px;
    }
`;

const MobileMenuButton = styled.button`
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 20px;
    padding-right: 20px;
    border: none;
    border-radius: 64px;

    background: none;
`;

const MoonIcon = styled.path`
    transition: all 0.1s ease-in-out;
    @media (min-width: 1025px) {
        ${ToggleThemeBtn}:hover & {
            fill: #ff661a;
        }
    }
`;

const SunIcon = styled.path`
    transition: all 0.1s ease-in-out;
    @media (min-width: 1025px) {
        ${ToggleThemeBtn}:hover & {
            fill: #5813b1;
        }
    }
`;
const MailIcon = styled.path`
    transition: all 0.1s ease-in-out;
    @media (min-width: 1025px) {
        ${ToggleThemeBtn}:hover & {
            fill: ${({ theme }) => theme.body};
        }
    }
`;

const ToggleIcon = styled.path`
    transition: all 0.1s ease-in-out;
    ${MobileMenuButton}:hover & {
        fill: #ff661a;
    }
`;

const HamburgerWrap = styled.div`
    padding-left: 8px;
    padding-right: 8px;
    border: none;
    border-radius: 64px;
`;

const Navbar = () => {
    const { setMobileNav, mobileNav, desktopNav, setDesktopNav } = useContext(
        NavbarContextList
    );

    const getInitialTheme = () => {
        const savedTheme = storage.getItem("theme");
        return savedTheme ? JSON.parse(savedTheme) : { theme: "dark" };
    };
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

    const [theme, setTheme] = useState(getInitialTheme);
    const [themeCounter, setThemeCounter] = useState(0);

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
        if (theme === "dark") {
            setThemeCounter(0);
        } else if (theme === "light") {
            setThemeCounter(1);
        } else if (theme === "") {
            setThemeCounter(0);
            setTheme("dark");
        }
    }, [theme]);

    const toggleMenu = () => {
        setMobileNav(!mobileNav);
    };

    const toggleDesktopMenu = () => {
        setDesktopNav(!desktopNav);
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Headroom>
                <NavWrapper>
                    <NavL>
                        <BrandTitle className="colored-text">
                            Tommy Smith
                        </BrandTitle>
                    </NavL>

                    <NavM>
                        <ToggleThemeBtn
                            onClick={toggleTheme}
                            className="nav-buttons"
                            whileHover={{ y: -2 }}
                        >
                            {themeCounter === 0 ? (
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <MoonIcon
                                        d="M16 11.0756C14.9493 11.5508 13.7829 11.8153 12.5548 11.8153C7.93228 11.8153 4.18495 8.06802 4.18495 3.44547C4.18495 2.21723 4.44951 1.05078 4.92476 0C2.02067 1.31327 0 4.23575 0 7.63017C0 12.2527 3.74733 16 8.3699 16C11.7642 16 14.6867 13.9795 16 11.0756Z"
                                        fill="#D8D3D3"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <SunIcon
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M9 1C9 0.44772 8.5523 0 8 0C7.44771 0 7 0.44772 7 1V2C7 2.55228 7.44771 3 8 3C8.5523 3 9 2.55228 9 2V1ZM13.6573 2.34367C13.2668 1.95315 12.6336 1.95315 12.2431 2.34367L11.536 3.05078C11.1455 3.4413 11.1455 4.07447 11.536 4.46499C11.9265 4.85552 12.5597 4.85552 12.9502 4.46499L13.6573 3.75789C14.0478 3.36736 14.0478 2.7342 13.6573 2.34367ZM15.001 9C15.5533 9 16.001 8.5523 16.001 8C16.001 7.44771 15.5533 7 15.001 7H14.001C13.4487 7 13.001 7.44771 13.001 8C13.001 8.5523 13.4487 9 14.001 9H15.001ZM3.05078 4.46499C3.4413 4.85552 4.07447 4.85552 4.46499 4.46499C4.85552 4.07447 4.85552 3.4413 4.46499 3.05078L3.75789 2.34367C3.36736 1.95315 2.7342 1.95315 2.34367 2.34367C1.95315 2.73419 1.95315 3.36736 2.34367 3.75788L3.05078 4.46499ZM2 9C2.55228 9 3 8.5523 3 8C3 7.44771 2.55228 7 2 7H1C0.44772 7 0 7.44771 0 8C0 8.5523 0.44772 9 1 9H2ZM6 14.001V13.001H10V14.001C10 15.1056 9.1046 16.001 8 16.001C6.89543 16.001 6 15.1056 6 14.001ZM10.4768 11.1411C10.2076 11.3537 10.0155 11.6597 10.0009 12H5.99911C5.98451 11.6597 5.79241 11.3537 5.52319 11.1411C4.59545 10.4086 4 9.2738 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8C12 9.2738 11.4046 10.4086 10.4768 11.1411Z"
                                        fill="#4A5568"
                                    />
                                </svg>
                            )}
                        </ToggleThemeBtn>
                        {isTabletOrMobile ? (
                            <MobileMenuButton
                                onClick={toggleMenu}
                                className="tags"
                            >
                                <svg
                                    width="16"
                                    height="10"
                                    viewBox="0 0 16 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <ToggleIcon
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H15C15.5523 2 16 1.55228 16 1C16 0.447715 15.5523 0 15 0H1ZM1 8C0.447715 8 0 8.44771 0 9C0 9.55229 0.447715 10 1 10H15C15.5523 10 16 9.55229 16 9C16 8.44771 15.5523 8 15 8H1Z"
                                        fill="none"
                                        className="toggle-icon-fill"
                                    />
                                </svg>
                            </MobileMenuButton>
                        ) : (
                            <MobileMenuButton
                                onClick={toggleMenu}
                                className="tags"
                            >
                                <svg
                                    width="16"
                                    height="10"
                                    viewBox="0 0 16 10"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <ToggleIcon
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2H15C15.5523 2 16 1.55228 16 1C16 0.447715 15.5523 0 15 0H1ZM1 8C0.447715 8 0 8.44771 0 9C0 9.55229 0.447715 10 1 10H15C15.5523 10 16 9.55229 16 9C16 8.44771 15.5523 8 15 8H1Z"
                                        fill="none"
                                        className="toggle-icon-fill"
                                    />
                                </svg>
                            </MobileMenuButton>
                        )}
                    </NavM>
                </NavWrapper>
            </Headroom>
        </ThemeProvider>
    );
};

export default Navbar;
