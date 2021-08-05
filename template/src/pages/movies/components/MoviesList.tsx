import React from 'react';
import {Card, Col, Row} from 'antd';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import {Movie, select} from '../../../modules/movies/slice';
import {RootState} from '../../../store';


type Props = {
    movies: Array<Movie>
};

const MoviesList: React.FC<Props> = (props: Props) => {
    const selectedEpisodeId = useSelector((state: RootState) => state.movies.selected);
    const dispatch = useDispatch();

    return (
        <Row gutter={16}>
            {props.movies.map(
                ({title, director, release_date, episode_id}) =>
                    <Col span={6} key={`${release_date}`}>
                        <CardWrapper
                            onClick={() => dispatch(select(episode_id))}
                            title={title}
                            bordered={episode_id === selectedEpisodeId}
                            hoverable={true}
                            cover={<img src={`https://picsum.photos/id/9${episode_id}/200/300`} alt={`${title} - cover`}/>}
                        >
                            {release_date}
                        </CardWrapper>
                    </Col>)}
        </Row>
    );
};

const CardWrapper = styled(Card)`
    margin-bottom: 1rem;
    border-color: ${props => props.theme.color.accent};
`;

export default MoviesList;
