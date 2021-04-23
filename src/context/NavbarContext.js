import React, { useState, createContext } from "react";

export const NavbarContextList = createContext();

const NavbarContextListProvider = (props) => {
    const [mobileNav, setMobileNav] = useState(false);
    const [desktopNav, setDesktopNav] = useState(false);
    const [caseNav, setCaseNav] = useState(true);

    const [contactForm, setContactForm] = useState(false);
    const [contactWarning, setContactWarning] = useState(false);

    return (
        <NavbarContextList.Provider
            value={{
                mobileNav,
                setMobileNav,
                desktopNav,
                setDesktopNav,
                caseNav,
                setCaseNav,
                contactForm,
                setContactForm,
                contactWarning,
                setContactWarning,
            }}
        >
            {props.children}
        </NavbarContextList.Provider>
    );
};

export default NavbarContextListProvider;
