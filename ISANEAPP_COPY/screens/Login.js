import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import LoginDetailsContainer from "../components/LoginDetailsContainer";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <View style={[styles.details, styles.detailsFlexBox]}>
        <Container
          onBackPress={() => navigation.goBack()}
          onPressablePress={() => navigation.goBack()}
        />
        <View style={[styles.ecoSwapParent, styles.detailsFlexBox]}>
          <Text style={[styles.ecoSwap, styles.login1Typo]}>ECO-SWAP</Text>
          <Text style={[styles.login1, styles.login1Typo]}>LOGIN</Text>
          <LoginDetailsContainer />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  login1Typo: {
    width: 220,
    textAlign: "center",
    color: Color.grey,
    fontFamily: FontFamily.inter,
    fontWeight: "800",
    fontSize: FontSize.size_5xl,
  },
  ecoSwap: {
    height: 35,
  },
  login1: {
    marginTop: 15,
  },
  ecoSwapParent: {
    height: 580,
    paddingTop: Padding.p_10xs,
    paddingBottom: Padding.p_8xl,
    marginTop: 25,
  },
  details: {
    position: "absolute",
    marginLeft: -161.5,
    top: 40,
    left: "50%",
  },
  login: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.orange,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Login;
