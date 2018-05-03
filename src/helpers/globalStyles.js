// @flow

export const animationStyles = (delayTime: number) => `
  @keyframes enterLeft {
    0% {
      -webkit-transform: translateX(400px);
      transform: translateX(400px);
      will-change: transform;
    }
    100% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
      will-change: transform;
    }
  }
  @keyframes enterRight {
    0% {
      -webkit-transform: translateX(-400px);
      transform: translateX(-400px);
      will-change: transform;
    }
    100% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
      will-change: transform;
    }
  }

  @keyframes exitLeft {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
      will-change: transform;
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(-400px);
      transform: translateX(-400px);
      will-change: transform;
    }
  }
  @keyframes exitRight {
    0% {
      opacity: 1;
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
      will-change: transform;
    }
    100% {
      opacity: 0;
      -webkit-transform: translateX(400px);
      transform: translateX(400px);
      will-change: transform;
    }
  }

  .SFAQ-TR-slideLeft-enter {
    animation: enterLeft ${delayTime}ms ease-in-out;
  }

  .SFAQ-TR-slideLeft-exit {
    animation: exitLeft ${delayTime}ms ease-in-out;
  }

  .SFAQ-TR-slideRight-enter {
    animation: enterRight ${delayTime}ms ease-in-out;
  }

  .SFAQ-TR-slideRight-exit {
    animation: exitRight ${delayTime}ms ease-in-out;
  }
  .transition-container {
    position: relative;
  }
  .transition-container div.static-faq {
    top: 0;
    left: 0;
    position: absolute;
  }
`;

export const delayTime = 350;
export const transitionStyles = animationStyles(delayTime);
