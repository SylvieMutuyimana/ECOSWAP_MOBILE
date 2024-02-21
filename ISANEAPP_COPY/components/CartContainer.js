import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const CartContainer = () => {
  return (
    <View style={styles.items}>
      <View style={[styles.myCartWrapper, styles.item1Layout]}>
        <Text style={styles.myCart}>MY CART</Text>
      </View>
      <View style={[styles.item1, styles.item1Layout]}>
        <Image
          style={[styles.nokia1Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/nokia-12.png")}
        />
        <Text style={styles.description}>
          <Text style={styles.nokiaPhoneThatCantStart}>
            <Text style={styles.nokiaPhoneThat}>{`Nokia phone that can’t start 
`}</Text>
            <Text style={styles.rwf}>{`24,000 rwf 
`}</Text>
            <Text style={styles.nokiaPhoneThat}> </Text>
          </Text>
          <Text style={[styles.buy, styles.buyTypo]}>Buy Bid Remove(x)</Text>
        </Text>
      </View>
      <View style={[styles.item1, styles.item1Layout]}>
        <Image
          style={styles.mainQimg01b073ed640cf6946b11Icon}
          contentFit="cover"
          source={require("../assets/mainqimg01b073ed640cf6946b110844b663b2b6pjlq-12.png")}
        />
        <Text style={styles.description}>
          <Text style={styles.nokiaPhoneThatCantStart}>
            <Text
              style={styles.nokiaPhoneThat}
            >{`Cracked Screen Dell Laptop. 4GB Ram ...
`}</Text>
            <Text style={styles.rwf}>{`90,000 rwf
`}</Text>
            <Text style={styles.nokiaPhoneThat}> </Text>
          </Text>
          <Text style={[styles.buy, styles.buyTypo]}>Buy Bid Remove(x)</Text>
        </Text>
      </View>
      <View style={[styles.item1, styles.item1Layout]}>
        <Text style={styles.description}>
          <Text style={styles.nokiaPhoneThatCantStart}>
            <Text style={styles.nokiaPhoneThat}>{`Smashed screen iphone 4 
`}</Text>
            <Text style={styles.rwf}>{`free (0rwf)
`}</Text>
            <Text style={styles.nokiaPhoneThat}> </Text>
          </Text>
          <Text style={[styles.buy, styles.buyTypo]}>Buy Bid Remove(x)</Text>
        </Text>
        <Image
          style={[styles.istockphoto583851138612x612Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/istockphoto583851138612x612-15.png")}
        />
      </View>
      <View style={[styles.item1, styles.item1Layout]}>
        <Image
          style={[styles.spoilBlender16303888286a58dIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/spoil-blender-1630388828-6a58d22e-12.png")}
        />
        <Text style={styles.description}>
          <Text style={styles.nokiaPhoneThatCantStart}>
            <Text style={styles.nokiaPhoneThat}>{`Iona blender with a ...
`}</Text>
            <Text style={styles.rwf}>{`10,000 rwf
`}</Text>
            <Text style={styles.nokiaPhoneThat}> </Text>
          </Text>
          <Text style={[styles.buy3, styles.buyTypo]}>Buy Bid Remove(x)</Text>
        </Text>
      </View>
      <View style={[styles.item1, styles.item1Layout]}>
        <Image
          style={[styles.spoilBlender16303888286a58dIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/spoil-blender-1630388828-6a58d22e-12.png")}
        />
        <Text style={styles.description}>
          <Text style={styles.nokiaPhoneThatCantStart}>
            <Text style={styles.nokiaPhoneThat}>{`Iona blender with a ...
`}</Text>
            <Text style={styles.rwf}>{`30,0000 rwf

`}</Text>
          </Text>
          <Text style={[styles.buy, styles.buyTypo]}>Buy Bid Remove(x)</Text>
        </Text>
      </View>
      <View style={[styles.item1, styles.item1Layout]}>
        <Image
          style={[styles.spoilBlender16303888286a58dIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/spoil-blender-1630388828-6a58d22e-12.png")}
        />
        <Text style={styles.description}>
          <Text style={styles.nokiaPhoneThatCantStart}>
            <Text style={styles.nokiaPhoneThat}>{`Iona blender with a ...
`}</Text>
            <Text style={styles.rwf}>{`30,0000 rwf

`}</Text>
          </Text>
          <Text style={[styles.buy, styles.buyTypo]}>Buy Bid Remove(x)</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item1Layout: {
    width: 325,
    overflow: "hidden",
  },
  iconPosition: {
    width: 80,
    left: 15,
    position: "absolute",
  },
  buyTypo: {
    fontStyle: "italic",
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inter,
  },
  myCart: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    width: 124,
    height: 13,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
  },
  myCartWrapper: {
    flexDirection: "row",
  },
  nokia1Icon: {
    height: 55,
    top: 5,
    width: 80,
    left: 15,
  },
  nokiaPhoneThat: {
    fontFamily: FontFamily.inter,
  },
  rwf: {
    fontWeight: "700",
    fontFamily: FontFamily.inter,
  },
  nokiaPhoneThatCantStart: {
    fontSize: FontSize.size_4xs,
    color: Color.colorBlack,
  },
  buy: {
    color: Color.colorMediumblue_100,
  },
  description: {
    height: "78.46%",
    width: "58.46%",
    top: "10.77%",
    left: "35.38%",
    position: "absolute",
    textAlign: "left",
  },
  item1: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    height: 65,
    marginTop: 5,
  },
  mainQimg01b073ed640cf6946b11Icon: {
    height: "87.69%",
    width: "24.62%",
    top: "6.15%",
    right: "70.77%",
    bottom: "6.15%",
    left: "4.62%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  istockphoto583851138612x612Icon: {
    height: 56,
    top: 5,
    width: 80,
    left: 15,
  },
  spoilBlender16303888286a58dIcon: {
    top: 7,
    height: 51,
  },
  buy3: {
    color: Color.colorMediumblue_200,
  },
  items: {
    backgroundColor: Color.colorMediumblue_300,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default CartContainer;
