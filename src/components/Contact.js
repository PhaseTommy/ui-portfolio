import React from "react";
import styled from "styled-components";
import Backdrop from "../assets/work-bg-2.png";
import BtnBG from "../assets/contact-bg.png";

const Wrapper = styled.div`
    margin-left: 12%;
    margin-right: 12%;
    margin-top: 260px;
    padding-left: 48px;
    padding-right: 48px;

    @media (max-width: 1024px) {
        flex-direction: column;
        text-align: center;
        margin-right: 32px;
        margin-left: 32px;
    }
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1024px) {
        flex-direction: column;
        text-align: center;
    }
    @media (min-width: 1500px) {
        margin: 0 auto;
        max-width: 1200px;
    }
`;

const TitleWrap = styled.div``;

const Title = styled.h1`
    font-size: 1.6rem;
    color: white;
`;

const Subtitle = styled.h3`
    color: white;
    margin-top: 8px;
    font-size: 1.2rem;
    font-weight: 500;
`;

const ContactButton = styled.button`
    padding-top: 16px;
    padding-bottom: 16px;
    padding-right: 32px;
    padding-left: 32px;

    /* background: #ffffff; */
    border: none;
    box-sizing: border-box;
    border-radius: 64px;
    font-weight: 700;
    font-size: 1rem;
    color: #ff661a;

    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: pulse 2s infinite;

    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
        }

        70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
        }

        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
        }
    }
    @media (max-width: 1024px) {
        margin-top: 32px;
    }
`;

const Contact = () => {
    return (
        <Wrapper>
            <Content className="">
                <TitleWrap>
                    <Title className="menu-title">Like what you see?</Title>
                    <Subtitle className="menu-subtitle">
                        Click the contact button to send me a message!
                    </Subtitle>
                </TitleWrap>
                {/* <ContactBtnWrap> */}
                <ContactButton className="contact-btn">
                    Contact Me!
                </ContactButton>
                {/* </ContactBtnWrap> */}
            </Content>
        </Wrapper>
    );
};

export default Contact;
