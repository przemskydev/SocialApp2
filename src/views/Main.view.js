import React from 'react';
import ShareStatus from '../components/shareStatus/share.status';
import { StyledWrapper } from '../template/Main.template';
import Post from '../components/post/Post';

const MainView = () => {
  return (
    <StyledWrapper>
      <ShareStatus />
      <Post />
    </StyledWrapper>
  );
};

export default MainView;
