import React, { useState, useCallback } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, Modal } from "react-native";
import About from "../components/About";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Welcome = () => {
  const [readMoreTextVisible, setReadMoreTextVisible] = useState(false);
  const navigation = useNavigation();

  const openReadMoreText = useCallback(() => {
    setReadMoreTextVisible(true);
  }, []);

  const closeReadMoreText = useCallback(() => {
    setReadMoreTextVisible(false);
  }, []);

  return (
    <>
      <View style={styles.welcome}>
        <View style={[styles.titleParent, styles.titleFlexBox]}>
          <View style={[styles.title, styles.titleFlexBox]}>
            <Image
              style={styles.electronicRecycling1Icon}
              contentFit="cover"
              source={require("../assets/electronicrecycling-1.png")}
            />
            <Text style={[styles.eWasteManagement, styles.wasteTypo]}>
              E WASTE MANAGEMENT RE-IMAGINED
            </Text>
          </View>
          <View style={[styles.about, styles.aboutSpaceBlock]}>
            <Image
              style={styles.aboutChild}
              contentFit="cover"
              source={require("../assets/frame-187.png")}
            />
            <Pressable style={styles.readMore} onPress={openReadMoreText}>
              <Text style={[styles.readMore1, styles.wasteTypo]}>
                Read More
              </Text>
            </Pressable>
          </View>
          <View style={[styles.userNav, styles.aboutSpaceBlock]}>
            <Pressable
              style={styles.buyLayout}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={[styles.buyEWaste, styles.wasteTypo]}>
                SELL E-WASTE
              </Text>
            </Pressable>
            <Pressable
              style={[styles.sell, styles.buyLayout]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={[styles.buyEWaste, styles.wasteTypo]}>
                BUY E-WASTE
              </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent visible={readMoreTextVisible}>
        <View style={styles.readMoreTextOverlay}>
          <Pressable
            style={styles.readMoreTextBg}
            onPress={closeReadMoreText}
          />
          <About onClose={closeReadMoreText} />
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  wasteTypo: {
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.inter,
    fontSize: FontSize.size_xs,
  },
  aboutSpaceBlock: {
    marginTop: 55,
    alignItems: "center",
    overflow: "hidden",
  },
  buyLayout: {
    height: 53,
    width: 180,
    borderWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  electronicRecycling1Icon: {
    borderRadius: 40,
    width: 57,
    height: 59,
  },
  eWasteManagement: {
    marginLeft: 10,
  },
  title: {
    flexDirection: "row",
  },
  aboutChild: {
    width: 160,
    height: 80,
    borderRadius: Border.br_8xs,
    overflow: "hidden",
  },
  readMoreTextOverlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(113, 113, 113, 0.3)",
  },
  readMoreTextBg: {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
  },
  readMore1: {
    fontStyle: "italic",
    fontWeight: "300",
    width: 226,
    height: 18,
  },
  readMore: {
    marginTop: 6,
  },
  about: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_xs,
  },
  buyEWaste: {
    top: 20,
    left: 17,
    width: 154,
    height: 28,
    position: "absolute",
  },
  sell: {
    marginTop: 25,
  },
  userNav: {
    height: 260,
    paddingHorizontal: 43,
    paddingTop: Padding.p_base,
    paddingBottom: 150,
    justifyContent: "center",
  },
  titleParent: {
    marginTop: -278.5,
    marginLeft: -163,
    top: "50%",
    left: "50%",
    paddingHorizontal: Padding.p_mid,
    paddingVertical: 0,
    justifyContent: "center",
    position: "absolute",
  },
  welcome: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.orange,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Welcome;
