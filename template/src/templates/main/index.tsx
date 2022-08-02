import React, { ReactElement, useMemo } from 'react';
import {
  BarChartOutlined,
  DashboardOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import useWindowSize from '../../hooks/useWindowSize';
import { getPathLabel, Paths } from '../../router/paths';
import DesktopMain from './Main.desktop';
import MobileMain from './Main.mobile';

export type MenuItemType = {
  onClick: () => void;
  key: string;
  label: string;
  icon: ReactElement;
};

const PageContainer = () => {
  const { i18n } = useTranslation();
  const { width } = useWindowSize();
  const history = useNavigate();
  const theme = useTheme();

  const menuItems: MenuItemType[] = useMemo(
    () => [
      {
        onClick: () => history(Paths.HOME),
        key: Paths.HOME,
        label: getPathLabel(Paths.HOME),
        icon: <HomeOutlined />,
      },
      {
        onClick: () => history(Paths.USERS),
        key: Paths.USERS,
        label: getPathLabel(Paths.USERS),
        icon: <UsergroupDeleteOutlined />,
      },
      {
        onClick: () => history(Paths.DASHBOARD),
        key: Paths.DASHBOARD,
        label: getPathLabel(Paths.DASHBOARD),
        icon: <DashboardOutlined />,
      },
      {
        onClick: () => history(Paths.OVERVIEW),
        key: Paths.OVERVIEW,
        label: getPathLabel(Paths.OVERVIEW),
        icon: <BarChartOutlined />,
      },
      {
        onClick: () => history(Paths.TASKS),
        key: Paths.TASKS,
        label: getPathLabel(Paths.TASKS),
        icon: <UnorderedListOutlined />,
      },
    ],
    [i18n.language]
  );

  return width > theme.breakpoints.md ? (
    <DesktopMain menuItems={menuItems} />
  ) : (
    <MobileMain menuItems={menuItems} />
  );
};

export default PageContainer;
