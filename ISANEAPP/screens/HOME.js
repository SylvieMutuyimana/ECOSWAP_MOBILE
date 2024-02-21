import React, { useState, useCallback } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
  Modal,
} from "react-native";
import { Image } from "expo-image";
import Menu from "../components/Menu";
import { useNavigation } from "@react-navigation/native";
import TITLEPAGE from "../components/TITLEPAGE";
import CategoryContainer from "../components/CategoryContainer";
import NewItemsContainer from "../components/NewItemsContainer";
import NavHome from "../components/NavHome";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const HOME = () => {
  const [
    fluentnavigation16FilledIconVisible,
    setFluentnavigation16FilledIconVisible,
  ] = useState(false);
  const navigation = useNavigation();

  const openFluentnavigation16FilledIcon = useCallback(() => {
    setFluentnavigation16FilledIconVisible(true);
  }, []);

  const closeFluentnavigation16FilledIcon = useCallback(() => {
    setFluentnavigation16FilledIconVisible(false);
  }, []);

  return (
    <>
      <View style={[styles.home, styles.homeFlexBox]}>
        <TITLEPAGE
          hOME="HOME"
          tITLEPAGEPosition="unset"
          fluentnavigation16FilledIOverflow="unset"
          onFluentnavigation16FilledPress={openFluentnavigation16FilledIcon}
        />
        <View style={[styles.topPageParent, styles.topLayout]}>
          <ImageBackground
            style={[styles.topPageIcon, styles.topLayout]}
            resizeMode="cover"
            source={require("../assets/toppage.png")}
          >
            <Image
              style={[
                styles.noteableEwasteMain760x3781Icon,
                styles.wordingPosition,
              ]}
              contentFit="cover"
              source={require("../assets/noteable-ewaste-main760x378-1.png")}
            />
            <View style={[styles.wording, styles.wordingPosition]}>
              <Text style={styles.eWasteManagementReImagined}>
                E-WASTE MANAGEMENT RE-IMAGINED
              </Text>
            </View>
          </ImageBackground>
          <CategoryContainer />
          <NewItemsContainer />
        </View>
        <NavHome
          navHomePosition="unset"
          navHomeBorderStyle="solid"
          navHomeBorderColor="#8d8a8a"
          navHomeBorderTopWidth={2}
          onHOMEPress={() => navigation.navigate("CATEGORIES1")}
          onHOMEPress1={() => navigation.navigate("SELL")}
          onHOMEPress2={() => navigation.navigate("CART")}
          onHOMEPress3={() => navigation.navigate("PROFILE")}
        />
      </View>

      <Modal
        animationType="fade"
        transparent
        visible={fluentnavigation16FilledIconVisible}
      >
        <View style={styles.fluentnavigation16FilledIconOverlay}>
          <Pressable
            style={styles.fluentnavigation16FilledIconBg}
            onPress={closeFluentnavigation16FilledIcon}
          />
          <Menu onClose={closeFluentnavigation16FilledIcon} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  homeFlexBox: {
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  topLayout: {
    width: 360,
    overflow: "hidden",
  },
  wordingPosition: {
    left: "50%",
    position: "absolute",
  },
  fluentnavigation16FilledIconOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  fluentnavigation16FilledIconBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  noteableEwasteMain760x3781Icon: {
    marginLeft: -180,
    top: 0,
    width: 361,
    height: 205,
  },
  eWasteManagementReImagined: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    textAlign: "center",
  },
  wording: {
    marginLeft: -100.6,
    bottom: 19,
    backgroundColor: "rgba(255, 255, 255, 0.78)",
    flexDirection: "row",
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: Padding.p_8xs,
    justifyContent: "center",
    overflow: "hidden",
    alignItems: "center",
  },
  topPageIcon: {
    height: 205,
  },
  topPageParent: {
    height: 676,
    alignItems: "center",
    width: 360,
  },
  home: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_28xl,
  },
});

export default HOME;
