import i18next from '../translations/i18n';

const { t } = i18next;

export enum Paths {
  HOME = '/',
  USERS = '/users',
  DASHBOARD = '/dashboard',
  OVERVIEW = '/overview',
  TASKS = '/tasks',
  WILDCARD = '*',
}

export enum AuthPaths {
  LOGIN = '/login',
}

export const getPathLabel = (path: Paths) => {
  const pathToLabelMap = {
    [Paths.HOME]: t('router.paths.home'),
    [Paths.USERS]: t('router.paths.users'),
    [Paths.DASHBOARD]: t('router.paths.dashboard'),
    [Paths.OVERVIEW]: t('router.paths.overview'),
    [Paths.TASKS]: t('router.paths.tasks'),
    [Paths.WILDCARD]: t('router.paths.wildcard'),
  };
  return pathToLabelMap[path];
};
