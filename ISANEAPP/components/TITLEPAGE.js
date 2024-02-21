import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TITLEPAGE = ({
  hOME,
  tITLEPAGEPosition,
  fluentnavigation16FilledIOverflow,
  onFluentnavigation16FilledPress,
}) => {
  const tITLEPAGEStyle = useMemo(() => {
    return {
      ...getStyleValue("position", tITLEPAGEPosition),
    };
  }, [tITLEPAGEPosition]);

  const fluentnavigation16FilledIconStyle = useMemo(() => {
    return {
      ...getStyleValue("overflow", fluentnavigation16FilledIOverflow),
    };
  }, [fluentnavigation16FilledIOverflow]);

  return (
    <View style={[styles.titlePage, tITLEPAGEStyle]}>
      <Text style={styles.home}>{hOME}</Text>
      <Image
        style={[
          styles.fluentnavigation16FilledIcon,
          fluentnavigation16FilledIconStyle,
        ]}
        contentFit="cover"
        source={require("../assets/fluentnavigation16filled.png")}
        onPress={onFluentnavigation16FilledPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    fontSize: FontSize.size_base,
    fontWeight: "900",
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    textAlign: "left",
    width: 176,
    height: 20,
  },
  fluentnavigation16FilledIcon: {
    width: 44,
    height: 33,
    marginLeft: 110,
    overflow: "hidden",
  },
  titlePage: {
    backgroundColor: Color.orange,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: Padding.p_xl,
    paddingTop: Padding.p_sm_5,
    paddingRight: Padding.p_3xs,
    paddingBottom: Padding.p_sm_5,
    overflow: "hidden",
  },
});

export default TITLEPAGE;
