import React from 'react';
import { Avatar as AvatarIcon } from 'antd';
import { Dropdown } from 'antd';
import styled from 'styled-components';
import { getColor } from '../../theme/styleUtils';
import { UserMenu } from '../sideMenu/UserMenu';

const Avatar = () => {
  return (
    <Dropdown overlay={<UserMenu />} trigger={['click']} placement="top">
      <StyledAvatarIcon>A</StyledAvatarIcon>
    </Dropdown>
  );
};

const StyledAvatarIcon = styled(AvatarIcon)`
  background-color: ${getColor('primary')};
  color: ${getColor('text01')};
`;

export default Avatar;
