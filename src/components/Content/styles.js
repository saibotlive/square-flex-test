import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  /*display: flex;
  flex-wrap: wrap;
  flex: 0 1 auto;*/
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 10px 5px;
  padding: 0 5px;
`;

export const Item = styled.div`
  grid-column: span 12;

  &:nth-child(n + 10) {
    grid-column: span 6;
  }

  @media (min-width: 480px) {
    &:nth-child(1) {
      grid-column: span 12;
    }
    &:nth-child(n + 2):nth-child(-n + 9) {
      grid-column: span 6;
    }
    &:nth-child(n + 10):nth-child(-n + 15) {
      grid-column: span 4;
    }
  }

  @media (min-width: 1024px) {
    &:nth-child(1) {
      grid-column: span 8;
    }

    &:nth-child(n + 2):nth-child(-n + 5) {
      grid-column: span 4;
    }

    &:nth-child(n + 6):nth-child(-n + 9) {
      grid-column: span 3;
    }

    &:nth-child(n + 10):nth-child(-n + 15) {
      grid-column: span 2;
    }
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 22px;
`;

export const Body = styled.p`
  font-size: 14px;
  margin: 22px;
`;

export const BodyStyle = createGlobalStyle`
  html,
  body {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const LightBoxContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  animation: ${fadeIn} 0.5s linear;
`;

export const LightBoxBody = styled.div`
  position: absolute;
  background-color: #ffffff;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  max-width: 800px;

  & > div {
    font-size: 14px;
    font-weight: bold;
    margin: 16px;
  }
  p {
    font-size: 10px;
    margin: 16px;
  }

  @media (min-width: 960px) {
    width: 75%;
    & > div {
      font-size: 16px;
      font-weight: bold;
      margin: 22px;
    }
    ${Body} {
      font-size: 14px;
      margin: 22px;
    }
  }
`;

export const LightBoxItem = styled.div`
  position: relative;
`;

export const LightBoxCloseBtn = styled.div`
  position: absolute;
  cursor: pointer;
  right: 16px;
  top: 16px;
  width: 32px;
  height: 32px;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #fff;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;
