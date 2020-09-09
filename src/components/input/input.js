/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled /* -, { css } */ from 'styled-components';

const Input = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;

  /* ::placeholder {
    padding: 0 7px;
  } */

  :focus + label {
    transform: translateY(-16px) scale(0.6);
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
  top: 14%;
  left: 4px;
  padding: 0 5px;
  font-size: 1.5rem;
  transition: transform 0.1s ease-in-out;

  span {
    padding: 0 7px;
    background-color: white;
  }
`;

const StyledInput = ({ id, label }) => {
  return (
    <StyledWrapper>
      <Input id={id} name="name" type="text" /* placeholder={placeholder} */ />
      <StyledLabel htmlFor="name">
        <span>{label}</span>
      </StyledLabel>
    </StyledWrapper>
  );
};
export default StyledInput;
