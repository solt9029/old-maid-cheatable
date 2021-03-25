import { Card as RCard, CardImg, Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { backSideImageSrc, Card, initialCards } from "../data/card";
import { chunk, clone, filter, groupBy, shuffle } from "lodash";

const StyledCard = styled(RCard)`
  max-width: 100px;
  width: 90px;
  margin: 5px;
`;

const PlayerArea = styled.div`
  margin-top: 50px;
`;

const yourPlayerId = 0;
const playerIds = [yourPlayerId, 1, 2, 3];

const assignCards = (cards) => {
  let clonedCards = clone(cards);
  let playerIdIndex = Math.floor(Math.random() * playerIds.length);

  for (let i = 0; i < clonedCards.length; i++) {
    clonedCards[i].playerId = playerIdIndex;
    playerIdIndex++;
    if (playerIdIndex >= playerIds.length) {
      playerIdIndex = 0;
    }
  }

  return clonedCards;
};

const discardCards = (cards) => {
  let clonedCards = clone(cards);

  for (let fromIndex = 0; fromIndex < clonedCards.length - 1; fromIndex++) {
    if (clonedCards[fromIndex].isDiscarded === true) {
      continue;
    }

    for (let toIndex = fromIndex + 1; toIndex < clonedCards.length; toIndex++) {
      if (
        clonedCards[fromIndex].number === clonedCards[toIndex].number &&
        clonedCards[fromIndex].playerId === clonedCards[toIndex].playerId &&
        clonedCards[fromIndex].isDiscarded === false &&
        clonedCards[toIndex].isDiscarded === false
      ) {
        clonedCards[fromIndex].isDiscarded = true;
        clonedCards[toIndex].isDiscarded = true;
        break;
      }
    }
  }

  return clonedCards;
};

const initialCurrentPlayerId = Math.floor(Math.random() * 4);
const initialState = discardCards(assignCards(shuffle(initialCards)));

export default function GamePage() {
  const [currentPlayerId, setCurrentPlayerId] = useState(
    initialCurrentPlayerId
  );

  const [cards, setCards] = useState(initialState);

  useEffect(() => {
    setInterval(() => {}, 1000);
  }, []);

  return (
    <Container>
      {playerIds.map((playerId, index) => {
        return (
          <PlayerArea key={index}>
            <Row>
              <h3>
                {playerId === yourPlayerId ? "あなた" : `プレイヤー${playerId}`}
              </h3>
            </Row>
            <Row>
              {cards.map((card) => {
                if (card.playerId !== playerId || card.isDiscarded === true) {
                  return undefined;
                }
                return (
                  <Col lg={1} md={1} sm={1} xs={1}>
                    <StyledCard>
                      <CardImg
                        src={card.imageSrc}
                        alt={card.number.toString()}
                      />
                    </StyledCard>
                  </Col>
                );
              })}
            </Row>
          </PlayerArea>
        );
      })}
    </Container>
  );
}
