export type LoginRequest = { email: string; password: string };

export type LoginResponse = {
  access: string;
  refresh: string;
};

export type QueryExtraOptions = {
  showError?: boolean;
};
