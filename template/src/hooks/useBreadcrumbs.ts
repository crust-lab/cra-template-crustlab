import { useLocation } from 'react-router-dom';
import { getPathLabel, Paths } from '../router/paths';
import { useSelectedUserSelector } from '../store/users/slice';

export type BreadcrumbItem = {
  label: string;
  to: string;
};

const useBreadcrumbs = () => {
  const location = useLocation();
  const user = useSelectedUserSelector();
  const breadcrumbPaths = location.pathname.split('/').filter((path) => path);
  const breadcrumbUrls = breadcrumbPaths.reduce<Paths[]>(
    (prev, curr) => [...prev, `${prev.join('/')}/${curr}`] as Paths[],
    []
  );

  const breadcrumbItems: BreadcrumbItem[] = [
    {
      to: Paths.HOME,
      label: getPathLabel(Paths.HOME),
    },
  ];

  breadcrumbUrls.forEach((path, idx) =>
    breadcrumbItems.push({
      to: breadcrumbUrls[idx],
      label:
        user?.login?.uuid === path
          ? `${user.name.first} ${user.name.last}`
          : getPathLabel(path),
    })
  );

  return breadcrumbItems;
};

export default useBreadcrumbs;
