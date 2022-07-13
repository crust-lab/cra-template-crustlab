export type TAuthState = {
  accessToken: string | null;
  refreshToken: string | null;
};

export type TTokenReceivedPayload = {
  accessToken: string;
  refreshToken: string;
};
