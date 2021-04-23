import React, { useContext, useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { NavbarContextList } from "../context/NavbarContext";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const ContactWrap = styled(motion.div)`
    padding: 16px;
    padding-top: 0px;
    /* box-shadow: 0px 10px 53px rgba(0, 0, 0, 0.45); */
    position: fixed;
    top: 96px;
    width: 480px;

    z-index: 20;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    @media (max-width: 500px) {
        width: 100%;
        height: 500px;
        margin-top: 0px;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
        bottom: -400px;
        top: auto;
    }
`;

const TopWrap = styled.div`
    display: flex;

    justify-content: space-between;
    @media (max-width: 500px) {
        align-items: center;
    }
`;

const TopLeft = styled.div``;
const TopRight = styled.div``;

const ContactTitle = styled.h4``;

const InputWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
`;

const SingleWrap = styled.div`
    display: flex;
    flex-direction: column;
    :nth-child(1) {
        margin-right: 16px;
    }
`;
const Label = styled.label`
    font-size: 12px;
    font-weight: 500;
    margin-left: 8px;
    margin-bottom: 4px;
`;

const ContactSubtitle = styled.h4`
    margin-top: 4px;
    opacity: 0.7;
    font-weight: 500;
`;

const SmallInputs = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    padding-left: 8px;
    font-weight: 600;
`;

const TextBox = styled.textarea`
    width: 100%;
    height: 200px;
    border-radius: 8px;
    border: none;
    resize: none;
    padding: 8px;
    font-size: 1rem;
`;

const SubmitButton = styled.button`
    width: 100%;
    border: none;
    border-radius: 8px;
    height: 40px;
    margin-top: 32px;
    font-size: 0.8rem;
    font-weight: bold;
`;

const MobilePullWrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 24px;
`;

const MobilePull = styled.div`
    width: 48px;
    height: 4px;
    background: black;
    border-radius: 20px;
`;

const ContactForm = () => {
    const { contactForm, setContactForm } = useContext(NavbarContextList);

    const [mobileContact, setMobileContact] = useState(false);

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 500px)",
    });

    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 500px)" });

    const element = document.getElementsByClassName("contact-mobile");

    function handleClick() {
        setMobileContact(!mobileContact);
    }

    return (
        <ContactWrap
            key="contact"
            initial={{ y: 400 }}
            animate={{ y: 0 }}
            exit={{ y: 80, opacity: 0 }}
            drag="y"
            dragConstraints={{ bottom: 0, top: -400 }}
            dragTransition={{ mass: 0.5, damping: 40, stiffness: 400 }}
            dragElastic={0.2}
            className={
                mobileContact ? "contact-mobile-animated" : "contact-mobile"
            }
        >
            <MobilePullWrap>
                <MobilePull className="mobile-pull"></MobilePull>
            </MobilePullWrap>
            <TopWrap>
                <TopLeft>
                    <ContactTitle className="hero-title">
                        Contact Me!
                    </ContactTitle>
                    <ContactSubtitle className="hero-title">
                        Send me a message!
                    </ContactSubtitle>
                </TopLeft>

                <TopRight>
                    <svg
                        onClick={() => setContactForm(!contactForm)}
                        className="contact-close"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L6.58579 8L5.29289 9.2929C4.90237 9.6834 4.90237 10.3166 5.29289 10.7071C5.68342 11.0976 6.31658 11.0976 6.70711 10.7071L8 9.4142L9.2929 10.7071C9.6834 11.0976 10.3166 11.0976 10.7071 10.7071C11.0976 10.3166 11.0976 9.6834 10.7071 9.2929L9.4142 8L10.7071 6.70711C11.0976 6.31658 11.0976 5.68342 10.7071 5.29289C10.3166 4.90237 9.6834 4.90237 9.2929 5.29289L8 6.58579L6.70711 5.29289Z"
                        />
                    </svg>
                </TopRight>
            </TopWrap>
            <InputWrap>
                {" "}
                <SingleWrap>
                    <Label className="hero-title">First Name</Label>
                    <SmallInputs className="contact-input"></SmallInputs>
                </SingleWrap>
                <SingleWrap>
                    <Label className="hero-title">Email</Label>
                    <SmallInputs className="contact-input"></SmallInputs>
                </SingleWrap>
            </InputWrap>
            <SingleWrap style={{ marginTop: "16px" }}>
                <Label className="hero-title">Message</Label>
                <TextBox className="contact-input"></TextBox>
            </SingleWrap>
            <SubmitButton className="hero-button">Send Message!</SubmitButton>
        </ContactWrap>
    );
};

function useOnClickOutside(ref, handler) {
    useEffect(
        () => {
            const listener = (event) => {
                // Do nothing if clicking ref's element or descendent elements
                if (!ref.current || ref.current.contains(event.target)) {
                    return;
                }

                handler(event);
            };

            document.addEventListener("mousedown", listener);
            document.addEventListener("touchstart", listener);

            return () => {
                document.removeEventListener("mousedown", listener);
                document.removeEventListener("touchstart", listener);
            };
        },
        // Add ref and handler to effect dependencies
        // It's worth noting that because passed in handler is a new ...
        // ... function on every render that will cause this effect ...
        // ... callback/cleanup to run every render. It's not a big deal ...
        // ... but to optimize you can wrap handler in useCallback before ...
        // ... passing it into this hook.
        [ref, handler]
    );
}

export default ContactForm;
