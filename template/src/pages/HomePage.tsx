import React from 'react';
import styled from 'styled-components';
import { getColor } from '../theme/styleUtils';

const HomePage = () => {
  return <Header>HOMEPAGE PAGE</Header>;
};

const Header = styled.div`
  color: ${getColor('text02')};
`;

export default HomePage;
