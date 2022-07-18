import React, { ReactElement, useState } from 'react';
import {
  BarChartOutlined,
  DashboardOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import styled, { useTheme } from 'styled-components';
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
  const theme = useTheme();

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <Logo hideHeader={collapsed} />
      <StyledMenu>
        {menuItems.map(({ to, key, label, icon }) => (
          <Menu.Item
            style={{
              backgroundColor:
                to === location.pathname
                  ? theme.colors.hover
                  : theme.colors.primary,
            }}
            key={key}
            icon={icon}
          >
            <NavLink to={to}>{label}</NavLink>
          </Menu.Item>
        ))}
      </StyledMenu>
      <UserInfo hideUserName={collapsed} />
    </Sider>
  );
};

const StyledMenu = styled(Menu)`
  margin-top: ${getSpacing('spacing05')}px;
`;

export default SideMenu;
