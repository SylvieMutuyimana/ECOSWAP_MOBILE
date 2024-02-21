import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TITLEPAGE from "../components/TITLEPAGE";
import NavPROFILE from "../components/NavPROFILE";
import { Color, FontSize, Border, FontFamily, Padding } from "../GlobalStyles";

const PROFILE = () => {
  return (
    <View style={[styles.profile, styles.profileSpaceBlock]}>
      <TITLEPAGE
        hOME={`MY PROFILE
`}
        tITLEPAGEPosition="unset"
        fluentnavigation16FilledIOverflow="hidden"
      />
      <View style={[styles.detailsParent, styles.profileSpaceBlock]}>
        <View style={styles.details}>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group2.png")}
          />
        </View>
        <View style={styles.details1}>
          <Text
            style={[
              styles.nameMunezaLionelContainer,
              styles.munezaContainerTypo,
            ]}
          >
            <Text style={styles.name}>{`Name:
`}</Text>
            <Text style={styles.munezaLionel}>Muneza Lionel</Text>
          </Text>
          <Text
            style={[
              styles.accountTypeRegularContainer,
              styles.munezaContainerTypo,
            ]}
          >
            <Text style={styles.name}>{`Account type:
`}</Text>
            <Text style={styles.munezaLionel}>{`Regular
`}</Text>
          </Text>
          <Text style={[styles.usernameLMuneza, styles.munezaContainerTypo]}>
            <Text style={styles.name}>{`Username:
`}</Text>
            <Text style={styles.munezaLionel}>l_muneza</Text>
          </Text>
        </View>
      </View>
      <NavPROFILE navPROFILEPosition="unset" />
    </View>
  );
};

const styles = StyleSheet.create({
  profileSpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  munezaContainerTypo: {
    width: 122,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_smi,
    left: 5,
    position: "absolute",
  },
  groupIcon: {
    width: 246,
    height: 150,
  },
  details: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.white,
    paddingHorizontal: 35,
    paddingVertical: 30,
    alignItems: "center",
    overflow: "hidden",
  },
  name: {
    fontWeight: "900",
    fontFamily: FontFamily.inter,
  },
  munezaLionel: {
    fontFamily: FontFamily.inter,
  },
  nameMunezaLionelContainer: {
    top: 9,
    height: 42,
  },
  accountTypeRegularContainer: {
    top: 107,
    height: 39,
  },
  usernameLMuneza: {
    top: 58,
    height: 41,
  },
  details1: {
    width: 298,
    height: 146,
    marginTop: 10,
    overflow: "hidden",
  },
  detailsParent: {
    width: 360,
    height: 676,
    paddingVertical: Padding.p_xl,
  },
  profile: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    justifyContent: "center",
    paddingVertical: Padding.p_28xl,
  },
});

export default PROFILE;
