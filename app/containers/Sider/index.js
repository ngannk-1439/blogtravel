import React from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { colors } from 'global-styles';

import SubjectList from 'containers/SubjectList';



const Title = styled.h2`
  background: ${colors.primaryColor} !important;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: none;
  margin-bottom: 0;
  height: 50px;
  text-transform: uppercase;
`;

function MainSider() {
  return (
    <React.Fragment>
      <Title>Chủ Đề</Title>
      <SubjectList></SubjectList>
    </React.Fragment>

  )
}

export default MainSider;
