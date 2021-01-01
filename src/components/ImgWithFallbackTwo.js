const ImgWithFallbackTwo = ({
    src,
    fallback,
    type = "image/webp",
    ...delegated
}) => {
    return (
        <picture>
            <source srcSet={src} type={type} />
            <img src={fallback} {...delegated} />
        </picture>
    );
};

export default ImgWithFallbackTwo;
