import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PriceContainer = ({
  listingDetails,
  listingIdentifier,
  locationType,
  dimensionIdentifier,
  propWidth,
  propHeight,
}) => {
  const vectorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("height", propHeight),
    };
  }, [propWidth, propHeight]);

  return (
    <View style={styles.emailParent}>
      <View style={styles.emailShadowBox}>
        <Text style={styles.email1}>{listingDetails}</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={listingIdentifier}
        />
      </View>
      <View style={[styles.email2, styles.emailShadowBox]}>
        <Text style={styles.email1}>{locationType}</Text>
        <Image
          style={[styles.vectorIcon1, vectorIconStyle]}
          contentFit="cover"
          source={dimensionIdentifier}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emailShadowBox: {
    paddingVertical: Padding.p_2xs,
    paddingHorizontal: Padding.p_smi,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_8xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  email1: {
    fontSize: FontSize.size_base,
    fontStyle: "italic",
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    textAlign: "left",
    width: 68,
  },
  vectorIcon: {
    width: 15,
    height: 7,
    marginLeft: 31,
  },
  vectorIcon1: {
    width: 10,
    height: 10,
    marginLeft: 31,
  },
  email2: {
    marginLeft: 10,
  },
  emailParent: {
    alignItems: "flex-end",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_10xs,
    marginTop: 15,
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default PriceContainer;
