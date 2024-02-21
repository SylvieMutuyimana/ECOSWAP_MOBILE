import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import TITLEPAGE from "../components/TITLEPAGE";
import PriceContainer from "../components/PriceContainer";
import { useNavigation } from "@react-navigation/native";
import NavUPLOAD from "../components/NavUPLOAD";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const SelluploadItems = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.selluploadItems, styles.frameParentSpaceBlock]}>
      <TITLEPAGE
        hOME="SELL"
        tITLEPAGEPosition="unset"
        fluentnavigation16FilledIOverflow="hidden"
      />
      <View style={[styles.newItesmWrapper, styles.frameParentSpaceBlock]}>
        <View style={[styles.newItesm, styles.email4FlexBox]}>
          <Text style={styles.selldonateYourItem}>Sell/Donate your item</Text>
          <View style={styles.details}>
            <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
              <View style={styles.vectorParent}>
                <Image
                  style={styles.vectorIcon}
                  contentFit="cover"
                  source={require("../assets/vector12.png")}
                />
                <Image
                  style={styles.icoutlineCloudUploadIcon}
                  contentFit="cover"
                  source={require("../assets/icoutlinecloudupload.png")}
                />
                <View style={styles.email}>
                  <Text style={[styles.email1, styles.emailTypo]}>Image</Text>
                </View>
              </View>
              <View style={[styles.email2, styles.emailShadowBox]}>
                <Text style={[styles.email3, styles.emailTypo]}>Item Name</Text>
              </View>
              <View style={[styles.email4, styles.emailShadowBox]}>
                <Text style={[styles.email5, styles.emailTypo]}>
                  Item Category
                </Text>
                <Image
                  style={styles.vectorIcon1}
                  contentFit="cover"
                  source={require("../assets/vector13.png")}
                />
              </View>
              <View style={[styles.email6, styles.emailShadowBox]}>
                <Text style={[styles.email3, styles.emailTypo]}>
                  Description
                </Text>
              </View>
              <PriceContainer
                listingDetails="Price"
                listingIdentifier={require("../assets/vector14.png")}
                locationType="Free"
                dimensionIdentifier={require("../assets/vector15.png")}
              />
              <PriceContainer
                listingDetails="Province"
                listingIdentifier={require("../assets/vector13.png")}
                locationType="District"
                dimensionIdentifier={require("../assets/vector13.png")}
                propWidth={15}
                propHeight={7}
              />
              <View style={[styles.email8, styles.emailShadowBox]}>
                <Text style={[styles.email3, styles.emailTypo]}>Sector</Text>
              </View>
              <View style={[styles.email10, styles.emailShadowBox]}>
                <Text style={[styles.email3, styles.emailTypo]}>Cell</Text>
              </View>
              <View style={[styles.email12, styles.emailShadowBox]}>
                <Text style={[styles.email3, styles.emailTypo]}>
                  Location Description
                </Text>
              </View>
            </View>
          </View>
          <Pressable
            style={styles.login}
            onPress={() => navigation.navigate("Pin")}
          >
            <Text style={styles.upload}>UPLOAD</Text>
          </Pressable>
        </View>
      </View>
      <NavUPLOAD navUPLOADPosition="unset" />
    </View>
  );
};

const styles = StyleSheet.create({
  frameParentSpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  email4FlexBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  emailTypo: {
    fontStyle: "italic",
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
  },
  emailShadowBox: {
    marginTop: 15,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  selldonateYourItem: {
    fontSize: 20,
    fontWeight: "700",
    height: 21,
    width: 290,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
  },
  vectorIcon: {
    width: 60,
    height: 60,
  },
  icoutlineCloudUploadIcon: {
    width: 24,
    height: 24,
    marginLeft: 10,
    overflow: "hidden",
  },
  email1: {
    width: 68,
    left: 18,
    top: 11,
    position: "absolute",
    fontStyle: "italic",
  },
  email: {
    width: 220,
    height: 41,
    backgroundColor: Color.colorWhitesmoke,
    borderRadius: Border.br_8xs,
    marginLeft: 10,
    overflow: "hidden",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  vectorParent: {
    alignItems: "flex-end",
    paddingBottom: Padding.p_3xs,
    flexDirection: "row",
    overflow: "hidden",
  },
  email3: {
    width: 185,
    left: 18,
    top: 11,
    position: "absolute",
    fontStyle: "italic",
  },
  email2: {
    height: 41,
    width: 290,
  },
  email5: {
    width: 200,
  },
  vectorIcon1: {
    width: 15,
    height: 7,
    marginLeft: 49,
  },
  email4: {
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_2xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  email6: {
    height: 41,
    width: 290,
  },
  email8: {
    height: 41,
    width: 290,
  },
  email10: {
    height: 41,
    width: 290,
  },
  email12: {
    height: 41,
    width: 290,
  },
  frameParent: {
    paddingVertical: Padding.p_9xs,
  },
  details: {
    paddingTop: 9,
    paddingBottom: 18,
    overflow: "hidden",
  },
  upload: {
    top: 15,
    left: 23,
    fontWeight: "900",
    color: Color.white,
    textAlign: "center",
    width: 96,
    fontSize: FontSize.size_base,
    position: "absolute",
    fontFamily: FontFamily.inter,
  },
  login: {
    backgroundColor: Color.colorBlack,
    width: 142,
    height: 50,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  newItesm: {
    justifyContent: "center",
    overflow: "hidden",
  },
  newItesmWrapper: {
    width: 360,
    height: 676,
    paddingVertical: Padding.p_mini,
  },
  selluploadItems: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    paddingVertical: Padding.p_28xl,
    justifyContent: "center",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    paddingHorizontal: 0,
  },
});

export default SelluploadItems;
