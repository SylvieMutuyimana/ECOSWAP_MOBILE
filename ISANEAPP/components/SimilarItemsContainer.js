import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const SimilarItemsContainer = () => {
  return (
    <View style={styles.similarItems}>
      <View style={styles.items}>
        <Image
          style={[styles.spoilBlender16303888286a58dIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/spoil-blender-1630388828-6a58d22e-14.png")}
        />
        <Image
          style={[styles.istockphoto583851138612x612Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/istockphoto583851138612x612-21.png")}
        />
        <Image
          style={[styles.nokia2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/nokia-21.png")}
        />
        <Image
          style={[styles.nokia3Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/nokia-21.png")}
        />
        <Text style={[styles.rwf, styles.rwfTypo]}>20,000 rwf</Text>
        <Text style={[styles.rwf1, styles.rwfTypo]}>24,000 rwf</Text>
        <Text style={[styles.rwf2, styles.rwfTypo]}>5,000 rwf</Text>
        <Text style={[styles.free, styles.rwfTypo]}>free</Text>
      </View>
      <Text style={styles.similarItems1}>{`Similar items -->`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 44,
    width: 70,
    top: 7,
    position: "absolute",
  },
  rwfTypo: {
    height: 8,
    width: 49,
    fontWeight: "700",
    fontSize: FontSize.size_5xs,
    top: 51,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  spoilBlender16303888286a58dIcon: {
    left: 8,
  },
  istockphoto583851138612x612Icon: {
    left: 88,
  },
  nokia2Icon: {
    left: 168,
  },
  nokia3Icon: {
    left: 248,
  },
  rwf: {
    left: 18,
  },
  rwf1: {
    left: 98,
  },
  rwf2: {
    left: 178,
  },
  free: {
    left: 258,
  },
  items: {
    height: "79.27%",
    top: "20.73%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    left: "0%",
    width: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  similarItems1: {
    height: "25.61%",
    top: "0%",
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  similarItems: {
    width: 325,
    height: 82,
    marginTop: 10,
    overflow: "hidden",
  },
});

export default SimilarItemsContainer;
