import { store } from "../../store";
import nock from "nock";
import moviesReducer, { getMovies, select, selectMovies } from "./slice";

const mockedDispatch = (selector: Function) => selector(store.getState());
const invokeThunkAction = (thunkAction: Function) =>
  thunkAction(store.dispatch, store.getState, undefined);

const MOCKED_RESPONSE = {
  count: 1,
  next: null,
  previous: null,
  results: [
    {
      title: "A New Hope",
      episode_id: 4,
      opening_crawl:
        "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
      director: "George Lucas",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      characters: [
        "https://swapi.dev/api/people/1/",
        "https://swapi.dev/api/people/2/",
      ],
      planets: [
        "https://swapi.dev/api/planets/1/",
        "https://swapi.dev/api/planets/2/",
      ],
      starships: [
        "https://swapi.dev/api/starships/2/",
        "https://swapi.dev/api/starships/3/",
      ],
      vehicles: [
        "https://swapi.dev/api/vehicles/4/",
        "https://swapi.dev/api/vehicles/6/",
      ],
      species: [
        "https://swapi.dev/api/species/1/",
        "https://swapi.dev/api/species/2/",
      ],
      created: "2014-12-10T14:23:31.880000Z",
      edited: "2014-12-20T19:49:45.256000Z",
      url: "https://swapi.dev/api/films/1/",
    },
  ],
};

describe("movies modules", () => {
  it("should handle initial state", () => {
    expect(moviesReducer(undefined, { type: "unknown" })).toEqual({
      loading: true,
      selected: null,
      movies: [],
    });
  });

  it("should save movies to store", async () => {
    nock("https://swapi.dev")
      .defaultReplyHeaders({ "access-control-allow-origin": "*" })
      .get("/api/films")
      .reply(200, MOCKED_RESPONSE);

    await invokeThunkAction(getMovies());
    const movies = mockedDispatch(selectMovies);
    expect(movies).toEqual(MOCKED_RESPONSE.results);
  });

  it("should select correct movie", async () => {
    const movie = 0;
    store.dispatch(select(movie));
    const selected = store.getState().movies.selected;
    expect(selected).toEqual(movie);
  });
});
