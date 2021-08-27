import React, {useEffect} from 'react';
import {Spin} from 'antd';
import {useAppDispatch, useAppSelector} from '../../helpers/hooks';
import {getMovies, isLoading, selectMovies} from '../../modules/movies/slice';
import MoviesList from './components/MoviesList';


const Movies = () => {
    const movies = useAppSelector(selectMovies);
    const loading = useAppSelector(isLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    return (
        <Spin spinning={loading}>
            <MoviesList movies={movies}/>
        </Spin>
    );
};

export default Movies;
