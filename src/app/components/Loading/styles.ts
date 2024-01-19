import styled from 'styled-components';
import { Spin } from 'antd';

export const StyledLoadingContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSpin = styled(Spin)`
 .ant-spin-dot-item {
   background-color: orangered;
 }
`;
