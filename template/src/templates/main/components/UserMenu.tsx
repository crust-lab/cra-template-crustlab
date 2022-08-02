import React from 'react';
import { Menu } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AuthPaths } from '../../../router/paths';
import { logout } from '../../../store/auth/slice';
import { useAppDispatch } from '../../../store/hooks';

export const UserMenu = () => {
  const history = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history(AuthPaths.LOGIN);
  };
  const { t } = useTranslation();

  const items: ItemType[] = [
    {
      key: AuthPaths.LOGIN,
      label: t('templates.main.components.userMenu.logout'),
      onClick: handleLogout,
    },
  ];

  return <Menu items={items}></Menu>;
};
