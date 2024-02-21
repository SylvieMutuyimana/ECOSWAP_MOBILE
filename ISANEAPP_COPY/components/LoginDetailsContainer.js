import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginContainer from "./LoginContainer";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

const LoginDetailsContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.details, styles.detailsFlexBox]}>
      <View style={[styles.emailParent, styles.detailsFlexBox]}>
        <View style={styles.emailShadowBox}>
          <Text style={styles.email1}>Email</Text>
        </View>
        <View style={[styles.email2, styles.emailShadowBox]}>
          <Text style={styles.email1}>Password</Text>
        </View>
      </View>
      <LoginContainer
        authOptionText="LOGIN"
        authButtonText="New user/Create Account"
        onLoginPress={() => navigation.navigate("HOME")}
        onNewUserCreateAccountContaPress={() =>
          navigation.navigate("CreateAccount")
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailsFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  emailShadowBox: {
    height: 41,
    width: 250,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorSilver,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  email1: {
    position: "absolute",
    top: 11,
    left: 18,
    fontSize: FontSize.size_base,
    fontStyle: "italic",
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    textAlign: "left",
    width: 185,
  },
  email2: {
    marginTop: 40,
  },
  emailParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
  },
  details: {
    height: 365,
    paddingHorizontal: Padding.p_10xl,
    paddingTop: Padding.p_mid,
    paddingBottom: Padding.p_31xl,
    marginTop: 15,
  },
});

export default LoginDetailsContainer;
