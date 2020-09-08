import styled, { css } from 'styled-components';

const Button = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  text-decoration: none;
  padding: 0;
  width: 70px;
  height: 30px;
  padding-top: 3px;
  border: 1px solid red;
  border-bottom: 3px solid red;
  background-color: transparent;
  transition: color 0.8s ease-in-out, letter-spacing 1s ease-in-out, font-size 0.8s ease-in-out;
  overflow: hidden;

  :hover {
    color: black;
    letter-spacing: 2px;
    font-size: 1.2rem;
  }

  ${({ down }) =>
    down &&
    css`
      margin-left: 2rem;
      color: red;

      ::after {
        content: '';
        position: absolute;
        width: 85px;
        height: 40px;
        background-color: red;
        z-index: -1;
        top: 100%;
        right: 0%;
        transition: transform 0.5s ease-in-out;
        will-change: transform;
      }

      :hover::after {
        transform: translatey(-100%);
      }
    `}

  ${({ share }) =>
    share &&
    css`
      color: darkgray;
      border: none;
      border-bottom: 3px solid lightgray;
      width: 70px;
      height: 25px;

      :hover {
        color: darkgray;
        font-size: 1.1rem;
      }
    `}
`;

export default Button;
