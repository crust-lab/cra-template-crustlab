import { useGetAllCharactersQuery } from '../../services/ricky-api/ricky-api';
import { Avatar, Image, Skeleton, Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const RickyCharactersList = () => {
  const { data, isLoading, isError, error } = useGetAllCharactersQuery();

  if (isLoading)
    return (
      <CharacterContainer>
        <Skeleton active avatar />
        <Skeleton active avatar />
        <Skeleton active avatar />
      </CharacterContainer>
    );

  if (isError || !data) return <div>{JSON.stringify(error, null, 2)}</div>;

  const { results } = data;
  return (
    <div>
      {results.map(({ id, name, image }) => (
        <CharacterContainer key={id}>
          <Avatar size="large" src={<Image src={image} />} />
          <StyledText>{name}</StyledText>
        </CharacterContainer>
      ))}
    </div>
  );
};

export default RickyCharactersList;

const CharacterContainer = styled.div`
  padding: 4px;
`;

const StyledText = styled(Text)`
  margin: 0 8px;
`;
