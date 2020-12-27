import React from "react";
import styled from "styled-components";

const SkillsWrapper = styled.section`
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 128px;
    @media (max-width: 1024px) {
        margin-left: 32px;
        margin-right: 32px;
        /* margin-top: 300px; */
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
    border-radius: 8px;
    margin-bottom: 16px;
    margin-right: 16px;
    @media (max-width: 550px) {
        padding: 8px 16px;
        margin-right: 8px;
        border-radius: 4px;
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
        <SkillsWrapper>
            <SmallWrap>
                <SmallLine className="line"></SmallLine>
                <SmallTitle>My Skills</SmallTitle>
            </SmallWrap>
            <TagsWrapper>
                <Tags className="tags">#react</Tags>

                <Tags className="tags">#web-dev</Tags>

                <Tags className="tags">#css</Tags>

                <Tags className="tags">#html</Tags>

                <Tags className="tags">#javascript</Tags>

                <Tags className="tags">#next</Tags>

                <Tags className="tags">#gatsby</Tags>

                <Tags className="tags">#ui-design</Tags>

                <Tags className="tags">#ux-design</Tags>

                <Tags className="tags">#figma</Tags>

                <Tags className="tags">#illustrator</Tags>

                <Tags className="tags">#protopie</Tags>

                <Tags className="tags">#gatsby</Tags>
            </TagsWrapper>
        </SkillsWrapper>
    );
};

export default Skills;
