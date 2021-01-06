import BackgroundIMG from "../assets/scene.png";
import CircleBG from "../assets/background.png";
import CircleBGWebP from "../assets/background.webp";

import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import ImgWithFallbackTwo from "./ImgWithFallbackTwo";

const BackgroundImage = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 0;
    width: 100%;
    @media (max-width: 630px) {
        right: 0px;
        z-index: -1;
    }
`;

const MobileImage = styled.div`
    position: absolute;
    right: -400px;
`;

const RingBG = styled(ImgWithFallbackTwo)`
    position: absolute;
    right: 0;
    top: 0;
`;

const DarkBG = styled.div`
    width: calc(100vw - 32px);
    height: calc(100vh - 32px);
    /* background: #0d1011; */
    position: absolute;
    top: 0;
    margin: 16px;
    border-radius: 16px;
    z-index: -3;
`;

const DarkBGWrap = styled.div``;

const Background = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

    return (
        <>
            {isDesktop && (
                <>
                    {/* <DarkBG className="hero-bg"></DarkBG> */}
                    <BackgroundImage>
                        <RingBG
                            src={CircleBGWebP}
                            fallback={CircleBG}
                            alt="Ring Background Image"
                        ></RingBG>
                    </BackgroundImage>
                </>
            )}

            {isTabletOrMobile && (
                <MobileImage>
                    <RingBG src={CircleBG}></RingBG>
                </MobileImage>
            )}
        </>
    );
};

export default Background;
