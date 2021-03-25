import { modalTypes } from "../constants";

export const getModalTitle = (modalType) => {
  switch (modalType) {
    case modalTypes.WIN:
      return "あなたが勝利しました！";
    case modalTypes.ALL_PEEK_FAILURE:
      return "手札を覗くのに失敗した！みんなの信用を失った。もう元に戻れない。";
    default:
      return "";
  }
};

export const getModalImageSrc = (modalType) => {
  switch (modalType) {
    case modalTypes.WIN:
      return "https://4.bp.blogspot.com/-I4PvvAj24Go/VcMlbxXHo4I/AAAAAAAAwcA/VKG__46VW_E/s800/pose_win_boy.png";
    case modalTypes.ALL_PEEK_FAILURE:
      return "https://3.bp.blogspot.com/-WrUFsJKa8tw/VcMlc9dhcwI/AAAAAAAAwcM/z_y_wCFeMcQ/s800/pose_zasetsu.png";
    default:
      return "";
  }
};
