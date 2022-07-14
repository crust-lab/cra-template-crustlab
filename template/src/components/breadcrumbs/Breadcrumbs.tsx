import React from 'react';
import { Breadcrumb as CoreBreadcrumb } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useBreadcrumb from '../../hooks/useBreadcrumb';

const Breadcrumb = () => {
  const breadcrumbItems = useBreadcrumb();
  return (
    <StyledBreadcrumb>
      {breadcrumbItems.map(({ label, to }) => (
        <BreadcrumbItem key={to}>
          <Link to={to}>{label}</Link>
        </BreadcrumbItem>
      ))}
    </StyledBreadcrumb>
  );
};

const StyledBreadcrumb = styled(CoreBreadcrumb)`
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.background03};
`;

const BreadcrumbItem = styled(CoreBreadcrumb.Item)`
  a:hover {
    color: ${({ theme: { colors } }) => colors.hover} !important;
  }
`;

export default Breadcrumb;
