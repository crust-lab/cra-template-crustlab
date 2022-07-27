import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import styled from 'styled-components';
import { getColor, getSpacing } from '../theme/styleUtils';

export const PageContainer = styled(Layout)`
  background-color: ${getColor('primaryBackground')};
  min-height: 100vh;
  display: flex;
  width: 100%;
`;

export const StyledContent = styled(Content)`
  display: flex;
  flex-direction: column;
  margin: ${getSpacing('spacing16')}px ${getSpacing('spacing24')}px;
`;
