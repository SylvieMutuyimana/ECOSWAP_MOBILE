import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Container from "../components/Container";
import RegistrationDetailsContainer from "../components/RegistrationDetailsContainer";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const CreateAccount = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.createAccount}>
      <View style={[styles.details, styles.detailsFlexBox]}>
        <Container
          onBackPress={() => navigation.goBack()}
          onPressablePress={() => navigation.goBack()}
        />
        <View style={[styles.ecoSwapParent, styles.detailsFlexBox]}>
          <Text style={[styles.ecoSwap, styles.ecoSwapTypo]}>ECO-SWAP</Text>
          <Text style={[styles.register, styles.ecoSwapTypo]}>REGISTER</Text>
          <RegistrationDetailsContainer />
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
  ecoSwapTypo: {
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
  register: {
    marginTop: 15,
  },
  ecoSwapParent: {
    height: 578,
    paddingTop: 33,
    paddingBottom: Padding.p_8xl,
    marginTop: 20,
  },
  details: {
    position: "absolute",
    marginLeft: -161.5,
    top: 40,
    left: "50%",
  },
  createAccount: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.orange,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default CreateAccount;
