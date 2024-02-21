import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavUPLOAD = ({ navUPLOADPosition, onHOMEPress }) => {
  const navUPLOADStyle = useMemo(() => {
    return {
      ...getStyleValue("position", navUPLOADPosition),
    };
  }, [navUPLOADPosition]);

  return (
    <View style={[styles.navUpload, navUPLOADStyle]}>
      <View style={[styles.home, styles.antFlexBox]} onPress={onHOMEPress}>
        <View style={[styles.antDesignhomeFilled, styles.antFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector6.png")}
          />
        </View>
      </View>
      <View style={styles.homeFlexBox}>
        <View style={[styles.antDesignhomeFilled, styles.antFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/group.png")}
          />
        </View>
      </View>
      <View style={[styles.home2, styles.homeFlexBox]}>
        <View style={[styles.antDesignhomeFilled2, styles.antFlexBox]}>
          <Image
            style={styles.antDesigncloudUploadOutlinIcon}
            contentFit="cover"
            source={require("../assets/antdesignclouduploadoutlined1.png")}
          />
        </View>
        <Text style={styles.sell}> SELL</Text>
      </View>
      <View style={styles.homeFlexBox}>
        <View style={[styles.antDesignhomeFilled, styles.antFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
      <View style={styles.homeFlexBox}>
        <View style={[styles.antDesignhomeFilled, styles.antFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  antFlexBox: {
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  homeFlexBox: {
    marginLeft: 24.5,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  vectorIcon: {
    width: 22,
    height: 22,
  },
  antDesignhomeFilled: {
    padding: Padding.p_7xs,
  },
  home: {
    flexDirection: "row",
    borderRadius: Border.br_xl,
  },
  antDesigncloudUploadOutlinIcon: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  antDesignhomeFilled2: {
    backgroundColor: Color.colorBlack,
    padding: Padding.p_3xs,
  },
  sell: {
    fontSize: FontSize.size_4xs,
    fontWeight: "700",
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    textAlign: "left",
    width: 63,
    height: 11,
    marginLeft: 2,
  },
  home2: {
    backgroundColor: Color.grey,
  },
  navUpload: {
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_sm_5,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
});

export default NavUPLOAD;
