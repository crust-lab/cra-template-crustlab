import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { MenuItemType } from '../../templates/PageContainer';
import { getSpacing } from '../../theme/styleUtils';
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
      <StyledMenu>
        {menuItems.map(({ to, key, label, icon }) => (
          <StyledMenuItem
            collapsed={collapsed}
            isActive={
              to === '/'
                ? location.pathname === to
                : location.pathname.includes(to)
            }
            key={key}
            icon={icon}
          >
            <NavLink to={to}>{label}</NavLink>
          </StyledMenuItem>
        ))}
      </StyledMenu>
      <UserInfo hideUserName={collapsed} />
    </Sider>
  );
};

type StyledMenuItemProps = {
  isActive: boolean;
  collapsed: boolean;
};

const StyledMenu = styled(Menu)`
  margin-top: ${getSpacing('spacing24')}px;
`;

const StyledMenuItem = styled(Menu.Item)<StyledMenuItemProps>`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.primaryHover : theme.colors.primary} !important;
  a,
  svg {
    font-weight: ${({ isActive }) => (isActive ? '900' : '400')} !important;
    color: ${({ isActive, theme }) =>
      isActive ? theme.colors.text01 : theme.colors.textHover} !important;
  }
  svg {
    height: ${({ collapsed, isActive, theme: { spacing } }) =>
      isActive && !collapsed
        ? spacing.spacing24
        : spacing.spacing16 + spacing.spacing4}px !important;
    width: ${({ collapsed, isActive, theme: { spacing } }) =>
      isActive && !collapsed
        ? spacing.spacing24
        : spacing.spacing16 + spacing.spacing4}px !important;
  }
`;

export default SideMenu;
