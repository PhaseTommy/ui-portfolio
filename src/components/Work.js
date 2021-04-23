import styled from "styled-components";
import DiabetesSS from "../assets/diabetes-ss.png";
import DiabetesSSWebP from "../assets/diabetes-ss.webp";

import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import WorkBG from "../assets/work-bg.png";
import WorkBGTwo from "../assets/work-bg-2.png";
import ImgWithFallbackTwo from "./ImgWithFallbackTwo";

import PhaseMock from "../assets/phase-mockup.png";
import PhaseMockWebP from "../assets/phase-mockup.webp";

const WorkWrapper = styled.div`
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 360px;

    @media (max-width: 1024px) {
        margin-left: 32px;
        margin-right: 32px;
        margin-top: 180px;
    }
    @media (min-width: 1500px) {
        margin: 0 auto;
        max-width: 900px;
        margin-top: 360px;
    }
`;

const DiabetesWrap = styled(motion.div)`
    background: url("${WorkBG}");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    width: 100%;
    height: 300px;
    padding: 64px;
    border-radius: 16px;
    margin-bottom: 64px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: background-size 0.2s ease-in-out;

    &:hover {
        background-size: 120%;
    }

    @media (max-width: 640px) {
        justify-content: center;
        padding: 16px;
        background-size: cover;
        text-align: center;
        border-radius: 10px;
        height: 240px;
    }
`;

const DiabetesWrapTwo = styled(motion.div)`
    background: url("${WorkBGTwo}");
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    width: 100%;
    height: 300px;
    padding: 64px;
    padding-right: 16px;
    border-radius: 16px;
    margin-bottom: 64px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    transition: background-size 0.2s ease-in-out;

    &:hover {
        background-size: 120%;
    }

    @media (max-width: 640px) {
        justify-content: center;
        background-size: cover;
        height: 240px;
        padding: 16px;
        text-align: center;
        border-radius: 10px;
        align-items: center;
        flex-direction: column;
    }
`;

const DiabetesTitleWrap = styled.div`
    @media (max-width: 640px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const DiabetesTitle = styled.h1`
    font-weight: 800;
    color: white;
    @media (max-width: 640px) {
        font-size: 1.8rem;
    }
`;

const DiabetesImage = styled(ImgWithFallbackTwo)`
    max-width: 140px !important;
    min-width: 140px !important;
    width: 16%;

    @media (max-width: 640px) {
        display: none;
    }
`;

const PhaseImage = styled(ImgWithFallbackTwo)`
    width: 340px !important;
    min-width: 240px !important;
    width: 16%;

    @media (max-width: 780px) {
        display: none;
    }
`;

const ViewWrap = styled.div`
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);
    justify-content: space-between;
    border-radius: 32px;
    position: relative;
    margin-top: 32px;
    width: 240px;
`;

const ViewText = styled.h4`
    font-weight: 800;
    color: white;
`;

const SmallLine = styled.span`
    width: 60px;
    height: 2px;
    border-radius: 40px;
`;

const LargeTitle = styled.h1`
    font-size: 2.4rem;
    color: #ff661a;
    margin-bottom: 32px;

    @media (max-width: 450px) {
        font-size: 2rem;
    }
`;

const SmallTitle = styled.h3`
    color: #ff661a;
    margin-left: 16px;
    @media (max-width: 1024px) {
        margin-left: 0px;
        padding: 16px;
        border-radius: 8px;
    }
`;

const SmallWrap = styled.div`
    display: flex;
    align-items: center;
    margin-top: 64px;
    margin-bottom: 32px;
`;

const ArrowIcon = styled.svg`
    @keyframes arrow-move {
        0% {
            transform: translate(0px);
        }
        50% {
            transform: translate(2px);
        }
        100% {
            transform: translate(0px);
        }
    }
    fill: white;
    ${DiabetesWrap}:hover & {
        animation: arrow-move 1s infinite;
        transition: fill 0.4s ease-in-out;
        fill: orange;
    }

    ${DiabetesWrapTwo}:hover & {
        animation: arrow-move 1s infinite;
        transition: fill 0.4s ease-in-out;
        fill: orange;
    }
