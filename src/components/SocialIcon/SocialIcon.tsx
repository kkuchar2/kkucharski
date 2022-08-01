import {SocialIcon as BaseSocialIcon, SocialIconProps} from "react-social-icons";
import styled from "styled-components";

interface HoverSocialIconProps {
    size: number;
    defaultColor: string;
    hoverColor: string;
}

const StyledBaseSocialIcon = styled(BaseSocialIcon)<any>`
  width: ${(props: HoverSocialIconProps) => props.size}px !important;
  height: ${(props: HoverSocialIconProps) => props.size}px !important;
  
  .social-svg-icon {
    transition: none !important;
    fill: ${({ defaultColor }) => defaultColor} !important;
  }
  
  &:hover {
    .social-svg-icon {
      fill: ${({ hoverColor }) => hoverColor} !important;
    }
  }
`;

const SocialIcon = (props: HoverSocialIconProps & SocialIconProps) => {
    return <StyledBaseSocialIcon target={'_blank'} {...props}/>;
};

SocialIcon.defaultProps = {
    size: 30,
    defaultColor: '#000',
    hoverColor: '#fff'
};

export default SocialIcon;