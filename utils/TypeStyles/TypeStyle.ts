export const getTypeStyle = (type: string) => {
  switch (type.toLowerCase()) {
    case "fire":
      return {
        color: "#FF5733", // Fire type color
        backgroundColor: "#FFE5E0", // Light fire background
        borderColor: "#FF5733", // Fire border color
        fontWeight: "bold",
      };
    case "water":
      return {
        color: "#33A1FF", // Water type color
        backgroundColor: "#E0F7FF", // Light water background
        borderColor: "#33A1FF", // Water border color
        fontWeight: "bold",
      };
    case "grass":
      return {
        color: "#33FF57", // Grass type color
        backgroundColor: "#E0FFE5", // Light grass background
        borderColor: "#33FF57", // Grass border color
        fontWeight: "bold",
      };
    case "electric":
      return {
        color: "#FFD433", // Electric type color
        backgroundColor: "#FFF7E0", // Light electric background
        borderColor: "#FFD433", // Electric border color
        fontWeight: "bold",
      };
    default:
      return {
        color: "#000000", // Default color
        backgroundColor: "#FFFFFF", // Default background
        borderColor: "#000000", // Default border color
        fontWeight: "normal",
      };
  }
};
