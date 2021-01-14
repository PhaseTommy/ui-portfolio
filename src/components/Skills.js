import React from "react";
import styled from "styled-components";
import BG from "../assets/skills-bg.png";

const Content = styled.div`
    width: 100%;
`;

const SkillsWrapper = styled.section`
    padding: 64px;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 300px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    /* @media (min-width: 1500px) {
        margin: 0 auto;
        max-width: 900px;
        margin-top: 300px;
    } */
    @media (max-width: 1024px) {
        margin-left: 32px;
        margin-right: 32px;
        margin-top: 180px;
    }
    @media (max-width: 1142px) {
        justify-content: space-evenly;
    }
    @media (max-width: 550px) {
        padding-left: 0px;
        padding-right: 0px;
        margin-left: 32px;
        margin-right: 32px;
    }
    @media (min-width: 1500px) {
        margin: 0 auto;
        margin-top: 300px;
        max-width: 1400px;
    }
`;

const InfoTitle = styled.h1`
    color: #ffffff;
    margin-top: 16px;
`;

const InfoText = styled.p`
    color: #ffffff;
    font-size: 1rem;
    line-height: 150%;
`;

const InfoItem = styled.div`
    width: 300px;
    padding: 16px;
    border-radius: 16px;
    margin-top: 32px;
    @media (max-width: 550px) {
        width: 100%;
    }
    /* border: 1px solid black; */
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
const TagsWrapper = styled.div`
    padding: 32px;
    display: flex;
    margin-top: 64px;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 550px) {
        padding: 0px;
    }
`;

const Tags = styled.div`
    font-weight: 800;
    font-size: 1rem;
    color: #ff661a;
    padding: 16px 32px;
    border-radius: 32px;
    margin-bottom: 16px;
    margin-right: 16px;

    @media (max-width: 550px) {
        padding: 8px 16px;
        margin-right: 8px;
        border-radius: 32px;
    }
`;

const SmallWrap = styled.div`
    display: flex;
    align-items: center;
    margin-top: 64px;
