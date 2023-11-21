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
    font-weight: 800;
    font-size: 2.8rem;
  `,
  head2: css`
    font-family: 'AppleSDGothicNeo';
    font-weight: 800;
    font-size: 2.4rem;
  `,
  head3: css`
    font-family: 'AppleSDGothicNeo';
    font-weight: 700;
    font-size: 2.2rem;
  `,
  head4: css`
    font-family: 'AppleSDGothicNeo';
    font-weight: 700;
    font-size: 2rem;
  `,
  title1_bold: css`
    font-family: 'AppleSDGothicNeo';
    font-weight: 700;
    font-size: 1.8rem;
  `,
  title1_reg: css`
    font-family: 'AppleSDGothicNeo';
    font-weight: 400;
    font-size: 1.8rem;
  `,
  title2_bold: css`
    font-family: 'AppleSDGothicNeo';
    font-weight: 700;
    font-size: 1.6rem;
  `,
  title2_reg: css`
    font-family: 'AppleSDGothicNeo';
    font-weight: 400;
    font-size: 1.6rem;
  `,
  body1: css`
    font-family: 'AppleSDGothicNeo';
    font-weight: 700;
    font-size: 1.4rem;
  `,
  body2: css`
    font-family: 'AppleSDGothicNeo';
    font-weight: 400;
    font-size: 1.4rem;
  `,
  detail1: css`
    font-family: 'AppleSDGothicNeo';
    font-weight: 700;
    font-size: 1.2rem;
  `,
  detail2: css`
    font-family: 'AppleSDGothicNeo';
    font-weight: 400;
    font-size: 1.2rem;
  `,
};

const Shadows = {
  large: '10px 20px 20px 0px rgba(0, 0, 0, 0.25)',
  mini: '0px 6px 2px 0px rgba(0, 0, 0, 0.05)',
};

const Radius = {
  s: '4px',
  m: '8px',
  l: '16px',
};

const theme = {
  colors,
  fonts,
  Shadows,
  Radius,
};

export default theme;
