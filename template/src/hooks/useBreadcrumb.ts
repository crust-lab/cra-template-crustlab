import { useLocation } from 'react-router-dom';
import { getPathLabel, routerPaths } from '../router/routerPaths';
import { getSelectedUser } from '../store/reducers/users/usersSlice';
import { useAppSelector } from './reduxHooks';

export type BreadcrumbItemType = {
  label: string;
  to?: string;
};

const useBreadcrumb = () => {
  const location = useLocation();
  const user = useAppSelector(getSelectedUser);
  const breadcrumbPaths = location.pathname.split('/').filter((path) => path);
  const breadcrumbUrls = breadcrumbPaths.reduce<string[]>(
    (prev, curr) => [...prev, `${prev.join('/')}/${curr}`],
    []
  );

  const breadcrumbItems = [
    {
      to: routerPaths.home,
      label: getPathLabel(routerPaths.home),
    },
  ];

  breadcrumbPaths.forEach((path, idx) =>
    breadcrumbItems.push({
      to: breadcrumbUrls[idx],
      label:
        user?.login?.uuid === path
          ? `${user.name.first} ${user.name.last}`
          : getPathLabel(`/${path}`),
    })
  );

  return breadcrumbItems;
};

export default useBreadcrumb;
