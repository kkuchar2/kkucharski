import {CSSProperties, useCallback, useState} from "react";

import {SocialIcon as BaseSocialIcon} from "react-social-icons";
import styled from "styled-components";

interface HoverSocialIconProps {
    size: number;
    defaultColor: string;
    hoverColor: string;
    className?: string;
    bgColor?: string;
    fgColor?: string;
    label?: string;
    network?: string;
    url?: string;
    style?: CSSProperties;
}

const StyledBaseSocialIcon = styled(BaseSocialIcon)<any>`
  .social-svg-icon {
    transition: none !important;
  }
`;

export const SocialIcon = (props: HoverSocialIconProps) => {

    const { size, defaultColor, hoverColor, ...rest } = props;

    const [color, setColor] = useState(defaultColor);

    const onMouseEnter = useCallback(() => {
        setColor(hoverColor);
    }, [hoverColor]);

    const onMouseLeave = useCallback(() => {
        setColor(defaultColor);
    }, [defaultColor]);

    return <StyledBaseSocialIcon target={"_blank"}
                                 style={{
                                     width: size,
                                     height: size,
                                 }}
                                 onMouseEnter={onMouseEnter}
                                 onMouseLeave={onMouseLeave}
                                 bgColor={'none'}
                                 fgColor={color}
                                 {...rest}/>;

};