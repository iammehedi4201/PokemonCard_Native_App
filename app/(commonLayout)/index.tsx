import { View, Text, StatusBar, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "@/components/Shared/Card/PokemonCard.";

export const index = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="black" />
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <PokemonCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
