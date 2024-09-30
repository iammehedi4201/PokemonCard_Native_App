import { PokemonCard } from "@/components/Shared/Card/PokemonCard.";
import { StatusBar } from "expo-status-bar";
import {
  ImageProps,
  Platform,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextStyle,
  View,
} from "react-native";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonData from "@/PokemonData.json";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import { getTypeStyle } from "@/utils/TypeStyles/TypeStyle";

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

type TtypeGroup = {
  type: string;
  data: Pokemon[];
};

export default function HomeScreen() {
  const HeroSectionPokemon: Pokemon[] = PokemonData.filter(
    (pokemon) => pokemon.isHero === true
  );

  const typeWisePokemon = PokemonData.reduce<TtypeGroup[]>(
    (acc, currentPokemon) => {
      let typeGroup = acc.find(
        (group: TtypeGroup) => group.type === currentPokemon.type
      );

      if (!typeGroup) {
        typeGroup = {
          type: currentPokemon.type,
          data: [],
        };
        acc.push(typeGroup);
      }

      typeGroup.data.push(currentPokemon);

      return acc;
    },
    []
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" backgroundColor="black" />
          <HeroSection PokemonData={HeroSectionPokemon as any} />
          <SectionList
            sections={typeWisePokemon}
            renderItem={({ item }) => <PokemonCard {...item} />}
            renderSectionHeader={({ section }) => {
              return (
                <Text
                  style={[
                    styles.typetext,
                    getTypeStyle(section.type) as TextStyle,
                  ]}
                >
                  {section.type}
                </Text>
              );
            }}
            ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            ListEmptyComponent={() => {
              return (
                typeWisePokemon.length === 0 && (
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
              );
            }}
          />
        </SafeAreaView>
      </ScrollView>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  typetext: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
  },
});
