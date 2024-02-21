import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const HomeAppliancesContainerPhonesT = ({ dimensionsCode, propMarginLeft }) => {
  const homeAppliances1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", propMarginLeft),
    };
  }, [propMarginLeft]);

  return (
    <View style={[styles.homeAppliances, homeAppliances1Style]}>
      <View style={styles.istockphoto583851138612x612Wrapper}>
        <Image
          style={styles.istockphoto583851138612x612Icon}
          contentFit="cover"
          source={dimensionsCode}
        />
      </View>
      <Text style={styles.phonestablets}>Phones/Tablets</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  istockphoto583851138612x612Icon: {
    width: 77,
    height: 70,
  },
  istockphoto583851138612x612Wrapper: {
    top: 11,
    left: 18,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.orangeLighter,
    width: 60,
    height: 60,
    position: "absolute",
    overflow: "hidden",
  },
  phonestablets: {
    top: 72,
    left: 0,
    fontSize: FontSize.size_4xs,
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    textAlign: "center",
    height: 13,
    position: "absolute",
    width: 95,
  },
  homeAppliances: {
    borderRadius: Border.br_mini,
    height: 95,
    marginLeft: 22,
    overflow: "hidden",
    width: 95,
  },
});

export default HomeAppliancesContainerPhonesT;
