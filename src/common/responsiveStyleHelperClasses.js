// @flow
import css from 'styled-jsx/css';

const responsiveStyleHelperClasses = css`
  @media only screen and (min-width: 481px) {
    .mobileOnly {
      display: none !important;
    }
  }
  @media only screen and (max-width: 813px) {
    .desktopOnly {
      display: none !important;
    }
  }
`;

export default responsiveStyleHelperClasses;
