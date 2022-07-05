import { Card as BaseCard, Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

export const Card = styled(BaseCard)`
  display: flex;
  justify-content: center;
  min-width: 330px;
  max-width: 400px;
  padding: 24px;
  margin-top: 16px;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

export const TitleH4 = styled(Title).attrs({ level: 4 })`
  text-align: center;
`;
