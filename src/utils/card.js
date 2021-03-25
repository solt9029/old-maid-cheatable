import { clone } from "lodash";

export const assignCards = (cards, playerIds) => {
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

export const discardCards = (cards) => {
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
