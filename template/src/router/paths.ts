import i18next from '../translations/i18n';

const { t } = i18next;

export enum Paths {
  HOME = '/',
  USERS = '/users',
  DASHBOARD = '/dashboard',
  OVERVIEW = '/overview',
  TASKS = '/tasks',
  PROTECTED = '/protected',
  WILDCARD = '*',
}

export enum AuthPaths {
  LOGIN = '/login',
}

export const getPathLabel = (path: Paths) => {
  const pathToLabelMap = {
    [Paths.HOME]: t('routerPathsLabel.home'),
    [Paths.USERS]: t('routerPathsLabel.users'),
    [Paths.DASHBOARD]: t('routerPathsLabel.dashboard'),
    [Paths.OVERVIEW]: t('routerPathsLabel.overview'),
    [Paths.TASKS]: t('routerPathsLabel.tasks'),
    [Paths.PROTECTED]: t('routerPathsLabel.protected'),
    [Paths.WILDCARD]: t('routerPathsLabel.wildcard'),
  };
  return pathToLabelMap[path];
};
