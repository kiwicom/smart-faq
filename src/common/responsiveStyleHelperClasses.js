// @flow
import css from 'styled-jsx/css';

const responsiveStyleHelperClasses = css`
  .mobileOnly {
    display: none;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .desktopOnly {
      display: none !important;
    }
    .mobileOnly {
      display: initial !important;
    }
  }
`;

export default responsiveStyleHelperClasses;
