import {motion} from "framer-motion";
import styled from "styled-components";

import {ColorModeProps} from "components/sections/common.styles";

export const StyledHome = styled.div`
  min-width: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

export const StyledContent = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LeftRightShadow = styled.div<ColorModeProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background: ${props => {
      if (props.colorMode === 'dark') {
        return `linear-gradient(to right, transparent 0%, #272727cc 50%, transparent 100%)`;
      }
      return `linear-gradient(to right, transparent 0%, #ffffff 50%, transparent 100%)`;
  }};

`;

export const TopBottomShadow = styled.div<ColorModeProps>`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  background: ${props => {
    if (props.colorMode === 'dark') {
        return `linear-gradient(to bottom, #272727cc 0%, transparent 10%, transparent 90%, #272727cc 100%)`;
    }
    return `linear-gradient(to bottom, #ffffff 0%, transparent 10%, transparent 90%, #ffffff 100%)`;
}};
`;

export const TopSection = styled.div<ColorModeProps>`
  overflow: hidden;
  box-sizing: border-box;
  margin-bottom: 100px;
  width: 100%;
  font-weight: 600;
  margin-top: 50px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: 50px 50px;
  position: relative;
  background: ${props => props.colorMode === 'dark' ? `url('/images/rect-dark.svg')` : `url('/images/rect-light.svg')`};

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #0e73cc 1.93%, #624bbb 14.86%, #ff455d 48.09%, #f35815 77.82%, #f2b600 97.3%);
    z-index: -3;
  }

  &:after {
    content: "";
    position: absolute;
    top: calc(var(--mouse-y) * 1px - 200px);
    left: calc(var(--mouse-x) * 1px - 200px);
    width: 400px;
    height: 400px;
    border-radius: 50%;
    box-shadow: ${props => {
      if (props.colorMode === 'light') {
        return `0 0 0 99999px rgba(220, 220, 220, 1), 0 2px 5px #000`;
      }
      return `0 0 0 99999px rgba(44, 44, 44, 0.99), 0 2px 5px #000`;
    }};
    filter: blur(100px);
    z-index: -2;
  }
`;

export const HiTitle = styled(motion.span)`
  box-sizing: border-box;
  text-align: center;
  -webkit-text-fill-color: transparent;
  font-style: normal;
  font-weight: 900;
  font-size: 4rem;
  line-height: 108px;
  font-family: Inter, sans-serif;
  background: linear-gradient(135deg, #0e73cc 1.93%, #624bbb 14.86%, #ff455d 48.09%, #f35815 77.82%, #f2b600 97.3%);
  color: transparent;
  -webkit-background-clip: text;

  @media (max-width: 768px) {
    font-size: 3.5rem;
    line-height: 80px;
  }

  @media (max-width: 480px) {
    font-size: 2.8rem;
    line-height: 50px;
  }
`;

export const NameTitle = styled(motion.h1)`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  letter-spacing: -2px;
  font-style: normal;
  font-weight: 900;
  font-size: 4rem;
  line-height: 108px;
  font-family: Inter, sans-serif;

  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 50px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.25rem;
    line-height: 50px;
  }
`;

export const Descriptions = styled.div`
  margin-top: 100px;
  width: 1600px;
  min-width: 0;
  box-sizing: border-box;

  @media (max-width: 1600px) {
    width: 100%;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const StyledWorkEducation = styled.div`
  display: grid;
  gap: 60px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 100px;
  grid-template-columns: 2fr 1fr;

  @media (max-width: 840px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const StyledBuildHash = styled.div`
  font-size: 0.8em;
  color: rgba(229, 229, 229, 0.3);
  text-align: left;
  font-weight: 500;
`;
