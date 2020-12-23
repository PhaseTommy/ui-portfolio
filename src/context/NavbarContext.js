import React, { useState, createContext, useEffect } from "react";

export const NavbarContextList = createContext();

const NavbarContextListProvider = (props) => {
    const [mobileNav, setMobileNav] = useState(false);

    return (
        <NavbarContextList.Provider value={{ mobileNav, setMobileNav }}>
            {props.children}
        </NavbarContextList.Provider>
    );
};

export default NavbarContextListProvider;
