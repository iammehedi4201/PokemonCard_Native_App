import { PokemonCard } from "@/components/Shared/Card/PokemonCard.";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicator,
  Platform,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {

  const PokemonData = [
    {
      name: "Charmander",
      type: "Fire",
      base_experience: 62,
      height: 6,
      weight: 85,
      abilities: ["Blaze", "Solar Power"],
      hp: 39,
      image: require("../../assets/images/charmander.png"),
    },
    {
      name: "Squirtle",
      type: "Water",
      base_experience: 63,
      height: 5,
      weight: 90,
      abilities: ["Torrent", "Rain Dish"],
      hp: 44,
      image: require("../../assets/images/squirtle.png"),
    },
    {
      name: "Bulbasaur",
      type: "Grass",
      base_experience: 64,
      height: 7,
      weight: 69,
      abilities: ["Overgrow", "Chlorophyll"],
      hp: 45,
      image: require("../../assets/images/bulbasaur.png"),
    },
    {
      name: "Pikachu",
      type: "Electric",
      base_experience: 112,
      height: 4,
      weight: 60,
      abilities: ["Static", "Lightning Rod"],
      hp: 35,
      image: require("../../assets/images/pikachu.png"),
    },
  ];

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar style="auto" backgroundColor="black" />
      <SafeAreaView style={styles.container}>
        {PokemonData.map((pokemon, index) => (
          <PokemonCard key={index} {...pokemon} />
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
