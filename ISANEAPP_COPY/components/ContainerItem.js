import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ContainerItem = () => {
  return (
    <View style={styles.item4}>
      <Image
        style={styles.spoilBlender16303888286a58dIcon}
        contentFit="cover"
        source={require("../assets/spoil-blender-1630388828-6a58d22e-11.png")}
      />
      <Text style={styles.description}>
        <Text style={styles.ionaBlenderWithA20000}>
          <Text style={styles.ionaBlenderWith}>{`Iona blender with a ...
`}</Text>
          <Text style={styles.rwf}>{`20,000 rwf
`}</Text>
          <Text style={styles.ionaBlenderWith}> </Text>
        </Text>
        <Text style={styles.checkItem}>Check item Bid wish</Text>
      </Text>
      <Image
        style={styles.biheartFillIcon}
        contentFit="cover"
        source={require("../assets/biheartfill.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  spoilBlender16303888286a58dIcon: {
    top: 8,
    left: 15,
    width: 100,
    height: 50,
    position: "absolute",
  },
  ionaBlenderWith: {
    fontFamily: FontFamily.inter,
  },
  rwf: {
    fontWeight: "700",
    fontFamily: FontFamily.inter,
  },
  ionaBlenderWithA20000: {
    fontSize: FontSize.size_4xs,
    color: Color.colorBlack,
  },
  checkItem: {
    fontSize: FontSize.size_5xs,
    fontStyle: "italic",
    color: Color.colorMediumblue_200,
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
  item4: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    width: 325,
    height: 65,
    marginTop: 10,
    overflow: "hidden",
  },
});

export default ContainerItem;
