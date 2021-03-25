import { modalTypes } from "../constants";
import { backSideImageSrc } from "../data/card";

export const getModalTitle = (modalType) => {
  switch (modalType) {
    case modalTypes.WIN:
      return "あなたが勝利しました！";
    default:
      return "タイトル";
  }
};

export const getModalImageSrc = (modalType) => {
  switch (modalType) {
    case modalTypes.WIN:
      return "https://4.bp.blogspot.com/-I4PvvAj24Go/VcMlbxXHo4I/AAAAAAAAwcA/VKG__46VW_E/s800/pose_win_boy.png";
    default:
      return backSideImageSrc;
  }
};
