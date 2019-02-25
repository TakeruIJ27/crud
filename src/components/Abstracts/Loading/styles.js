import styled, { keyframes } from 'styled-components';


const animateLogo = keyframes`
  0% {
    opacity: 0;
    fill: none;
    stroke-dashoffset: 1800;
  }

  30% {
    opacity: 3;
    fill: none;
    stroke-dashoffset: 1800;
  }

  70% {
    opacity: 6;
    fill: rgba(91, 232, 58, 0);
  }

  80% {
    fill: rgba(91, 232, 58, 0.8);
  }

  90% {
    opacity: 9;
    fill: rgba(91, 232, 58, 0.9);
  }

  100% {
    opacity: 10;
    fill: rgba(91, 232, 58, 1);
    stroke-dashoffset: 0;
  }
`;

export const LoadingOverlay = styled.div`

  width: 100vw;
  height: 100vh;
  background: #222;

`;

export const LoadingContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & svg path {
        stroke-dasharray: 1800;
        stroke: #fff;
        opacity: 10;
        animation: ${animateLogo} 3s ease-in alternate-reverse infinite;
    }
`;
