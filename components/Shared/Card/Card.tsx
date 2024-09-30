import React from "react";
import { Button, Image, ImageBackground, Text, View } from "react-native";

type CardProps = {
  handleDetails: () => void;
  cardStyle: object;
  imageStyle: object;
  backgroundImageLink?: string;
  imageLink?: string;
};

const Card = ({ handleDetails, cardStyle, imageStyle }: CardProps) => {
  return (
    <View style={cardStyle}>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1569470451072-68314f596aec?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        resizeMode="cover"
      >
        <Image
          source={require("@/assets/images/Hero.png")}
          style={imageStyle}
        />
        <Text style={{ textAlign: "center", color: "purple" }}>
          Mehedi Hasan
        </Text>
        <View
          style={{
            width: 200,
            alignSelf: "center",
            marginVertical: 10,
          }}
        >
          <Button
            title="Show Details"
            color={"purple"}
            onPress={handleDetails}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
