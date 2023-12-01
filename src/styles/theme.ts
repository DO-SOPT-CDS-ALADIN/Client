import { css } from 'styled-components';

const colors = {
  pink_800: '#A6004C',
  pink_400: '#EA217D',
  pink_200: '#FFBDDB',
  pink_100: '#FFEBF4',
  blue_600: '#3D499F',
  blue_500: '#4B92D9',
  blue_400: '#2DB0E8',
  blue_100: '#E0EEFF',
  tangerine: '#F8774F',
  orange: '#FBB11A',
  yellow: '#FEE189',
  black: '#000000',
  grey_600: '#343434',
  grey_500: '#464646',
  grey_400: '#717171',
  grey_300: '#D6D6D6',
  grey_200: '#ECECEC',
  grey_100: '#F3F3F3',
  white: '#FFFFFF',
  translucent: 'rgba(0, 0, 0, 0.25)',
};

const fonts = {
  head1: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 2.8rem;
    font-weight: 800;
    line-height: auto;
  `,
  head2: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 2.4rem;
    font-weight: 800;
    line-height: auto;
  `,
  head3: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 2.2rem;
    font-weight: 700;
    line-height: auto;
  `,
  head4: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 2rem;
    font-weight: 700;
    line-height: auto;
  `,
  title1_bold: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 1.8rem;
    font-weight: 700;
    line-height: auto;
  `,
  title1_reg: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 1.8rem;
    font-weight: 400;
    line-height: auto;
  `,
  title2_bold: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 1.6rem;
    font-weight: 700;
    line-height: auto;
  `,
  title2_reg: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 1.6rem;
    font-weight: 400;
    line-height: auto;
  `,
  body1: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 1.4rem;
    font-weight: 700;
    line-height: auto;
  `,
  body1_copy: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 1.5rem;
    font-weight: 400;
    font-style: normal;
    line-height: 160%;
    letter-spacing: -0.045rem;
  `,
  body2: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 140%;
  `,
  body3: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 1.4rem;
    font-weight: 700;
    line-height: normal;
  `,
  body4: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 1.4rem;
    font-weight: 500;
    line-height: normal;
  `,
  detail1: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 1.2rem;
    font-weight: 700;
    line-height: auto;
  `,
  detail2: css`
    font-family: 'AppleSDGothicNeo';
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 160%;
  `,
};

const shadows = {
  large: '10px 20px 20px 0px rgba(0, 0, 0, 0.25)',
  mini: '0px 2px 6px 0px rgba(0, 0, 0, 0.05)',
};

const radius = {
  s: '4px',
  m: '8px',
  l: '16px',
};

const theme = {
  colors,
  fonts,
  shadows,
  radius,
};

export default theme;
