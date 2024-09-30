import React, { StyleHTMLAttributes } from "react";
import {
  Platform,
  SafeAreaView,
  StyleProp,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";

type BoxProps = {
  boxStyle?: StyleProp<ViewStyle>;
  text?: string;
};

export const Box = ({ boxStyle, text }: BoxProps) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  return (
    <SafeAreaView>
      <View style={boxStyle}>
        <Text
          style={{
            fontSize: windowWidth > 500 ? 40 : 30,
            fontWeight: "bold",
            alignSelf: "center",
          }}
        >
          {text}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
});
