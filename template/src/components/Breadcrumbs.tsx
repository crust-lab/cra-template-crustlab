import React from 'react';
import { Breadcrumb as CoreBreadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useBreadcrumbs } from '../hooks';
import { getColor, getSpacing } from '../theme/styleUtils';

const Breadcrumbs = () => {
  const breadcrumbItems = useBreadcrumbs();
  return (
    <StyledBreadcrumbs>
      {breadcrumbItems.map(({ label, to }) => (
        <BreadcrumbItem key={to}>
          <Link to={to}>{label}</Link>
        </BreadcrumbItem>
      ))}
    </StyledBreadcrumbs>
  );
};

const StyledBreadcrumbs = styled(CoreBreadcrumb)`
  padding-bottom: ${getSpacing('spacing24')}px;
`;

const BreadcrumbItem = styled(CoreBreadcrumb.Item)`
  a:hover {
    color: ${getColor('primaryHover')} !important;
  }
`;

export default Breadcrumbs;
