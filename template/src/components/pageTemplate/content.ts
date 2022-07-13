import styled from 'styled-components';

export const PageContainer = styled.div`
  background-color: ${({ theme: { colors } }) => colors.gray};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 48px;
  margin: 5vh 0;
`;
