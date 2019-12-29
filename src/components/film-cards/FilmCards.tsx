import React from "react";
import { Card, Row, Col, Skeleton, Avatar } from "antd";
import Meta from "antd/lib/card/Meta";
import { Film } from "../../store/reducers/FilmsReducer";
import LoadingCards from "./LoadingCards";

interface FilmCardsProps {
  films: Film[];
  loading: boolean;
}
const FilmCards = (props: FilmCardsProps) => {
  const { films, loading } = props;
  const numberOfLoadingCards = 7;
  return (
    <div>
      <Row gutter={16}>
        {!loading ? (
          films.map(film => {
            const title = `Episode ${film.episode_id} - ${film.title}`;
            return (
              <Col span={8}>
                <Card title={title} bordered={true}>
                  Content here
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
