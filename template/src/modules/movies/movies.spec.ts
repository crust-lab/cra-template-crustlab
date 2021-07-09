import moviesReducer from './movies';

describe('movies modules', () => {
    const movie = {
        title: 'Dr. No',
        director: 'Terence Young',
        release_date: '1962-10-05',
        episode_id: 1
    };

    it('should handle initial state', () => {
        expect(moviesReducer(undefined, { type: 'unknown' })).toEqual({
            loading: true,
            selected: null,
            movies: []
        })
    });
});