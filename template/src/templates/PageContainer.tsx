import React, { ReactElement, useMemo } from 'react';
import {
  BarChartOutlined,
  DashboardOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';
import useWindowSize from '../hooks/useWindowSize';
import { getPathLabel, routerPaths } from '../router/routerPaths';
import PageWithNavBar from './PageWithNavBar';
import PageWithSideMenu from './PageWithSideMenu';

export type MenuItemType = {
  to: string;
  key: string;
  label: string;
  icon: ReactElement;
};

const PageContainer = () => {
  const { i18n } = useTranslation();
  const { width } = useWindowSize();
  const theme = useTheme();

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

  return width > theme.breakpoints.md ? (
    <PageWithSideMenu menuItems={menuItems} />
  ) : (
    <PageWithNavBar menuItems={menuItems} />
  );
};

export default PageContainer;
