import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin-top: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledAvatar = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  overflow: hidden;
  position: relative;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  line-height: 1;
  user-select: none;
  justify-content: center;
  background-color: lightgrey;
  border-radius: 50%50%;
`;
