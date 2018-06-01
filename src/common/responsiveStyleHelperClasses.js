// @flow
import css from 'styled-jsx/css';

const responsiveStyleHelperClasses = css`
  @media only screen and (min-width: 812px) {
    .mobileOnly {
      display: none !important;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 812px) {
    .desktopOnly {
      display: none !important;
    }
  }
`;

export default responsiveStyleHelperClasses;
