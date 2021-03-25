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
  Badge,
  Button,
} from "reactstrap";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { backSideImageSrc, cardSet } from "../data/card";
import { clone, shuffle, uniqBy } from "lodash";
import { assignCards, discardCards } from "../utils/card";
import { getNextPlayer, getNextPlayerId, getPlayerName } from "../utils/player";
import { modalTypes } from "../constants";
import { getModalImageSrc, getModalTitle } from "../utils/modal";

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
  const [youWon, setYouWon] = useState(false);

  const closeModal = () => {
    setModalType(undefined);
  };

  useEffect(() => {
    setTimeout(() => {
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

      // 自分のターンは自分でアクションさせる
      if (currentPlayerId === yourPlayerId) {
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
      if (winPlayerIds.includes(yourPlayerId) && youWon === false) {
        setYouWon(true);
        setModalType(modalTypes.WIN);
      }

      setCurrentPlayerId(nextPlayerId);
    }, 100);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPlayerId]);

  return (
    <Container>
      <Alert color="info" style={{ marginTop: "30px" }}>
        {getPlayerName(currentPlayerId, yourPlayerId)}のターンです。
        {currentPlayerId === yourPlayerId
          ? `${getPlayerName(
              getNextPlayerId(currentPlayerId, playerIds, winnerPlayerIds),
              yourPlayerId
            )}のカードを選んでください。`
          : ""}
      </Alert>
      {playerIds.map((playerId, index) => {
        return (
          <PlayerArea key={index}>
            <Row>
              <h3>
                {getPlayerName(playerId, yourPlayerId)}{" "}
                <Badge color="warning">
                  {winnerPlayerIds.includes(playerId) ? "勝利" : ""}
                </Badge>
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
                        if (
                          winPlayerIds.includes(yourPlayerId) &&
                          youWon === false
                        ) {
                          setYouWon(true);
                          setModalType(modalTypes.WIN);
                        }

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
      <Row style={{ marginTop: "50px", marginBottom: "30px" }}>
        <Col lg={6} style={{ marginBottom: "10px" }}>
          <Button style={{ width: "100%" }} color="warning">
            全員の全ての手札を除いてみる（成功率20%）
          </Button>
        </Col>
        <Col lg={6} style={{ marginBottom: "10px" }}>
          <Button style={{ width: "100%" }} color="warning">
            逃げる（成功率20%）
          </Button>
        </Col>
        <Col lg={6} style={{ marginBottom: "10px" }}>
          <Button style={{ width: "100%" }} color="danger">
            自分の手札のカードを1枚隠す（成功率10%）
          </Button>
        </Col>
        <Col lg={6} style={{ marginBottom: "10px" }}>
          <Button style={{ width: "100%" }} color="info">
            相手の手札を1枚だけ除いてみる（成功率80%）
          </Button>
        </Col>
        <Col lg={6} style={{ marginBottom: "10px" }}>
          <Button
            color="primary"
            style={{ width: "100%" }}
            onClick={() => {
              window.open("https://twitter.com/solt9029", { target: "_blank" });
            }}
          >
            おもむろにTwitterを眺める（成功率100%）
          </Button>
        </Col>
        <Col lg={6} style={{ marginBottom: "10px" }}>
          <Button style={{ width: "100%" }}>
            ババ抜きにトラウマがあることを打ち明けて解散する（成功率50%）
          </Button>
        </Col>
      </Row>
      <Modal toggle={closeModal} isOpen={modalType !== undefined}>
        <ModalHeader toggle={closeModal}>
          {getModalTitle(modalType)}
        </ModalHeader>
        <ModalBody>
          <img
            width="100%"
            src={getModalImageSrc(modalType)}
            alt={getModalImageSrc(modalType)}
          />
        </ModalBody>
      </Modal>
    </Container>
  );
}
