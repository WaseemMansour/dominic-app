import React from 'react';
import { Spin } from 'antd';
import { StyledLoadingContainer } from './styles';

const Loading: React.FC = () => (
  <StyledLoadingContainer>
    <Spin tip='Loading...' />
  </StyledLoadingContainer>
);

export default Loading;
