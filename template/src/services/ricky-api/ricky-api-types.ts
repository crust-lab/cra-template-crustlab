type PaginationResponse<ResultType> = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ResultType[];
};

type Characters = {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};

export type CharactersResponse = PaginationResponse<Characters>;
