import styled from 'styled-components';
import {
  Button, Input, List
} from 'antd';

export const StyledInput = styled(Input)`
  margin-bottom: 10px;
`;

export const StyledButton = styled(Button)`
  margin: 10px 0;
  &.ant-btn-primary:not(:disabled) {
    background: orangered;
  }
  &.ant-btn-primary:not(:disabled):not(.ant-btn-disabled):hover {
    background: rebeccapurple;
  }
`;

export const StyledListContainer = styled.div`
  margin-top: 40px;
  & > h2 {
    margin: 0;
    color: orangered;
  }
`;

export const StyledList = styled(List)`
  margin-bottom: 100px;
`;