`;

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
        <AnimatePresence>
            <WorkWrapper>
                <SmallWrap>
                    <SmallLine className="line"></SmallLine>
                    <SmallTitle className="colored-text">Work</SmallTitle>
                </SmallWrap>
                <LargeTitle className="case-title">
                    A selection of some of my favourite work.
                </LargeTitle>
                <NavLink
                    style={{ textDecoration: "none" }}
                    exactly
                    to="/diabetes"
                >
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
                                style={{
                                    opacity: "0.75",
                                    fontWeight: "400",
                                }}
                            >
                                Mobile UI/UX
                            </DiabetesTitle>
                            <ViewWrap>
                                <ViewText>View the full case study</ViewText>
                                <ArrowIcon
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M-3.49691e-07 8C-5.42821e-07 12.4183 3.5817 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 -1.56562e-07 8 -3.49691e-07C3.5817 -5.42821e-07 -1.56562e-07 3.58172 -3.49691e-07 8ZM8.70711 11.7071L11.7071 8.7071C12.0976 8.3166 12.0976 7.68342 11.7071 7.29289L8.70711 4.29289C8.31658 3.90237 7.6834 3.90237 7.2929 4.29289C6.9024 4.68342 6.9024 5.31658 7.2929 5.70711L8.58579 7L5 7C4.4477 7 4 7.44771 4 8C4 8.5523 4.4477 9 5 9L8.58579 9L7.2929 10.2929C6.9024 10.6834 6.9024 11.3166 7.2929 11.7071C7.6834 12.0976 8.31658 12.0976 8.70711 11.7071Z"
                                    />
                                </ArrowIcon>
                            </ViewWrap>
                        </DiabetesTitleWrap>
                        <DiabetesImage
                            alt="Diabetes Screenshot"
                            src={DiabetesSSWebP}
                            fallback={DiabetesSS}
                        ></DiabetesImage>
                    </DiabetesWrap>
                </NavLink>

                <NavLink style={{ textDecoration: "none" }} exactly to="/ballr">
                    <DiabetesWrapTwo
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        variants={DiabetesMain}
                        className="diabetes"
                    >
                        <DiabetesTitleWrap variants={CoverTextMotion}>
                            <DiabetesTitle>Ballr Statistics</DiabetesTitle>
                            <DiabetesTitle
                                style={{
                                    opacity: "0.75",
                                    fontWeight: "400",
                                }}
                            >
                                Web Interface
                            </DiabetesTitle>
                            <ViewWrap>
                                <ViewText>View the full case study</ViewText>
                                <ArrowIcon
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M-3.49691e-07 8C-5.42821e-07 12.4183 3.5817 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 -1.56562e-07 8 -3.49691e-07C3.5817 -5.42821e-07 -1.56562e-07 3.58172 -3.49691e-07 8ZM8.70711 11.7071L11.7071 8.7071C12.0976 8.3166 12.0976 7.68342 11.7071 7.29289L8.70711 4.29289C8.31658 3.90237 7.6834 3.90237 7.2929 4.29289C6.9024 4.68342 6.9024 5.31658 7.2929 5.70711L8.58579 7L5 7C4.4477 7 4 7.44771 4 8C4 8.5523 4.4477 9 5 9L8.58579 9L7.2929 10.2929C6.9024 10.6834 6.9024 11.3166 7.2929 11.7071C7.6834 12.0976 8.31658 12.0976 8.70711 11.7071Z"
                                    />
                                </ArrowIcon>
                            </ViewWrap>
                        </DiabetesTitleWrap>
                        <PhaseImage
                            alt="Diabetes Screenshot"
                            src={PhaseMockWebP}
                            fallback={PhaseMock}
                        ></PhaseImage>
                    </DiabetesWrapTwo>
                </NavLink>
            </WorkWrapper>
        </AnimatePresence>
    );
};

export default Work;
