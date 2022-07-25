import React from "react";

interface ImageLinkProps {
    href: string,
    rel?: string,
    target?: string,
    src: string,
    alt: string,
    title?: string,
    size?: number | string
}

const ImageLink = (props: ImageLinkProps) => {

    const { href, target, rel, src, alt, title, size } = props;

    return <a className={'flex items-center justify-center no-underline'} href={href} target={target} rel={rel}>
        <img src={src} title={title} alt={alt} width={size} />
    </a>;
};

ImageLink.defaultProps = {
    href: '/',
    rel: undefined,
    src: 'img',
    alt: 'img',
    size: 'auto'
};

export default ImageLink;