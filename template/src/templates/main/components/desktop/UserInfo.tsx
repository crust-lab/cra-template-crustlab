import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Avatar as AvatarIcon, Dropdown } from 'antd';
import styled from 'styled-components';
import { getColor, getSpacing } from '../../../../theme/styleUtils';
import { UserMenu } from '../UserMenu';

interface UserInfoProps {
  hideUserName?: boolean;
}

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
  color: ${getColor('text01')};
  margin: 0 ${getSpacing('spacing16')}px;
`;

const Avatar = styled(AvatarIcon)`
  background-color: ${getColor('primaryBackground')};
  color: ${getColor('primary')};
`;

const UserInfoContainer = styled.div`
  padding: ${getSpacing('spacing16')}px 0;
  margin: auto ${getSpacing('spacing8')}px 0 ${getSpacing('spacing8')}px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${getColor('primaryAccent')};

  &:hover {
    cursor: pointer;
  }
`;

export default UserInfo;
