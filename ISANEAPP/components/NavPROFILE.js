import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, Padding, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NavPROFILE = ({ navPROFILEPosition }) => {
  const navPROFILEStyle = useMemo(() => {
    return {
      ...getStyleValue("position", navPROFILEPosition),
    };
  }, [navPROFILEPosition]);

  return (
    <View style={[styles.navProfile, navPROFILEStyle]}>
      <View style={styles.navUpload}>
        <View style={[styles.home, styles.antFlexBox]}>
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
        <View style={styles.homeFlexBox}>
          <View style={[styles.antDesignhomeFilled, styles.antFlexBox]}>
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/vector2.png")}
            />
          </View>
        </View>
        <View style={[styles.home4, styles.homeFlexBox]}>
          <View style={[styles.antDesignhomeFilled4, styles.antFlexBox]}>
            <Image
              style={styles.vectorIcon2}
              contentFit="cover"
              source={require("../assets/vector8.png")}
            />
          </View>
          <Text style={styles.profile}> PROFILE</Text>
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
  vectorIcon2: {
    width: 14,
    height: 14,
  },
  antDesignhomeFilled4: {
    backgroundColor: Color.colorBlack,
    padding: Padding.p_3xs,
  },
  profile: {
    fontSize: FontSize.size_4xs,
    fontWeight: "700",
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    textAlign: "left",
    width: 63,
    height: 11,
    marginLeft: 2,
  },
  home4: {
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
  navProfile: {
    flexDirection: "row",
  },
});

export default NavPROFILE;
