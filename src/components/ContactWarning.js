import React, { useContext } from "react";
import styled from "styled-components";
import { useHotkeys } from "react-use-hotkeys";
import { NavbarContextList } from "./context/NavbarContext";

const WarningWrapper = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 32px;
`;

const WarningText = styled.h4`
    font-weight: 700;
    font-size: 1rem;
`;

const ContactWarning = () => {
    return (
        <WarningWrapper>
            <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5 7C4.44772 7 4 7.44772 4 8C4 8.5523 4.44772 9 5 9H11C11.5523 9 12 8.5523 12 8C12 7.44772 11.5523 7 11 7H5Z"
                    fill="#4A5568"
                />
            </svg>
            <WarningText>You have been warned!</WarningText>
        </WarningWrapper>
    );
};

export default ContactWarning;
