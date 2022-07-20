import React from 'react';
import styled from 'styled-components';
import { getColor } from '../theme/styleUtils';

const TasksPage = () => {
  return <Header>TASKS PAGE</Header>;
};

const Header = styled.div`
  color: ${getColor('text02')};
`;

export default TasksPage;
