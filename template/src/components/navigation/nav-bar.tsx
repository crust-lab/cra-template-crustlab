import { routerPaths } from '../../router/router-paths';
import NavLink, { NavLinkProps } from '../../components/navigation/nav-link';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const NavBar = () => {
  const { t } = useTranslation();

  const navLinks: NavLinkProps[] = [
    {
      label: t('navigation.home'),
      to: routerPaths.home,
    },
  ];

  return (
    <NavContainer>
      {navLinks.map((link) => (
        <NavLink key={link.label} {...link} />
      ))}
    </NavContainer>
  );
};

const NavContainer = styled.div`
  margin: 12px 0;
`;

export default NavBar;
