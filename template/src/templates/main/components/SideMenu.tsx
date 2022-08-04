import React, { ReactElement, useMemo, useState } from 'react';
import {
  BarChartOutlined,
  DashboardOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getPathLabel, Paths } from '../../../router/paths';
import { getSpacing } from '../../../theme/styleUtils';
import Logo from './Logo';
import UserInfo from './UserInfo';

const { Sider } = Layout;

type MenuItemType = {
  to: string;
  key: string;
  label: string;
  icon: ReactElement;
};

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const location = useLocation();
  const { i18n } = useTranslation();

  const menuItems: MenuItemType[] = useMemo(
    () => [
      {
        to: Paths.HOME,
        key: Paths.HOME,
        label: getPathLabel(Paths.HOME),
        icon: <HomeOutlined />,
      },
      {
        to: Paths.USERS,
        key: Paths.USERS,
        label: getPathLabel(Paths.USERS),
        icon: <UsergroupDeleteOutlined />,
      },
      {
        to: Paths.DASHBOARD,
        key: Paths.DASHBOARD,
        label: getPathLabel(Paths.DASHBOARD),
        icon: <DashboardOutlined />,
      },
      {
        to: Paths.OVERVIEW,
        key: Paths.OVERVIEW,
        label: getPathLabel(Paths.OVERVIEW),
        icon: <BarChartOutlined />,
      },
      {
        to: Paths.TASKS,
        key: Paths.TASKS,
        label: getPathLabel(Paths.TASKS),
        icon: <UnorderedListOutlined />,
      },
    ],
    [i18n.language]
  );

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Logo hideHeader={collapsed} />
      <StyledMenu>
        {menuItems.map(({ to, key, label, icon }) => (
          <StyledMenuItem
            collapsed={collapsed.toString()}
            isActive={
              to === Paths.HOME
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
  collapsed: string;
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
