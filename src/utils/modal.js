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
      return "手札を覗くのに失敗した！みんなの信用を失った。もう誰も味方はいない。";
    case modalTypes.ONE_PEEK_SUCCESS:
      return "手札を1枚覗くのに成功した！";
    case modalTypes.ONE_PEEK_FAILURE:
      return "手札を1枚覗くのに失敗した！";
    case modalTypes.HIDE_SUCCESS:
      return "手札を1枚隠すのに成功した！";
    case modalTypes.HIDE_FAILURE:
      return "手札を1枚隠すのに失敗した！みんな怒っている。";
    case modalTypes.ESCAPE_FAILURE:
      return "にげられない！なぜか自分の負けということにされた。";
    case modalTypes.ESCAPE_SUCCESS:
      return "うまく　にげきれた！";
    case modalTypes.TRAUMA_FAILURE:
      return "ババ抜きにトラウマがあると伝えても解散できなかった！なぜか自分の負けということにされた。";
    case modalTypes.TRAUMA_SUCCESS:
      return "ババ抜きは解散になった！";
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
    case modalTypes.HIDE_SUCCESS:
      return "https://4.bp.blogspot.com/-et7VAwDedBQ/VRUSN-0cQrI/AAAAAAAAsnw/BAvMLCEi-Fk/s800/pose_kakushigoto_man.png";
    case modalTypes.HIDE_FAILURE:
      return "https://1.bp.blogspot.com/-xzq_tZkKTB0/W_UF9MyiAhI/AAAAAAABQUA/I4vsC7Zv1Ig35-B0h5z3Lz2F2boZmJI2wCLcBGAs/s800/cooking_shippai_woman2.png";
    case modalTypes.ESCAPE_SUCCESS:
      return "https://1.bp.blogspot.com/-3p9B_7sTMiY/UupGaR4cRXI/AAAAAAAAdbM/b9iA05X5oOU/s800/tsunami_nigeru.png";
    case modalTypes.ESCAPE_FAILURE:
      return "https://4.bp.blogspot.com/-pi2OEw0-Eew/XJB5M76Zf9I/AAAAAAABR9I/5FrJ3BqUJtUKKUVvvIJnxQ54v6O97HL0ACLcBGAs/s800/science_hakase_shippai.png";
    case modalTypes.TRAUMA_SUCCESS:
      return "https://3.bp.blogspot.com/-7WkRMKaT7IA/WzC98HBmJNI/AAAAAAABM9I/LhdySi0YzrA8F8YdPNn-1cPSsJJvXI7fwCLcBGAs/s800/trauma_man.png";
    case modalTypes.TRAUMA_FAILURE:
      return "https://1.bp.blogspot.com/-P-vYgqdM-Ls/VCOJsbExe2I/AAAAAAAAm1Q/GQozVl81iEY/s800/hansei_koukai_man.png";
    default:
      return "";
  }
};
