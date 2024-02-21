import * as React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Menu = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.menu}>
      <View style={styles.details}>
        <View style={styles.mdicancelBoldParent}>
          <Image
            style={styles.mdicancelBoldIcon}
            contentFit="cover"
            source={require("../assets/mdicancelbold.png")}
          />
          <Image
            style={styles.rectangleIcon}
            contentFit="cover"
            source={require("../assets/rectangle.png")}
          />
        </View>
        <View style={styles.frameParent}>
          <Pressable
            style={styles.parentFlexBox}
            onPress={() => navigation.navigate("HOME")}
          >
            <Text style={styles.home}>Home</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
          </Pressable>
          <View style={[styles.wishlistParent, styles.parentFlexBox]}>
            <Text style={styles.home}>WISHLIST</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
          </View>
          <Pressable
            style={[styles.wishlistParent, styles.parentFlexBox]}
            onPress={() => navigation.navigate("PROFILE")}
          >
            <Text style={styles.home}>ACCOUNT</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.wishlistParent, styles.parentFlexBox]}
            onPress={() => navigation.navigate("CATEGORIES1")}
          >
            <Text style={styles.home}>new items</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
          </Pressable>
          <View style={[styles.wishlistParent, styles.parentFlexBox]}>
            <Text style={styles.home}>terms/policies</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
          </View>
          <Pressable
            style={[styles.wishlistParent, styles.parentFlexBox]}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.home}>LOGOUT</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
          </Pressable>
          <View style={[styles.wishlistParent, styles.parentFlexBox]}>
            <Text style={styles.home}>HELP</Text>
            <Image
              style={styles.vectorIcon}
              contentFit="cover"
              source={require("../assets/vector11.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    padding: Padding.p_base,
    borderRadius: Border.br_xl,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  mdicancelBoldIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  rectangleIcon: {
    borderRadius: 50,
    width: 56,
    height: 56,
    marginLeft: 225,
  },
  mdicancelBoldParent: {
    paddingHorizontal: Padding.p_12xs,
    paddingVertical: Padding.p_xs,
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  home: {
    fontSize: FontSize.size_lg,
    lineHeight: 23,
    textTransform: "uppercase",
    fontFamily: FontFamily.inter,
    color: Color.white,
    textAlign: "left",
    width: 158,
    height: 26,
  },
  vectorIcon: {
    width: 6,
    height: 12,
    marginLeft: 130,
  },
  wishlistParent: {
    marginTop: 20,
  },
  frameParent: {
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  details: {
    position: "absolute",
    marginLeft: -153.5,
    top: 40,
    left: "50%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  menu: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.orange,
    width: 360,
    height: 800,
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
});

export default Menu;
