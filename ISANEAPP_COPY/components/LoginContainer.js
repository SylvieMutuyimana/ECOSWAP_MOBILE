import React, { useMemo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LoginContainer = ({
  authOptionText,
  authButtonText,
  propMarginTop,
  propHeight,
  onLoginPress,
  onNewUserCreateAccountContaPress,
}) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  const newUserCreateAccountStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight),
    };
  }, [propHeight]);

  return (
    <View style={[styles.loginParent, frameView1Style]}>
      <Pressable style={styles.login} onPress={onLoginPress}>
        <Text style={[styles.login1, styles.login1Typo]}>{authOptionText}</Text>
      </Pressable>
      <Pressable
        style={styles.newUsercreateAccountContainer}
        onPress={onNewUserCreateAccountContaPress}
      >
        <Text
          style={[
            styles.newUsercreateAccount,
            styles.login1Typo,
            newUserCreateAccountStyle,
          ]}
        >
          {authButtonText}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  login1Typo: {
    textAlign: "center",
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_base,
  },
  login1: {
    position: "absolute",
    top: 15,
    left: 23,
    fontWeight: "900",
    color: Color.white,
    width: 96,
  },
  login: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorBlack,
    width: 142,
    height: 50,
    overflow: "hidden",
  },
  newUsercreateAccount: {
    fontStyle: "italic",
    fontWeight: "800",
    color: Color.colorBlack,
    width: 228,
    height: 24,
  },
  newUsercreateAccountContainer: {
    marginTop: 25,
  },
  loginParent: {
    alignItems: "center",
    marginTop: 43,
    overflow: "hidden",
  },
});

export default LoginContainer;
