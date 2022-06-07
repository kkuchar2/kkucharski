import React from "react";

import {LinkImage, StyledImageLink} from "./style";

interface ImageLinkProps {
    href: string,
    rel?: string,
    target?: string,
    src: string,
    alt: string,
    width?: number | string,
    height?: number | string,
}

const ImageLink = (props: ImageLinkProps) => {

    const { href, target, rel, src, alt, width, height } = props;

    return <StyledImageLink href={href} target={target} rel={rel}>
        <LinkImage src={src} alt={alt} width={width} height={height}/>
    </StyledImageLink>;
};

ImageLink.defaultProps = {
    href: '/',
    rel: undefined,
    src: 'img',
    alt: 'img',
    width: 'auto',
    height: 'auto',
};

export default ImageLink;