export const getNextPlayerId = (
  currentPlayerId,
  playerIds,
  winnerPlayerIds
) => {
  // プレイ中の人が残り1人の場合はundefinedにする
  if (winnerPlayerIds.length > playerIds.length - 2) {
    return undefined;
  }

  let nextPlayerId = currentPlayerId;

  while (
    winnerPlayerIds.includes(nextPlayerId) === true ||
    nextPlayerId === currentPlayerId
  ) {
    nextPlayerId = nextPlayerId + 1;
    if (nextPlayerId > 3) {
      nextPlayerId = 0;
    }
  }

  return nextPlayerId;
};

export const getPlayerName = (playerId, yourPlayerId) => {
  return playerId === yourPlayerId ? "あなた" : `プレイヤー${playerId}`;
};
