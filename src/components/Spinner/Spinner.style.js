import styled from 'styled-components';

export const Sample = styled.div`
  border: 5px solid var(--ligthGrey);
  border-top: 5px solid var(--medGrey);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

// other choese
export const Ldsripple = styled.div`
  /* display: inline-block; */
  position: relative;
  width: 80px;
  height: 80px;
  margin: 20px auto;
  div {
    position: absolute;
    border: 4px solid var(--medGrey);
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -0.5s;
  }

  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

export const Ldsspinner = styled.div`
  color: official;
  /* display: inline-block; */
  position: relative;
  width: 80px;
  height: 80px;
  margin: 20px auto;
  div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
    :after {
      content: ' ';
      display: block;
      position: absolute;
      top: 3px;
      left: 37px;
      width: 6px;
      height: 18px;
      border-radius: 20%;
      background: var(--medGrey);
    }
    :nth-child(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }
    :nth-child(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }
    :nth-child(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }
    :nth-child(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }
    :nth-child(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }
    :nth-child(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }
    :nth-child(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }
    :nth-child(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }
    :nth-child(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }
    :nth-child(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }
    :nth-child(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }
    :nth-child(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
    @keyframes lds-spinner {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;
