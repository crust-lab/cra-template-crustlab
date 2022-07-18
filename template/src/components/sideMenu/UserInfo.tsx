import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Avatar as AvatarIcon, Dropdown, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { getSpacing } from '../../theme/styleUtils';

interface UserInfoProps {
  hideUserName?: boolean;
}

const UserMenu = () => {
  const logOut = () => console.log('log out');
  const { t } = useTranslation();

  return (
    <Menu>
      <Menu.Item key="" onClick={logOut}>
        {t('auth.logout')}
      </Menu.Item>
    </Menu>
  );
};

const UserInfo = ({ hideUserName }: UserInfoProps) => {
  return (
    <UserInfoContainer>
      <Avatar>A</Avatar>
      {!hideUserName && (
        <>
          <UserName>Admin Admin</UserName>{' '}
          <Dropdown overlay={<UserMenu />} trigger={['click']} placement="top">
            <MoreOutlined />
          </Dropdown>
        </>
      )}
    </UserInfoContainer>
  );
};

const UserName = styled.div`
  color: ${({ theme: { colors } }) => colors.text01};
  margin: 0 ${getSpacing('spacing04')}px;
`;

const Avatar = styled(AvatarIcon)`
  background-color: ${({ theme: { colors } }) => colors.white};
  color: ${({ theme: { colors } }) => colors.primary};
`;

const UserInfoContainer = styled.div`
  padding: ${getSpacing('spacing04')}px 0;
  margin: auto ${getSpacing('spacing03')}px 0 ${getSpacing('spacing03')}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme: { colors } }) => colors.hover};

  &:hover {
    cursor: pointer;
  }
`;

export default UserInfo;
