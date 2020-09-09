import React from 'react';
import ShareStatus from '../components/shareStatus/share.status';
import { StyledWrapper } from '../template/Main.template';

const MainView = () => {
  return (
    <StyledWrapper>
      <h1>Hello there!</h1>
      <ShareStatus />
    </StyledWrapper>
  );
};

export default MainView;
