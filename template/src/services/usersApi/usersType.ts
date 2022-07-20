export type UserName = {
  first: string;
  last: string;
  title: string;
};

export type UserPicture = {
  medium: string;
  thumbnail: string;
};

type Street = {
  number: number;
  name: string;
};

export type UserLoaction = {
  city: string;
  country: string;
  state: string;
  street: Street;
  postcode: number;
};

export type UserLogin = {
  uuid: string;
};

export type User = {
  login: UserLogin;
  email: string;
  picture: UserPicture;
  name: UserName;
  phone: string;
  location: UserLoaction;
};

type PaginationResponse<ResultType> = {
  info: {
    results: number;
    page: number;
    seed: string;
  };
  results: ResultType[];
};

export type UsersResponse = PaginationResponse<User>;

export type GetUsersRequest = { page: number; pageSize: number };
