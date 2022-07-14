import React, { ReactElement, useState } from 'react';
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import {
  BarChartOutlined,
  DashboardOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import styled from 'styled-components';
import Logo from './Logo';
import UserInfo from './UserInfo';
import { getPathLabel, routerPaths } from '../../router/routerPaths';

const { Sider } = Layout;

type MenuItemType = {
  to: string;
  key: string;
  label: string;
  icon: ReactElement;
};

const menuItems: MenuItemType[] = [
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
];

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const location = useLocation();

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
            isActive={to === location.pathname}
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
};

const StyledMenu = styled(Menu)`
  margin-top: 20px;
`;

const StyledMenuItem = styled(Menu.Item)<StyledMenuItemProps>`
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.hover : theme.colors.primary} !important;
`;

export default SideMenu;
