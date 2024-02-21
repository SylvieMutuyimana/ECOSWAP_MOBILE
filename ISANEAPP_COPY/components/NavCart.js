import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavCart = ({ navCartPosition, onHOMEPress, onHOMEPress1 }) => {
  const navCartStyle = useMemo(() => {
    return {
      ...getStyleValue("position", navCartPosition),
    };
  }, [navCartPosition]);

  return (
    <View style={[styles.navCart, navCartStyle]}>
      <View style={styles.navUpload}>
        <View style={[styles.home, styles.antFlexBox]} onPress={onHOMEPress}>
          <View style={[styles.antDesignhomeFilled, styles.antFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
        </View>
        <View style={styles.homeFlexBox}>
          <View style={[styles.antDesignhomeFilled, styles.antFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/group.png")}
            />
          </View>
        </View>
        <View style={styles.homeFlexBox}>
          <View style={[styles.antDesignhomeFilled, styles.antFlexBox]}>
            <Image
              style={[styles.antDesigncloudUploadOutlinIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/antdesignclouduploadoutlined.png")}
            />
          </View>
        </View>
        <View style={[styles.home3, styles.homeFlexBox]}>
          <View style={[styles.antDesignhomeFilled3, styles.antFlexBox]}>
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector9.png")}
            />
          </View>
          <Text style={styles.cart}> CART</Text>
        </View>
        <View style={styles.homeFlexBox} onPress={onHOMEPress1}>
          <View style={[styles.antDesignhomeFilled, styles.antFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/vector3.png")}
            />
          </View>
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
  iconLayout: {
    height: 22,
    width: 22,
  },
  homeFlexBox: {
    marginLeft: 24.5,
    borderRadius: Border.br_xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
  antDesignhomeFilled: {
    padding: Padding.p_7xs,
  },
  home: {
    flexDirection: "row",
  },
  antDesigncloudUploadOutlinIcon: {
    overflow: "hidden",
    height: 22,
    width: 22,
  },
  vectorIcon1: {
    width: 14,
    height: 14,
  },
  antDesignhomeFilled3: {
    backgroundColor: Color.colorBlack,
    padding: Padding.p_3xs,
  },
  cart: {
    fontSize: FontSize.size_4xs,
    fontWeight: "700",
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    textAlign: "left",
    width: 63,
    height: 11,
    marginLeft: 2,
  },
  home3: {
    backgroundColor: Color.grey,
  },
  navUpload: {
    backgroundColor: Color.orange,
    paddingHorizontal: Padding.p_sm_5,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    flexDirection: "row",
  },
  navCart: {
    flexDirection: "row",
  },
});

export default NavCart;
