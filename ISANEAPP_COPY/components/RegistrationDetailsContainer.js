import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginContainer from "./LoginContainer";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const RegistrationDetailsContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.details, styles.detailsFlexBox]}>
      <View style={[styles.emailParent, styles.detailsFlexBox]}>
        <View style={styles.email}>
          <Text style={styles.email1}>Name</Text>
        </View>
        <View style={styles.emailShadowBox}>
          <Text style={styles.email1}>Phone Number</Text>
        </View>
        <View style={styles.emailShadowBox}>
          <Text style={styles.email1}>username</Text>
        </View>
        <View style={styles.emailShadowBox}>
          <Text style={styles.email1}>Password</Text>
        </View>
        <View style={styles.emailShadowBox}>
          <Text style={styles.email1}>Repeat Password</Text>
        </View>
      </View>
      <LoginContainer
        authOptionText="REGISTER"
        authButtonText={`Already have an account?
Login`}
        propMarginTop={40}
        propHeight={39}
        onLoginPress={() => navigation.navigate("Pin")}
        onNewUserCreateAccountContaPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailsFlexBox: {
    alignItems: "center",
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
  email: {
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
  emailShadowBox: {
    marginTop: 27,
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
  emailParent: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
  },
  details: {
    paddingHorizontal: Padding.p_10xl,
    paddingTop: Padding.p_mini,
    marginTop: 15,
  },
});

export default RegistrationDetailsContainer;
