import React from 'react';
import { TabBar } from 'antd-mobile';
import { useLocation, useNavigate } from 'react-router-dom';
import { MenuItemType } from '../../templates/PageContainer';

interface NavbarProps {
  menuItems: MenuItemType[];
}

const Navbar = ({ menuItems }: NavbarProps) => {
  const { pathname } = useLocation();
  const history = useNavigate();

  const setRouteActive = (value: string) => {
    history(value);
  };

  return (
    <TabBar activeKey={pathname} onChange={setRouteActive}>
      {menuItems.map(({ to, label, icon }) => (
        <TabBar.Item key={to} title={label} icon={icon} />
      ))}
    </TabBar>
  );
};

export default Navbar;
