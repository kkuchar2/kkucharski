import React, {ReactNode} from "react";

import {LinkButton, StyledButtonLink} from "./style";

interface ButtonLinkProps {
    href: string,
    rel?: string,
    target?: string,
    download?: boolean,
    buttonType?: string,
    width?: number | string,
    height?: number | string,
    children?: ReactNode,
}

const ButtonLink = (props: ButtonLinkProps) => {

    const { href, rel, target, download, buttonType, width, height, children } = props;

    return <StyledButtonLink href={href} rel={rel} target={target}>
        <LinkButton>
            {children}
        </LinkButton>
    </StyledButtonLink>;
};

ButtonLink.defaultProps = {
    href: '/',
    rel: undefined,
    target: undefined,
    download: false,
    buttonType: 'button',
    width: 'auto',
    height: 'auto',
    children: 'Button',
};

export default ButtonLink;