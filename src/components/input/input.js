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
    top: 100%;
    margin-top: -16px;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: 0.2s;
`;

const StyledInput = ({ placeholder }) => (
  <StyledWrapper>
    <Input id="name" name="name" type="text" placeholder={placeholder} />
    <StyledLabel htmlFor="name">{placeholder}</StyledLabel>
  </StyledWrapper>
);

export default StyledInput;
