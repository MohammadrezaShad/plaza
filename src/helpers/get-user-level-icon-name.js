import userLevel from "../constants/user-levels";

const getUserLevelIconName = (level) => {
  switch (level) {
    case userLevel.GREEN:
      return "user";
    case userLevel.SILVER:
      return "silver";
    case userLevel.GOLDEN:
      return "golden";
    case userLevel.DIAMOND:
      return "diamond";
    default:
      return "user";
  }
};

export default getUserLevelIconName;

export const getUserLevelName = (level) => {
  switch (level) {
    case userLevel.GREEN:
      return "سبز";
    case userLevel.SILVER:
      return "نقره ای";
    case userLevel.GOLDEN:
      return "طلایی";
    case userLevel.DIAMOND:
      return "الماس";
    default:
      return "سبز";
  }
};
