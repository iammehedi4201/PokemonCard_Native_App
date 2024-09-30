import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const CardsPage = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            voluptatum quaerat impedit mollitia praesentium, laboriosam repellat
            quod eius alias consequatur quibusdam dolor, rem soluta veniam
            ratione consectetur sint esse dignissimos!
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
     
  },
});
