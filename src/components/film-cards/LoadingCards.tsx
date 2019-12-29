import React from "react";
import { Col, Skeleton, Avatar } from "antd";
import Meta from "antd/lib/card/Meta";

interface FilmCardsProps {
  numberOfCards: number;
}
const LoadingCards = (props: FilmCardsProps) => {
  let loadingCards = [];
  for (let index = 0; index < props.numberOfCards; index++) {
    const element = (
      <Col span={8}>
        <Skeleton loading={true} avatar active>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Col>
    );
    loadingCards.push(element);
  }
  return <div>{loadingCards}</div>;
};
export default LoadingCards;
