import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MenuItemType } from '../..';
import { getSpacing } from '../../../../theme/styleUtils';
import Logo from './Logo';
import UserInfo from './UserInfo';

const { Sider } = Layout;

interface SideMenuProps {
  menuItems: MenuItemType[];
}

const SideMenu = ({ menuItems }: SideMenuProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const location = useLocation();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="xl"
    >
      <Logo hideHeader={collapsed} />
      <StyledMenu items={menuItems} selectedKeys={[location.pathname]} />
      <UserInfo hideUserName={collapsed} />
    </Sider>
  );
};

const StyledMenu = styled(Menu)`
  margin-top: ${getSpacing('spacing24')}px;
`;

export default SideMenu;
