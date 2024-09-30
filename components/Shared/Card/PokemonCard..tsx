import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  ImageProps,
} from "react-native";
import React from "react";

type PokemonCardProps = {
  name: string;
  type: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: string[];
  hp: number;
  image: ImageProps;
};

const getTypeStyle = (type: string): { borderColor: string; emoji: string } => {
  switch (type.toLocaleLowerCase()) {
    case "fire":
      return { borderColor: "#FF5733", emoji: "🔥" };
    case "water":
      return { borderColor: "#33A1FF", emoji: "💧" };
    case "grass":
      return { borderColor: "#33FF57", emoji: "🌿" };
    case "electric":
      return { borderColor: "#FFD433", emoji: "⚡" };
    default:
      return { borderColor: "#000000", emoji: "❓" }; // Default case
  }
};

export const PokemonCard = ({
  name,
  type,
  base_experience,
  height,
  weight,
  abilities,
  hp,
  image,
}: PokemonCardProps) => {
  const { borderColor, emoji } = getTypeStyle(type);

  return (
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️ {hp}</Text>
      </View>

      <Image
        style={styles.image}
        source={image}
        resizeMode="contain"
        accessibilityLabel={`${name} pokemon`}
      />
      <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor }]}>
          <Text style={styles.emoji}>{emoji}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>
      </View>

      <View style={styles.movesContainer}>
        <Text style={styles.moveText}>Moves: {abilities.join(", ")}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  hp: {
    fontSize: 18,
    color: "red",
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    alignSelf: "center",
  },
  typeContainer: { alignItems: "center" },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 4,
    borderRadius: 20,
    padding: 8,
  },
  emoji: {
    fontSize: 24,
  },
  type: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  movesContainer: {
    alignSelf: "center",
  },
  moveText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
