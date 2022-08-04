import React from 'react';
import { Avatar, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useSelectedUserSelector } from '../../store/users/slice';
import { getColor, getSpacing } from '../../theme/styleUtils';

type UserInfoType = {
  label: string;
  value: string;
};

const UserPage = () => {
  const {
    name: { first, last },
    picture,
    location: {
      country,
      state,
      street: { name, number },
      postcode,
      city,
    },
    email,
    phone,
  } = useSelectedUserSelector();

  const { t } = useTranslation();

  const userInfo: UserInfoType[] = [
    { label: t('userPage.firstname'), value: first },
    { label: t('userPage.lastname'), value: last },
    { label: t('userPage.phoneNumber'), value: phone },
    { label: t('userPage.email'), value: email },
    {
      label: t('userPage.address'),
      value: `${name} ${number}, ${postcode} ${city}`,
    },
    { label: t('userPage.country'), value: country },
    { label: t('userPage.state'), value: state },
  ];

  return (
    <UserContainer>
      <StyledCard>
        <StyledAvatar
          size="large"
          alt={`${first} ${last}`}
          src={picture.medium}
        />
        {userInfo.map(({ label, value }) => (
          <Text key={label}>
            <b>{label}</b> {value}
          </Text>
        ))}
      </StyledCard>
    </UserContainer>
  );
};

const Text = styled.div`
  margin-top: ${getSpacing('spacing4')}px;
`;

const UserContainer = styled.div`
  margin-top: ${getSpacing('spacing24')}px;
  display: flex;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  width: 400px;
  height: 400px;
  background: ${getColor('secondaryBackground')};
  color: ${getColor('text02')};
  border-radius: ${getSpacing('spacing32')}px;
  .ant-card-body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
`;

export default UserPage;
