import React from 'react';
import {
  NavLink as BaseNavLink,
  NavLinkProps as BaseNavLinkProps,
} from 'react-router-dom';
import styled from 'styled-components';

export type NavLinkProps = {
  label: string;
} & BaseNavLinkProps;

const NavLink = ({ label, to, ...rest }: NavLinkProps) => (
  <StyledNavLink to={to} {...rest}>
    {({ isActive }) =>
      isActive ? (
        <ActiveLink>{label}</ActiveLink>
      ) : (
        <InactiveLink>{label}</InactiveLink>
      )
    }
  </StyledNavLink>
);

export default NavLink;

const StyledNavLink = styled(BaseNavLink)`
  padding: 8px;
  margin: 4px;
  background-color: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.gray};
`;

const ActiveLink = styled.span`
  color: ${({ theme: { colors } }) => colors.blue};
`;

const InactiveLink = styled.span`
  color: ${({ theme: { colors } }) => colors.black};
`;
