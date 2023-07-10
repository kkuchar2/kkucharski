import { SvgIconProps } from 'components/svg/SvgIconProps';

export const ExternalLink = (props: SvgIconProps) => {

    const { width = 18, height = 18 } = props;

    return <svg width={width} height={height} viewBox={'0 0 32 32'} fill={'none'} xmlns={'http://www.w3.org/2000/svg'}>
        <path
            d={'M16 4.75H4.75C3.75544 4.75 2.80161 5.14509 2.09835 5.84835C1.39509 6.55161 1 7.50544 1 8.5V27.25C1 28.2446 1.39509 29.1984 2.09835 29.9016C2.80161 30.6049 3.75544 31 4.75 31H23.5C24.4946 31 25.4484 30.6049 26.1516 29.9016C26.8549 29.1984 27.25 28.2446 27.25 27.25V16M14.125 17.875L31 1M31 1H21.625M31 1V10.375'}
            stroke={'white'} strokeWidth={'2'} strokeLinecap={'round'} strokeLinejoin={'round'}/>
    </svg>;
};