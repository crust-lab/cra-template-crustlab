import React from 'react';
import {Card, Col, Row} from 'antd';
import styled from 'styled-components';
import {Movie} from '../../../modules/movies/movies';

type Props = {
    movies: Array<Movie>
};

const MoviesList: React.FC<Props> = (props: Props) => (
    <Row gutter={16}>
        {props.movies.map(
            ({title, director, release_date, episode_id}) =>
                <Col span={6} key={`${release_date}`}>
                    <CardWrapper
                        title={title}
                        hoverable={true}
                        cover={<img src={`https://picsum.photos/id/9${episode_id}/200/300`} alt={`${title} - cover`} />}
                    >
                        {release_date}
                    </CardWrapper>
                </Col>)}
    </Row>
);

const CardWrapper = styled(Card)`
    margin-bottom: 1rem;
`;

export default MoviesList;
