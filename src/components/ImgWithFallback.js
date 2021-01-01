const ImgWithFallback = ({
    src,
    fallback,
    type = "image/webp",
    ...delegated
}) => {
    return (
        <picture className="full-bleed">
            <source className="full-bleed" srcSet={src} type={type} />
            <img className="full-bleed" src={fallback} {...delegated} />
        </picture>
    );
};

export default ImgWithFallback;
