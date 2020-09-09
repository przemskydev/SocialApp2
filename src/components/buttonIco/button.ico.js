/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledButtonIco = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  outline: none !important;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  :after {
    content: '';
    background-color: rgba(0, 0, 0, 0.05);
    position: absolute;
    width: 1px;
    height: 1px;
    border: none;
    border-radius: 50%;
    top: 49%;
    left: 49%;
    opacity: 0;
    transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1);
  }

  :active:after {
    opacity: 1;
    transform: scale(40);
  }
`;

const ButtonIco = ({ ico }) => (
  <StyledButtonIco>
    <span>
      <img src={ico} alt="Icon" />
    </span>
  </StyledButtonIco>
);

export default ButtonIco;
