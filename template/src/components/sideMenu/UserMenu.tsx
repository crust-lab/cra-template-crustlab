import React from 'react';
import { Menu } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../helpers/hooks';
import { logout } from '../../store/reducers/auth/authSlice';

export const UserMenu = () => {
  const history = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history('/auth/login');
  };
  const { t } = useTranslation();

  return (
    <Menu>
      <Menu.Item key="" onClick={handleLogout}>
        {t('auth.logout')}
      </Menu.Item>
    </Menu>
  );
};
