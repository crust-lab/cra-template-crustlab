import React from 'react';
import { Breadcrumb as CoreBreadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useBreadcrumb from '../../hooks/useBreadcrumb';
import { getColor, getSpacing } from '../../theme/styleUtils';

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
  padding-bottom: ${getSpacing('spacing24')}px;
  border-bottom: 1px solid ${getColor('primaryHover')};
`;

const BreadcrumbItem = styled(CoreBreadcrumb.Item)`
  a:hover {
    color: ${getColor('primaryHover')} !important;
  }
`;

export default Breadcrumb;
