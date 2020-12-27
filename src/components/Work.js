import styled from "styled-components";
import DiabetesSS from "../assets/diabetes-ss.png";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import WorkBG from "../assets/work-bg.png";
import WorkBGTwo from "../assets/work-bg-2.png";

import WorkArrow from "../assets/WorkArrow.svg";

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
    background: url("${WorkBG}");
    background-repeat: no-repeat;
    background-size: cover;
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

    @media (max-width: 640px) {
        justify-content: center;
        padding: 16px;

        text-align: center;
        border-radius: 10px;
    }
`;

const DiabetesWrapTwo = styled(motion.div)`
    background: url("${WorkBGTwo}");
    background-repeat: no-repeat;
    background-size: cover;
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

    @media (max-width: 640px) {
        justify-content: center;
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

const DiabetesImage = styled.img`
    max-width: 140px !important;
    min-width: 140px !important;
    width: 16%;

    @media (max-width: 640px) {
        display: none;
    }
`;

const ViewWrap = styled.div`
    display: flex;
    align-items: center;
    padding: 12px;
    background: rgba(0, 0, 0, 0.1);
    justify-content: space-between;
    border-radius: 8px;
    position: relative;
    margin-top: 32px;
    width: 88%;
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
    margin-bottom: 64px;
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
        <WorkWrapper>
            <SmallWrap>
                <SmallLine className="line"></SmallLine>
                <SmallTitle>Work</SmallTitle>
            </SmallWrap>
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
                        <ViewWrap>
                            <ViewText>View the full case study</ViewText>
                            <img
                                style={{ marginLeft: "8px" }}
                                alt="Right Arrow"
                                src={WorkArrow}
                            ></img>
                        </ViewWrap>
                    </DiabetesTitleWrap>
                    <DiabetesImage
                        alt="Diabetes Screenshot"
                        src={DiabetesSS}
                    ></DiabetesImage>
                </DiabetesWrap>
            </NavLink>

            <NavLink style={{ textDecoration: "none" }} exactly to="/diabetes">
                <DiabetesWrapTwo
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={DiabetesMain}
                    className="diabetes"
                >
                    <DiabetesTitleWrap variants={CoverTextMotion}>
                        <DiabetesTitle>Phase Robotics App</DiabetesTitle>
                        <DiabetesTitle
                            style={{ opacity: "0.75", fontWeight: "400" }}
                        >
                            Dashboard UI
                        </DiabetesTitle>
                        <ViewWrap>
                            <ViewText>View the full case study</ViewText>
                            <img
                                style={{ marginLeft: "8px" }}
                                alt="Right Arrow"
                                src={WorkArrow}
                            ></img>
                        </ViewWrap>
                    </DiabetesTitleWrap>
                    <DiabetesImage
                        alt="Diabetes Screenshot"
                        src={DiabetesSS}
                    ></DiabetesImage>
                </DiabetesWrapTwo>
            </NavLink>
        </WorkWrapper>
    );
};

export default Work;
