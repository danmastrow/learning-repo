import React from 'react';
import { Card, Row, Col } from 'antd';
import { Film } from '../../store/reducers/FilmsReducer';
import LoadingCards from './LoadingCards';

interface FilmCardsProps {
  films: Film[];
  loading: boolean;
}

function toStarWarsRomanNumeral(input: number): string {
  switch (input) {
    case 1:
      return 'I';
    case 2:
      return 'II';
    case 3:
      return 'III';
    case 4:
      return 'IV';
    case 5:
      return 'V';
    case 6:
      return 'VI';
    case 7:
      return 'VII';
    case 8:
      return 'VIII';
    case 9:
      return 'IX';
    default:
      return input.toString();
  }
}

const FilmCards = (props: FilmCardsProps) => {
  const { films, loading } = props;
  const numberOfLoadingCards = 7;
  return (
    <div>
      <Row gutter={16}>
        {!loading ? (
          films.map(film => {
            const title = `Episode ${toStarWarsRomanNumeral(
              film.episode_id
            )} - ${film.title}`;
            return (
              <Col span={8}>
                <Card title={title} bordered={true}>
                  {film.opening_crawl}
                </Card>
              </Col>
            );
          })
        ) : (
          <LoadingCards numberOfCards={numberOfLoadingCards} />
        )}
      </Row>
    </div>
  );
};
export default FilmCards;
