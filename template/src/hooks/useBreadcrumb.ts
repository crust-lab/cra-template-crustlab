import { useLocation } from 'react-router-dom';
import { getPathLabel, routerPaths } from '../router/routerPaths';

export type BreadcrumbItemType = {
  label: string;
  to: string;
};

const useBreadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path);
  const breadcrumbItems = [
    {
      to: routerPaths.home,
      label: getPathLabel(routerPaths.home),
    },
  ];

  paths.forEach((path) =>
    breadcrumbItems.push({ to: `/${path}`, label: getPathLabel(`/${path}`) })
  );
  return breadcrumbItems;
};

export default useBreadcrumb;
