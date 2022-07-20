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
import { getPathLabel, routerPaths } from '../../router/routerPaths';
import { getSpacing } from '../../theme/styleUtils';
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
        to: routerPaths.home,
        key: routerPaths.home,
        label: getPathLabel(routerPaths.home),
        icon: <HomeOutlined />,
      },
      {
        to: routerPaths.users,
        key: routerPaths.users,
        label: getPathLabel(routerPaths.users),
        icon: <UsergroupDeleteOutlined />,
      },
      {
        to: routerPaths.dashboard,
        key: routerPaths.dashboard,
        label: getPathLabel(routerPaths.dashboard),
        icon: <DashboardOutlined />,
      },
      {
        to: routerPaths.overview,
        key: routerPaths.overview,
        label: getPathLabel(routerPaths.overview),
        icon: <BarChartOutlined />,
      },
      {
        to: routerPaths.tasks,
        key: routerPaths.tasks,
        label: getPathLabel(routerPaths.tasks),
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
