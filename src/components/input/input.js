/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled /* -, { css } */ from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;

  :focus + label {
    top: -18%;
    left: 10px;
    font-size: 1rem;
    width: 10%;
    background-color: white;
    opacity: 1;
  }

  :focus::placeholder {
    opacity: 0;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 12%;
  left: 4px;
  padding: 0 5px;
  width: 13%;
  font-size: 1.5rem;
  background-color: white;
  transition: opacity 0.1s ease-in-out, top 0.1s ease-in-out, left 0.1s ease-in-out,
    font-size 0.1s ease-in-out, width 0.1s ease-in-out;
`;

const StyledInput = ({ placeholder }) => (
  <StyledWrapper>
    <Input id="name" name="name" type="text" /* placeholder={placeholder} */ />
    <StyledLabel htmlFor="name">{placeholder}</StyledLabel>
  </StyledWrapper>
);

export default StyledInput;
