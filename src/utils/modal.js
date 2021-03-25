import { modalTypes } from "../constants";

export const getModalTitle = (modalType) => {
  switch (modalType) {
    case modalTypes.WIN:
      return "あなたは勝利しました！";
    case modalTypes.LOSE:
      return "あなたは最下位になりました。";
    case modalTypes.ALL_PEEK_SUCCESS:
      return "手札を覗くのに成功した！いえーい！";
    case modalTypes.ALL_PEEK_FAILURE:
      return "手札を覗くのに失敗した！みんなの信用を失った。もう元に戻れない。";
    case modalTypes.ONE_PEEK_SUCCESS:
      return "手札を覗くのに成功した！";
    case modalTypes.ONE_PEEK_FAILURE:
      return "手札を覗くのに失敗した！";
    default:
      return "";
  }
};

export const getModalImageSrc = (modalType) => {
  switch (modalType) {
    case modalTypes.WIN:
      return "https://4.bp.blogspot.com/-I4PvvAj24Go/VcMlbxXHo4I/AAAAAAAAwcA/VKG__46VW_E/s800/pose_win_boy.png";
    case modalTypes.LOSE:
      return "https://4.bp.blogspot.com/-ghnZ3is3Kuw/VcMlbOZ1C-I/AAAAAAAAwbs/AYCFlOMb1T4/s800/pose_lose_boy.png";
    case modalTypes.ALL_PEEK_SUCCESS:
      return "https://2.bp.blogspot.com/-_j6Tp0wiZPs/VpjBuBCOXpI/AAAAAAAA278/cU3vl2a3yXE/s800/nozokimi_man.png";
    case modalTypes.ALL_PEEK_FAILURE:
      return "https://3.bp.blogspot.com/-WrUFsJKa8tw/VcMlc9dhcwI/AAAAAAAAwcM/z_y_wCFeMcQ/s800/pose_zasetsu.png";
    case modalTypes.ONE_PEEK_SUCCESS:
      return "https://4.bp.blogspot.com/-N0XazVvKMoo/W8mrLVoQbcI/AAAAAAABPkA/EOHZzrT3W8M2f8EGwdUprrffx5Ca7nj_ACLcBGAs/s800/sougankyou_nozoku_boy.png";
    case modalTypes.ONE_PEEK_FAILURE:
      return "https://3.bp.blogspot.com/-WrUFsJKa8tw/VcMlc9dhcwI/AAAAAAAAwcM/z_y_wCFeMcQ/s800/pose_zasetsu.png";
    default:
      return "";
  }
};
