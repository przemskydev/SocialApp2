/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const StyledButtonIco = styled.button`
  background-color: transparent;
  border: none;
  padding: 5px 15px;
`;

const ButtonIco = ({ ico }) => (
  <StyledButtonIco type="button">
    <img src={ico} alt="Icon" />
  </StyledButtonIco>
);

export default ButtonIco;
