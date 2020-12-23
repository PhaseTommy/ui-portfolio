import BackgroundIMG from "../assets/scene.png";
import CircleBG from "../assets/background.png";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const BackgroundImage = styled.div`
    position: absolute;
    right: -30%;
    top: -64px;
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

const RingBG = styled.img`
    position: absolute;
    right: 200px;
    top: 0;
`;

const Background = () => {
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });

    return (
        <>
            {isDesktop && (
                <BackgroundImage>
                    <RingBG src={CircleBG}></RingBG>
                    <iframe
                        title="3D"
                        loading="lazy"
                        src="https://my.spline.design/poertfolio-0442c98cffc16338ec2f1977676843e2/"
                        frameborder="0"
                    ></iframe>
                </BackgroundImage>
            )}

            {isTabletOrMobile && (
                <MobileImage>
                    <RingBG src={CircleBG}></RingBG>

                    <img
                        alt="Background 3D"
                        style={{ width: "100%", filter: "blur(10px)" }}
                        src={BackgroundIMG}
                    ></img>
                </MobileImage>
            )}
        </>
    );
};

export default Background;
