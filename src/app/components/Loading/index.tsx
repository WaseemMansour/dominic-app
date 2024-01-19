import React from 'react';
import { StyledLoadingContainer, StyledSpin } from './styles';

const Loading: React.FC = () => (
  <StyledLoadingContainer>
    <StyledSpin tip='Loading...' />
  </StyledLoadingContainer>
);

export default Loading;
