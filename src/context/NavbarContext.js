import React, { useState, createContext } from "react";

export const NavbarContextList = createContext();

const NavbarContextListProvider = (props) => {
    const [mobileNav, setMobileNav] = useState(false);
    const [desktopNav, setDesktopNav] = useState(false);

    return (
        <NavbarContextList.Provider
            value={{ mobileNav, setMobileNav, desktopNav, setDesktopNav }}
        >
            {props.children}
        </NavbarContextList.Provider>
    );
};

export default NavbarContextListProvider;
