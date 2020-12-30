import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import storage from "local-storage-fallback";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../global.js";
import { lightTheme, darkTheme } from "../theme.js";
import { useMediaQuery } from "react-responsive";
import { NavbarContextList } from "../context/NavbarContext";
import Headroom from "react-headroom";

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

const ToggleThemeBtn = styled.button`
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
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 8px;

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
            fill: #ff661a;
        }
    }
`;
const MailIcon = styled.path`
    transition: all 0.1s ease-in-out;
    @media (min-width: 1025px) {
        ${ToggleThemeBtn}:hover & {
            fill: #ff661a;
        }
    }
`;

const ToggleIcon = styled.path`
    transition: all 0.1s ease-in-out;
    ${MobileMenuButton}:hover & {
        fill: #ff661a;
    }
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
    const [themeCounter, setThemeCounter] = useState();

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
        console.log(mobileNav);
    };

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <Headroom>
                <NavWrapper>
                    <NavL>
                        <BrandTitle>Tommy Smith</BrandTitle>
                    </NavL>
                    {/* {isDesktop ? (
                        <NavM className="nav-item">
                            <NavItem>Work</NavItem>
                            <NavItem>About Me</NavItem>
                            <NavItem>Skills</NavItem>
                        </NavM>
                    ) : null} */}
                    {isDesktop && (
                        <NavM>
                            <ToggleThemeBtn onClick={toggleTheme} className="">
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
                            <ToggleThemeBtn className="">
                                {themeCounter === 0 ? (
                                    <svg
                                        width="19"
                                        height="14"
                                        viewBox="0 0 19 14"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <MailIcon
                                            fill="#D8D3D3"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M9.60052 6.81711L0.604323 2.31901C0.67216 1.13734 1.65191 0.200012 2.85058 0.200012H16.3506C17.5493 0.200012 18.5289 1.13731 18.5969 2.31895L9.60052 6.81711ZM9.59994 9.33267L18.6 4.83267V11.45C18.6 12.6927 17.5927 13.7 16.35 13.7H2.85C1.60736 13.7 0.599998 12.6927 0.599998 11.45V4.83274L9.59994 9.33267Z"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="19"
                                        height="14"
                                        viewBox="0 0 19 14"
                                        fill="white"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <MailIcon
                                            fill="#4A5568"
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M9.60052 6.81711L0.604323 2.31901C0.67216 1.13734 1.65191 0.200012 2.85058 0.200012H16.3506C17.5493 0.200012 18.5289 1.13731 18.5969 2.31895L9.60052 6.81711ZM9.59994 9.33267L18.6 4.83267V11.45C18.6 12.6927 17.5927 13.7 16.35 13.7H2.85C1.60736 13.7 0.599998 12.6927 0.599998 11.45V4.83274L9.59994 9.33267Z"
                                        />
                                    </svg>
                                )}
                            </ToggleThemeBtn>
                            <ToggleThemeBtn className="">
                                {themeCounter === 0 ? (
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <MailIcon
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M13.2849 1.99647L13.2856 1.99541C11.8769 0.753384 10.0272 0 8.00138 0C7.35126 0 6.72035 0.0786899 6.11599 0.224152L6.12899 0.241585L6.129 0.241589C6.31847 0.495343 7.77644 2.44793 9.10716 4.89109C12.1015 3.76864 13.2471 2.05306 13.2849 1.99647ZM14.18 2.91834C14.1488 2.96286 12.8618 4.8015 9.7229 6.0833C9.90861 6.46483 10.0884 6.85315 10.2545 7.24341C10.3135 7.38341 10.3712 7.52065 10.4274 7.65787C13.1235 7.31863 15.7804 7.87195 15.9904 7.91569L15.9999 7.91766C15.9816 6.02107 15.3031 4.28044 14.1804 2.9177L14.18 2.91834ZM10.9153 8.92034C11.9648 11.8042 12.3912 14.1528 12.4727 14.6349C14.2693 13.4227 15.5453 11.4977 15.9012 9.26799C15.7365 9.21493 13.4979 8.50632 10.9153 8.92034ZM9.41612 9.29093C10.542 12.2168 11.0069 14.667 11.1253 15.366C10.165 15.7744 9.10957 16 8.00152 16C6.14587 16 4.44211 15.3627 3.08374 14.3065C3.10042 14.2703 4.64211 10.9539 9.36305 9.30831C9.37413 9.30425 9.38538 9.30071 9.39668 9.29715L9.39669 9.29715L9.41612 9.29093ZM8.22141 6.60571C8.45061 7.05494 8.6698 7.51057 8.87062 7.96526C8.76541 7.99544 8.65924 8.02657 8.55494 8.06133C4.237 9.45747 2.04734 13.3417 2.05009 13.3459C0.775472 11.9291 0 10.0553 0 8.00002C0 7.94068 0.00195417 7.88267 0.00392488 7.82417C0.00481122 7.79786 0.0057009 7.77145 0.00641766 7.74477C0.148229 7.75024 4.10157 7.83897 8.22141 6.60571ZM7.55849 5.37261C6.17363 2.91239 4.69405 0.904663 4.58745 0.762354C2.35616 1.8159 0.690836 3.8717 0.171556 6.3493C0.173775 6.34932 0.176339 6.34934 0.179246 6.34937C0.452694 6.3519 3.75722 6.38249 7.55849 5.37261Z"
                                            fill="#D8D3D3"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="white"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <MailIcon
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M13.2849 1.99647L13.2856 1.99541C11.8769 0.753384 10.0272 0 8.00138 0C7.35126 0 6.72035 0.0786899 6.11599 0.224152L6.12899 0.241585L6.129 0.241589C6.31847 0.495343 7.77644 2.44793 9.10716 4.89109C12.1015 3.76864 13.2471 2.05306 13.2849 1.99647ZM14.18 2.91834C14.1488 2.96286 12.8618 4.8015 9.7229 6.0833C9.90861 6.46483 10.0884 6.85315 10.2545 7.24341C10.3135 7.38341 10.3712 7.52065 10.4274 7.65787C13.1235 7.31863 15.7804 7.87195 15.9904 7.91569L15.9999 7.91766C15.9816 6.02107 15.3031 4.28044 14.1804 2.9177L14.18 2.91834ZM10.9153 8.92034C11.9648 11.8042 12.3912 14.1528 12.4727 14.6349C14.2693 13.4227 15.5453 11.4977 15.9012 9.26799C15.7365 9.21493 13.4979 8.50632 10.9153 8.92034ZM9.41612 9.29093C10.542 12.2168 11.0069 14.667 11.1253 15.366C10.165 15.7744 9.10957 16 8.00152 16C6.14587 16 4.44211 15.3627 3.08374 14.3065C3.10042 14.2703 4.64211 10.9539 9.36305 9.30831C9.37413 9.30425 9.38538 9.30071 9.39668 9.29715L9.39669 9.29715L9.41612 9.29093ZM8.22141 6.60571C8.45061 7.05494 8.6698 7.51057 8.87062 7.96526C8.76541 7.99544 8.65924 8.02657 8.55494 8.06133C4.237 9.45747 2.04734 13.3417 2.05009 13.3459C0.775472 11.9291 0 10.0553 0 8.00002C0 7.94068 0.00195417 7.88267 0.00392488 7.82417C0.00481122 7.79786 0.0057009 7.77145 0.00641766 7.74477C0.148229 7.75024 4.10157 7.83897 8.22141 6.60571ZM7.55849 5.37261C6.17363 2.91239 4.69405 0.904663 4.58745 0.762354C2.35616 1.8159 0.690836 3.8717 0.171556 6.3493C0.173775 6.34932 0.176339 6.34934 0.179246 6.34937C0.452694 6.3519 3.75722 6.38249 7.55849 5.37261Z"
                                            fill="#4A5568"
                                        />
                                    </svg>
                                )}
                            </ToggleThemeBtn>
                        </NavM>
                    )}
                    <NavR>
                        {isTabletOrMobile && (
                            <ToggleThemeBtn onClick={toggleTheme} className="">
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
                        )}
                        {isTabletOrMobile ? (
                            <MobileMenuButton onClick={toggleMenu} className="">
                                <svg
                                    width="20"
                                    height="16"
                                    viewBox="0 0 20 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <ToggleIcon
                                        className="toggle-icon-fill"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 1C0 0.447716 0.447693 0 1 0H19C19.5523 0 20 0.447716 20 1C20 1.55228 19.5523 2 19 2H1C0.447693 2 0 1.55228 0 1ZM0 15C0 14.4477 0.447693 14 1 14H19C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16H1C0.447693 16 0 15.5523 0 15ZM1 7C0.447693 7 0 7.44772 0 8C0 8.55228 0.447693 9 1 9H19C19.5523 9 20 8.55228 20 8C20 7.44772 19.5523 7 19 7H1Z"
                                        fill="white"
                                    />
                                </svg>
                            </MobileMenuButton>
                        ) : null}
                    </NavR>
                </NavWrapper>
            </Headroom>
        </ThemeProvider>
    );
};

export default Navbar;
