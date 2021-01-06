import React from "react";
import styled from "styled-components";

const MenuWrap = styled.div`
    width: 300px;
    border-radius: 16px;
    display: inline;
    position: sticky;
    position: -webkit-sticky;
    top: 88px;
    float: right;
    margin-right: 20%;
    z-index: 6;
    @media (max-width: 1025px) {
        display: none;
    }
`;

const MenuItem = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-top: 8px;
`;

const Title = styled.h3``;

const Subtitle = styled.h3`
    font-weight: 400;
    margin-top: 4px;
`;

const DividerWrap = styled.div`
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 8px;
`;

const Divider = styled.div`
    width: 100%;
    height: 2px;
    border-radius: 4px;
`;

const DesktopMenu = () => {
    return (
        <MenuWrap className="desktop-menu">
            <MenuItem className="desktop-menu-item">
                <Title className="paragraph menu-title">
                    Living With Diabetes
                </Title>
                <Subtitle className="menu-subtitle">Case Study</Subtitle>
            </MenuItem>
            <MenuItem className="desktop-menu-item">
                <Title className="paragraph menu-title">Phase Robotics</Title>
                <Subtitle className="case-subtitle">Case Study</Subtitle>
            </MenuItem>
            <DividerWrap>
                <Divider className="divider"></Divider>
            </DividerWrap>
            <MenuItem className="desktop-menu-item">
                <Title className="paragraph menu-title">Dribbble</Title>
                <Subtitle className="case-subtitle">Social Media</Subtitle>
            </MenuItem>
            <MenuItem
                style={{ marginBottom: "8px" }}
                className="desktop-menu-item"
            >
                <Title className="paragraph menu-title">LinkedIn</Title>
                <Subtitle className="case-subtitle">Social Media</Subtitle>
            </MenuItem>
        </MenuWrap>
    );
};

export default DesktopMenu;
