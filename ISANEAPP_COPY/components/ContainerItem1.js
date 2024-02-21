import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ContainerItem1 = () => {
  return (
    <View style={styles.item3}>
      <Text style={styles.description}>
        <Text style={styles.smashedScreenIphone420}>
          <Text style={styles.smashedScreenIphone}>{`Smashed screen iphone 4 ...
`}</Text>
          <Text style={styles.rwf}>{`20,000 rwf
`}</Text>
          <Text style={styles.smashedScreenIphone}> </Text>
        </Text>
        <Text style={styles.checkItem}>Check item Bid wish</Text>
      </Text>
      <Image
        style={styles.istockphoto583851138612x612Icon}
        contentFit="cover"
        source={require("../assets/istockphoto583851138612x612-13.png")}
      />
      <Image
        style={styles.biheartFillIcon}
        contentFit="cover"
        source={require("../assets/biheartfill.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  smashedScreenIphone: {
    fontFamily: FontFamily.inter,
  },
  rwf: {
    fontWeight: "700",
    fontFamily: FontFamily.inter,
  },
  smashedScreenIphone420: {
    fontSize: FontSize.size_4xs,
    color: Color.colorBlack,
  },
  checkItem: {
    fontSize: FontSize.size_5xs,
    fontStyle: "italic",
    color: Color.colorMediumblue_100,
    fontFamily: FontFamily.inter,
  },
  description: {
    height: "76.92%",
    width: "58.46%",
    top: "12.31%",
    left: "40%",
    textAlign: "left",
    position: "absolute",
  },
  istockphoto583851138612x612Icon: {
    top: 7,
    left: 15,
    width: 100,
    height: 50,
    position: "absolute",
  },
  biheartFillIcon: {
    height: "18.46%",
    width: "3.08%",
    top: "63.08%",
    right: "6.15%",
    bottom: "18.46%",
    left: "90.77%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  item3: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    width: 325,
    height: 65,
    marginTop: 10,
    overflow: "hidden",
  },
});

export default ContainerItem1;
