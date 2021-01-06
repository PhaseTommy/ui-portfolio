import React from "react";
import styled from "styled-components";
import BG from "../assets/skills-bg.png";

const Content = styled.div`
    width: 100%;
`;

const SkillsWrapper = styled.section`
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 300px;
    @media (min-width: 1500px) {
        margin: 0 auto;
        max-width: 900px;
        margin-top: 300px;
    }
    @media (max-width: 1024px) {
        margin-left: 32px;
        margin-right: 32px;
        margin-top: 180px;
    }
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
const Spacer = styled.span`
    width: 16px;
`;
const Skills = () => {
    return (
        <Content>
            <SkillsWrapper>
                <SmallWrap>
                    <SmallLine className="line"></SmallLine>
                    <SmallTitle className="colored-text">My Skills</SmallTitle>
                </SmallWrap>
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
                </TagsWrapper>
            </SkillsWrapper>
        </Content>
    );
};

export default Skills;
