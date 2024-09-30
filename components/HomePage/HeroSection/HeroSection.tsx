import { View, Text, FlatList, ImageProps } from "react-native";
import React from "react";
import { PokemonCard } from "@/components/Shared/Card/PokemonCard.";

type Pokemon = {
  name: string;
  type: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: string[];
  hp: number;
  image: string;
};

type heroSectionProps = {
  PokemonData: Array<Pokemon>;
};

const HeroSection = ({ PokemonData }: heroSectionProps) => {
  return (
    <FlatList
      data={PokemonData}
      renderItem={({ item }) => {
        return <PokemonCard {...item} />;
      }}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      horizontal={true}
      ListEmptyComponent={() =>
        PokemonData.length === 0 && (
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "gray",
              marginTop: 20,
            }}
          >
            No data
          </Text>
        )
      }
      progressViewOffset={10}
      refreshing={true}
    />
  );
};

export default HeroSection;
