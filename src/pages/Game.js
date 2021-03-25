import {
  Card as RCard,
  CardImg,
  Col,
  Container,
  Row,
  Alert,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { backSideImageSrc, cardSet } from "../data/card";
import { clone, shuffle, uniqBy } from "lodash";
import { assignCards, discardCards } from "../utils/card";
import { getNextPlayer, getNextPlayerId, getPlayerName } from "../utils/player";

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

const initialCurrentPlayerId = Math.floor(Math.random() * 4);
const initialCards = discardCards(assignCards(shuffle(cardSet), playerIds));

export default function GamePage() {
  const [currentPlayerId, setCurrentPlayerId] = useState(
    initialCurrentPlayerId
  );
  const [winnerPlayerIds, setWinnerPlayerIds] = useState([]);
  const [cards, setCards] = useState(initialCards);
  const [modalType, setModalType] = useState(undefined);

  const closeModal = () => {
    setModalType(undefined);
  };

  useEffect(() => {
    setTimeout(() => {
      // 自分のターンは自分でアクションさせる
      if (currentPlayerId === yourPlayerId) {
        return;
      }

      // プレイ中の人が1人のみになったら、次のプレイヤーはいないため終了
      const nextPlayerId = getNextPlayerId(
        currentPlayerId,
        playerIds,
        winnerPlayerIds
      );
      if (nextPlayerId === undefined) {
        return;
      }

      // 次のプレイヤーとして設定されていたけど、カードが引かれて終了したプレイヤーがCurrentPlayerだった場合には、次のプレイヤーに渡す
      if (winnerPlayerIds.includes(currentPlayerId)) {
        setCurrentPlayerId(nextPlayerId);
        return;
      }

      let clonedCards = clone(cards);

      // カードを渡す処理
      for (let i = 0; i < clonedCards.length; i++) {
        if (
          clonedCards[i].playerId === nextPlayerId &&
          clonedCards[i].isDiscarded === false
        ) {
          clonedCards[i].playerId = currentPlayerId;
          break;
        }
      }

      // カードを捨てる処理
      const processedCards = shuffle(discardCards(clonedCards));

      // 勝者決定ロジック
      const cardPlayerIds = processedCards.map((card) => {
        if (card.isDiscarded) {
          return undefined;
        }
        return card.playerId;
      });
      const uniqCardPlayerIds = uniqBy(
        cardPlayerIds,
        (cardPlayerId) => cardPlayerId
      );
      let winPlayerIds = [];
      for (let i = 0; i < 4; i++) {
        if (!uniqCardPlayerIds.includes(i)) {
          winPlayerIds.push(i);
        }
      }

      // 最後にセット
      setCards(processedCards);
      setWinnerPlayerIds(winPlayerIds);
      setCurrentPlayerId(nextPlayerId);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayerId]);

  return (
    <Container>
      <Alert color="info" style={{ marginTop: "30px" }}>
        {getPlayerName(currentPlayerId, yourPlayerId)}のターンです
      </Alert>
      {playerIds.map((playerId, index) => {
        return (
          <PlayerArea key={index}>
            <Row>
              <h3>
                {getPlayerName(playerId, yourPlayerId)}
                {winnerPlayerIds.includes(playerId) ? "勝利!" : ""}
              </h3>
            </Row>
            <Row>
              {cards.map((card) => {
                if (card.playerId !== playerId || card.isDiscarded === true) {
                  return undefined;
                }
                return (
                  <Col lg={1} md={1} sm={1} xs={1}>
                    <StyledCard
                      onClick={() => {
                        const nextPlayerId = getNextPlayerId(
                          currentPlayerId,
                          playerIds,
                          winnerPlayerIds
                        );
                        if (
                          currentPlayerId !== yourPlayerId ||
                          card.playerId !== nextPlayerId ||
                          winnerPlayerIds.includes(yourPlayerId)
                        ) {
                          return;
                        }

                        let clonedCards = clone(cards);

                        // カードを渡す処理
                        for (let i = 0; i < clonedCards.length; i++) {
                          if (
                            clonedCards[i].playerId === nextPlayerId &&
                            clonedCards[i].isDiscarded === false &&
                            clonedCards[i].imageSrc === card.imageSrc
                          ) {
                            clonedCards[i].playerId = currentPlayerId;
                            break;
                          }
                        }

                        // カードを捨てる処理
                        const processedCards = shuffle(
                          discardCards(clonedCards)
                        );

                        // 勝者決定ロジック
                        const cardPlayerIds = processedCards.map((card) => {
                          if (card.isDiscarded) {
                            return undefined;
                          }
                          return card.playerId;
                        });
                        const uniqCardPlayerIds = uniqBy(
                          cardPlayerIds,
                          (cardPlayerId) => cardPlayerId
                        );
                        let winPlayerIds = [];
                        for (let i = 0; i < 4; i++) {
                          if (!uniqCardPlayerIds.includes(i)) {
                            winPlayerIds.push(i);
                          }
                        }

                        setCards(processedCards);
                        setWinnerPlayerIds(winPlayerIds);
                        setCurrentPlayerId(nextPlayerId);
                      }}
                    >
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
      <Modal toggle={closeModal} isOpen={modalType !== undefined}>
        <ModalHeader toggle={closeModal}>タイトル</ModalHeader>
        <ModalBody>
          <img src="https://4.bp.blogspot.com/-A_98ygeh-hs/WRLiKxndvtI/AAAAAAABEKo/qNM7t47lNCw4Sq0hEwJH5xhUaN8lnJf5gCLcB/s400/card_back.png" />
        </ModalBody>
      </Modal>
    </Container>
  );
}
