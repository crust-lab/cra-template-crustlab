import { Card as BaseCard, Typography } from 'antd';
import styled from 'styled-components';
import { getSpacing } from '../theme/styleUtils';

const { Title } = Typography;

export const Card = styled(BaseCard)`
  display: flex;
  justify-content: center;
  min-width: 330px;
  max-width: 400px;
  padding: ${getSpacing('spacing05')}px;
  margin-top: ${getSpacing('spacing04')}px;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

export const TitleH4 = styled(Title).attrs({ level: 4 })`
  text-align: center;
`;
