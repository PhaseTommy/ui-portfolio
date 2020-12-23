import React from "react";
import styled from "styled-components";
import DiabetesSS from "../assets/diabetes-ss.png";
import PhoneIcon from "../assets/phone-icon.svg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const WorkWrapper = styled.div`
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 360px;
    @media (max-width: 1024px) {
        margin-left: 32px;
        margin-right: 32px;
        margin-top: 300px;
    }
`;

const DiabetesWrap = styled(motion.div)`
    width: 100%;
    height: 300px;
    padding: 64px;
    border-radius: 16px;
    background: #b255ff;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    ::before {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -1;
        top: 8px;
        right: 8px;
        border-radius: 16px;
        background: black;
    }
    @media (max-width: 640px) {
        justify-content: center;
        padding: 16px;
    }
`;

const DiabetesTitleWrap = styled.div``;

const DiabetesTitle = styled.h1`
    font-weight: 800;
    color: white;
    @media (max-width: 640px) {
        font-size: 1.8rem;
    }
`;

const DiabetesImage = styled.img`
    max-width: 140px !important;
    min-width: 140px !important;
    width: 16%;

    @media (max-width: 640px) {
        display: none;
    }
`;

const DiabetesInfo = styled(motion.div)`
    position: absolute;
    padding: 16px;
    top: -80px;
    left: -60px;
    z-index: 2;
    border-radius: 12px;
    -webkit-box-shadow: -1px 8px 31px -6px rgba(0, 0, 0, 0.36);
    box-shadow: -1px 8px 31px -6px rgba(0, 0, 0, 0.36);
    @media (max-width: 1024px) {
        left: 0px;
    }
    @media (max-width: 540px) {
        width: 100%;
    }
`;

const InfoTop = styled.div`
    display: flex;
    align-items: center;
`;

const InfoIcon = styled.div`
    display: flex;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    margin-right: 16px;
`;

const InfoText = styled.p`
    font-weight: 400;
    width: 30ch;
`;

const InfoTitle = styled.h3``;

const InfoMotion = {
    rest: {
        y: 0,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeIn",
        },
    },
    hover: {
        y: -10,
        transition: {
            duration: 0.2,
            delay: 0.1,
            type: "tween",
            ease: "easeOut",
        },
    },
};

const DiabetesMain = {
    rest: {
        y: 0,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeIn",
        },
    },
    hover: {
        y: -6,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeOut",
        },
    },
};

const CoverTextMotion = {
    rest: {
        x: 0,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeIn",
        },
    },
    hover: {
        x: 6,
        transition: {
            duration: 0.2,
            type: "tween",
            ease: "easeOut",
        },
    },
};

const Work = () => {
    return (
        <WorkWrapper>
            <NavLink style={{ textDecoration: "none" }} exactly to="/diabetes">
                <DiabetesWrap
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={DiabetesMain}
                    className="diabetes"
                >
                    <DiabetesTitleWrap variants={CoverTextMotion}>
                        <DiabetesTitle>Living With Diabetes</DiabetesTitle>
                        <DiabetesTitle
                            style={{ opacity: "0.75", fontWeight: "400" }}
                        >
                            Mobile UI/UX
                        </DiabetesTitle>
                    </DiabetesTitleWrap>
                    <DiabetesImage
                        alt="Diabetes Screenshot"
                        src={DiabetesSS}
                    ></DiabetesImage>
                    <DiabetesInfo
                        variants={InfoMotion}
                        className="diabetes-info"
                    >
                        <InfoTop>
                            <InfoIcon className="icon">
                                <img src={PhoneIcon} alt="Phone Icon"></img>
                            </InfoIcon>
                            <InfoTitle className="title">
                                Diabetes Management Application
                            </InfoTitle>
                        </InfoTop>

                        <InfoText className="info-text">
                            A Mobile UI/UX project to improve the functionality
                            of diabetes management applications.
                        </InfoText>
                    </DiabetesInfo>
                </DiabetesWrap>
            </NavLink>
        </WorkWrapper>
    );
};

export default Work;