`;

const Skills = () => {
    return (
        <Content className="about-bg">
            <SkillsWrapper>
                <InfoItem className="skills-card">
                    <svg
                        className="svg-switch"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 2.5C10 1.1193 8.8807 0 7.5 0C6.1193 0 5 1.1193 5 2.5V5H2.5C1.1193 5 0 6.1193 0 7.5C0 8.8807 1.1193 10 2.5 10H5V12.5C5 13.8807 6.1193 15 7.5 15C8.8807 15 10 13.8807 10 12.5V10H12.5C13.8807 10 15 8.8807 15 7.5C15 6.1193 13.8807 5 12.5 5H10V2.5ZM10 27.5C10 26.1192 8.8807 25 7.5 25C6.1193 25 5 26.1192 5 27.5V30H2.5C1.1193 30 0 31.1192 0 32.5C0 33.8807 1.1193 35 2.5 35H5V37.5C5 38.8807 6.1193 40 7.5 40C8.8807 40 10 38.8807 10 37.5V35H12.5C13.8807 35 15 33.8807 15 32.5C15 31.1192 13.8807 30 12.5 30H10V27.5ZM27.4166 1.86028C27.1261 0.7637 26.1341 0 24.9996 0C23.8654 0 22.8731 0.7637 22.5829 1.86028L19.6349 12.9973L11.2506 17.8345C10.4767 18.281 9.99988 19.1065 9.99988 20C9.99988 20.8935 10.4767 21.719 11.2506 22.1655L19.6349 27.0027L22.5829 38.1397C22.8731 39.2362 23.8654 40 24.9996 40C26.1341 40 27.1261 39.2362 27.4166 38.1397L30.3646 27.0027L38.7491 22.1655C39.5229 21.719 39.9996 20.8935 39.9996 20C39.9996 19.1065 39.5229 18.281 38.7491 17.8345L30.3646 12.9973L27.4166 1.86028Z"
                        />
                    </svg>
                    <InfoTitle className="menu-title">
                        An inherently creative mindset
                    </InfoTitle>
                    <InfoText className="menu-subtitle">
                        I provide thorough creative input and flair in
                        everything I create; through a background and years of
                        experience in designing beautiful interfaces.
                    </InfoText>
                </InfoItem>
                <InfoItem className="skills-card">
                    <svg
                        className="svg-switch"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20 40C31.0458 40 40 31.0458 40 20C40 8.9543 31.0458 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0458 8.9543 40 20 40ZM22.5 10C22.5 8.6193 21.3807 7.5 20 7.5C18.6193 7.5 17.5 8.6193 17.5 10V20C17.5 20.663 17.7634 21.299 18.2322 21.7677L25.3032 28.8387C26.2795 29.8152 27.8625 29.8152 28.8387 28.8387C29.8152 27.8625 29.8152 26.2795 28.8387 25.3032L22.5 18.9645V10Z"
                        />
                    </svg>

                    <InfoTitle className="menu-title">
                        Professionalism and punctuality.
                    </InfoTitle>
                    <InfoText className="menu-subtitle">
                        I provide thorough creative input and flair in
                        everything I create; through a background and years of
                        experience in designing beautiful interfaces.
                    </InfoText>
                </InfoItem>
                <InfoItem className="skills-card">
                    <svg
                        className="svg-switch"
                        width="43"
                        height="43"
                        viewBox="0 0 43 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.68 2.77837C14.3227 1.44472 12.9519 0.653243 11.6182 1.01062C10.2845 1.36797 9.49306 2.73882 9.85041 4.07247L10.4975 6.48729C10.8548 7.82094 12.2257 8.61242 13.5593 8.25504C14.893 7.89769 15.6844 6.52684 15.3271 5.19319L14.68 2.77837ZM4.07344 9.84944C2.73979 9.49209 1.36894 10.2835 1.01159 11.6172C0.654236 12.9509 1.44569 14.3217 2.77936 14.6791L5.19416 15.3261C6.52784 15.6835 7.89866 14.892 8.25604 13.5583C8.61339 12.2247 7.82194 10.8538 6.48826 10.4965L4.07344 9.84944ZM26.1071 8.42842C27.0834 7.45212 27.0834 5.86919 26.1071 4.89289C25.1309 3.91659 23.5479 3.91659 22.5715 4.89289L20.8038 6.66067C19.8275 7.63697 19.8275 9.21989 20.8038 10.1962C21.7801 11.1725 23.3631 11.1725 24.3394 10.1962L26.1071 8.42842ZM8.42941 26.1062L10.1972 24.3384C11.1735 23.3619 11.1735 21.7791 10.1972 20.8028C9.22086 19.8265 7.63794 19.8265 6.66164 20.8028L4.89386 22.5706C3.91756 23.5469 3.91756 25.1297 4.89386 26.1062C5.87019 27.0824 7.45309 27.0824 8.42941 26.1062ZM16.4292 13.1785C15.5007 12.8071 14.4401 13.0247 13.733 13.7319C13.0258 14.4391 12.8081 15.4996 13.1795 16.4281L23.1796 41.4282C23.5451 42.3422 24.4131 42.9567 25.3969 42.9974C26.3804 43.0384 27.2966 42.4982 27.7369 41.6177L31.1856 34.7202L38.7329 42.2674C39.7094 43.2437 41.2921 43.2437 42.2686 42.2674C43.2449 41.2912 43.2449 39.7082 42.2686 38.7319L34.7211 31.1844L41.6189 27.7357C42.4994 27.2954 43.0396 26.3794 42.9986 25.3957C42.9576 24.4122 42.3434 23.5442 41.4291 23.1784L16.4292 13.1785Z"
                        />
                    </svg>

                    <InfoTitle className="menu-title">
                        Refined development skills
                    </InfoTitle>
                    <InfoText className="menu-subtitle">
                        I provide thorough creative input and flair in
                        everything I create; through a background and years of
                        experience in designing beautiful interfaces.
                    </InfoText>
                </InfoItem>
                {/* 
                <TagsWrapper>
                    <Tags className="tags colored-text">#react</Tags>

                    <Tags className="tags colored-text">#web-dev</Tags>

                    <Tags className="tags colored-text">#css</Tags>

                    <Tags className="tags colored-text">#html</Tags>

                    <Tags className="tags colored-text">#javascript</Tags>

                    <Tags className="tags colored-text">#next</Tags>

                    <Tags className="tags colored-text">#gatsby</Tags>

                    <Tags className="tags colored-text">#ui-design</Tags>

                    <Tags className="tags colored-text">#ux-design</Tags>

                    <Tags className="tags colored-text">#figma</Tags>

                    <Tags className="tags colored-text">#illustrator</Tags>

                    <Tags className="tags colored-text">#protopie</Tags>

                    <Tags className="tags colored-text">#gatsby</Tags>
                </TagsWrapper> */}
            </SkillsWrapper>
        </Content>
    );
};

export default Skills;
