import React from "react";
import styled from "styled-components";

const BackdropWrap = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;

    z-index: 19;
`;

const Backdrop = () => {
    return <BackdropWrap></BackdropWrap>;
};

export default Backdrop;
