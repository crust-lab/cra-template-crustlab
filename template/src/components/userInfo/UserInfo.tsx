import React from 'react';
import { Button, Typography } from 'antd';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import {
  logout,
  selectIsAuthorised,
} from '../../store/reducers/auth/authSlice';
import { Link } from 'react-router-dom';
import { routerAuthPaths } from '../../router/routerPaths';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

const UserInfo = () => {
  const dispatch = useAppDispatch();
  const isAuthorised = useAppSelector(selectIsAuthorised);
  const { t } = useTranslation();

  const handleLogoutPress = () => logout()(dispatch);

  return (
    <Wrapper>
      <Text>
        {t('auth.isUserAuthorised')}: {`${isAuthorised}`}
      </Text>
      {isAuthorised ? (
        <Button onClick={handleLogoutPress} block>
          {t('auth.logout')}
        </Button>
      ) : (
        <Link to={routerAuthPaths.login}> {t('auth.goToLogin')}</Link>
      )}
    </Wrapper>
  );
};

export default UserInfo;

const Wrapper = styled.div`
  display: flex;
  padding-top: 16px;
  justify-content: space-between;
`;
