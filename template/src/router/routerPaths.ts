import i18next from '../translations/i18n';

const { t } = i18next;

export const routerPaths = {
  home: '/',
  users: '/users',
  dashboard: '/dashboard',
  overview: '/overview',
  tasks: '/tasks',
  protected: '/protected',
  wildCard: '*',
};

export const routerAuthPaths = {
  login: '/auth/login',
};

export const pathToLabelMap = {
  [routerPaths.home]: t('routerPathsLabel.home'),
  [routerPaths.users]: t('routerPathsLabel.users'),
  [routerPaths.dashboard]: t('routerPathsLabel.dashboard'),
  [routerPaths.overview]: t('routerPathsLabel.overview'),
  [routerPaths.tasks]: t('routerPathsLabel.tasks'),
};

export const getPathLabel = (path: string) => pathToLabelMap[path];
