import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ContainerItem2 = () => {
  return (
    <View style={styles.item2}>
      <Image
        style={[styles.mainQimg01b073ed640cf6946b11Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/mainqimg01b073ed640cf6946b110844b663b2b6pjlq-11.png")}
      />
      <Text style={styles.description}>
        <Text style={styles.crackedScreenDellLaptop20}>
          <Text style={styles.crackedScreenDell}>{`Cracked Screen Dell Laptop
`}</Text>
          <Text style={styles.rwf}>{`20,000 rwf
`}</Text>
          <Text style={styles.crackedScreenDell}> </Text>
        </Text>
        <Text style={styles.checkItem}>Check item Bid wish</Text>
      </Text>
      <Image
        style={[styles.biheartFillIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/biheartfill.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mainQimg01b073ed640cf6946b11Icon: {
    height: "78.46%",
    width: "30.77%",
    top: "10.77%",
    right: "64.62%",
    bottom: "10.77%",
    left: "4.62%",
  },
  crackedScreenDell: {
    fontFamily: FontFamily.inter,
  },
  rwf: {
    fontWeight: "700",
    fontFamily: FontFamily.inter,
  },
  crackedScreenDellLaptop20: {
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
  },
  item2: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    width: 325,
    height: 65,
    marginTop: 10,
    overflow: "hidden",
  },
});

export default ContainerItem2;
