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
}

export default getUserLevelIconName;