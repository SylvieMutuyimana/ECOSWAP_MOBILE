import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavHome = ({
  navHomePosition,
  navHomeBorderStyle,
  navHomeBorderColor,
  navHomeBorderTopWidth,
  onHOMEPress,
  onHOMEPress1,
  onHOMEPress2,
  onHOMEPress3,
}) => {
  const navHomeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", navHomePosition),
      ...getStyleValue("borderStyle", navHomeBorderStyle),
      ...getStyleValue("borderColor", navHomeBorderColor),
      ...getStyleValue("borderTopWidth", navHomeBorderTopWidth),
    };
  }, [
    navHomePosition,
    navHomeBorderStyle,
    navHomeBorderColor,
    navHomeBorderTopWidth,
  ]);

  return (
    <View style={[styles.navHome, navHomeStyle]}>
      <View style={[styles.home, styles.homeFlexBox]}>
        <View style={[styles.antDesignhomeFilled, styles.homeFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
        <Text style={styles.home1}> HOME</Text>
      </View>
      <View style={[styles.home2, styles.homeFlexBox]} onPress={onHOMEPress}>
        <View style={[styles.antDesignhomeFilled1, styles.homeFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
        </View>
      </View>
      <View style={[styles.home2, styles.homeFlexBox]} onPress={onHOMEPress1}>
        <View style={[styles.antDesignhomeFilled1, styles.homeFlexBox]}>
          <Image
            style={[styles.antDesigncloudUploadOutlinIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/antdesignclouduploadoutlined.png")}
          />
        </View>
      </View>
      <View style={[styles.home2, styles.homeFlexBox]} onPress={onHOMEPress2}>
        <View style={[styles.antDesignhomeFilled1, styles.homeFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
      <View style={[styles.home2, styles.homeFlexBox]} onPress={onHOMEPress3}>
        <View style={[styles.antDesignhomeFilled1, styles.homeFlexBox]}>
          <Image
            style={styles.iconLayout}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homeFlexBox: {
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  iconLayout: {
    height: 22,
    width: 22,
  },
  vectorIcon: {
    width: 14,
    height: 14,
  },
  antDesignhomeFilled: {
    backgroundColor: Color.colorBlack,
    padding: Padding.p_3xs,
  },
  home1: {
    fontSize: FontSize.size_4xs,
    fontWeight: "700",
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    textAlign: "left",
    width: 63,
    height: 11,
    marginLeft: 2,
  },
  home: {
    backgroundColor: Color.grey,
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  antDesignhomeFilled1: {
    padding: Padding.p_7xs,
  },
  home2: {
    marginLeft: 24.5,
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  antDesigncloudUploadOutlinIcon: {
    overflow: "hidden",
    height: 22,
    width: 22,
  },
  navHome: {
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_sm_5,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default NavHome;
