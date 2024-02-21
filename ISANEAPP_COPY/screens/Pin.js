import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border, Padding } from "../GlobalStyles";

const Pin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pin}>
      <View style={[styles.details, styles.detailsFlexBox]}>
        <View style={[styles.backParent, styles.detailsFlexBox]}>
          <Pressable style={styles.back} onPress={() => navigation.goBack()}>
            <Pressable
              style={styles.pressable}
              onPress={() => navigation.goBack()}
            >
              <Text style={[styles.text, styles.textClr]}>{`<--`}</Text>
            </Pressable>
          </Pressable>
          <Pressable
            style={styles.cancel}
            onPress={() => navigation.navigate("Welcome")}
          >
            <Text style={[styles.cancel1, styles.verifyTypo]}>Cancel</Text>
          </Pressable>
        </View>
        <View
          style={[
            styles.enterPinSentToYourPhoneParent,
            styles.emailWrapperSpaceBlock,
          ]}
        >
          <Text style={[styles.enterPinSent, styles.textTypo]}>
            ENTER PIN SENT TO YOUR PHONE
          </Text>
          <View style={[styles.details1, styles.detailsFlexBox]}>
            <View style={[styles.emailWrapper, styles.emailWrapperSpaceBlock]}>
              <View style={[styles.email, styles.emailLayout]}>
                <Text style={styles.email1}>PIN</Text>
              </View>
            </View>
            <View style={[styles.loginWrapper, styles.detailsFlexBox]}>
              <Pressable
                style={[styles.login, styles.emailLayout]}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={[styles.verify, styles.verifyTypo]}>VERIFY</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  textClr: {
    color: Color.white,
    textAlign: "center",
  },
  verifyTypo: {
    fontWeight: "900",
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inter,
  },
  emailWrapperSpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.inter,
    fontWeight: "800",
  },
  emailLayout: {
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  text: {
    height: "100%",
    fontSize: FontSize.size_3xl,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "center",
    fontFamily: FontFamily.inter,
    fontWeight: "800",
    width: "100%",
    color: Color.white,
  },
  pressable: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  back: {
    width: 55,
    height: 33,
  },
  cancel1: {
    color: Color.orange,
    textAlign: "right",
    width: 87,
    height: 30,
  },
  cancel: {
    marginLeft: 179,
  },
  backParent: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_12xs,
    paddingVertical: Padding.p_xs,
  },
  enterPinSent: {
    fontSize: FontSize.size_lg,
    color: Color.grey,
    width: 306,
    textAlign: "center",
  },
  email1: {
    top: 11,
    left: 18,
    fontStyle: "italic",
    color: Color.colorBlack,
    textAlign: "left",
    width: 185,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.inter,
    position: "absolute",
  },
  email: {
    backgroundColor: Color.colorSilver,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 240,
    height: 41,
  },
  emailWrapper: {
    paddingVertical: Padding.p_8xs,
  },
  verify: {
    top: 15,
    left: 23,
    width: 96,
    textAlign: "center",
    color: Color.white,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.colorBlack,
    width: 142,
    height: 50,
  },
  loginWrapper: {
    marginTop: 40,
  },
  details1: {
    paddingHorizontal: Padding.p_10xl,
    paddingTop: Padding.p_xl,
  },
  enterPinSentToYourPhoneParent: {
    height: 504,
    paddingVertical: Padding.p_8xl,
    marginTop: 45,
    justifyContent: "center",
  },
  details: {
    marginLeft: -161.5,
    top: 40,
    left: "50%",
    justifyContent: "center",
    position: "absolute",
  },
  pin: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.orange,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default Pin;
