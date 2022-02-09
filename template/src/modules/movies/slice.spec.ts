import { store } from "../../store";
import nock from "nock";
import moviesReducer, { getMovies, select, selectMovies } from "./slice";
import MOCKED_RESPONSE from "./mockData.json";

const mockedDispatch = (selector: Function) => selector(store.getState());
const invokeThunkAction = (thunkAction: Function) =>
  thunkAction(store.dispatch, store.getState, undefined);

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
    const movieId = 0;
    store.dispatch(select(movieId));
    const selectedMovieId = store.getState().movies.selected;
    expect(selectedMovieId).toEqual(movieId);
  });
});
