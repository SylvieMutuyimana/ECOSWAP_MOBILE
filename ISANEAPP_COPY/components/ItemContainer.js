import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const ItemContainer = () => {
  return (
    <View style={styles.items}>
      <View style={styles.itemLayout}>
        <Image
          style={styles.biheartFillIcon}
          contentFit="cover"
          source={require("../assets/biheartfill.png")}
        />
        <Image
          style={styles.nokia1Icon}
          contentFit="cover"
          source={require("../assets/nokia-11.png")}
        />
        <Text style={styles.description}>
          <Text style={styles.nokiaPhoneCantStart20000}>
            <Text style={styles.nokiaPhoneCant}>{`Nokia phone can’t start
`}</Text>
            <Text style={styles.rwf}>{`20,000 rwf
`}</Text>
            <Text style={styles.nokiaPhoneCant}> </Text>
          </Text>
          <Text style={[styles.checkItem, styles.checkItemTypo]}>
            Check item Bid wish
          </Text>
        </Text>
      </View>
      <View style={[styles.item2, styles.itemLayout]}>
        <Image
          style={[styles.mainQimg01b073ed640cf6946b11Icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/mainqimg01b073ed640cf6946b110844b663b2b6pjlq-11.png")}
        />
        <Text style={styles.description}>
          <Text style={styles.nokiaPhoneCantStart20000}>
            <Text style={styles.nokiaPhoneCant}>{`Cracked Screen Dell Laptop
`}</Text>
            <Text style={styles.rwf}>{`20,000 rwf
`}</Text>
            <Text style={styles.nokiaPhoneCant}> </Text>
          </Text>
          <Text style={[styles.checkItem1, styles.checkItemTypo]}>
            Check item Bid wish
          </Text>
        </Text>
        <Image
          style={[styles.biheartFillIcon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/biheartfill.png")}
        />
      </View>
      <View style={[styles.item2, styles.itemLayout]}>
        <Text style={styles.description}>
          <Text style={styles.nokiaPhoneCantStart20000}>
            <Text style={styles.nokiaPhoneCant}>{`Smashed screen iphone 4 ...
`}</Text>
            <Text style={styles.rwf}>{`20,000 rwf
`}</Text>
            <Text style={styles.nokiaPhoneCant}> </Text>
          </Text>
          <Text style={[styles.checkItem, styles.checkItemTypo]}>
            Check item Bid wish
          </Text>
        </Text>
        <Image
          style={[styles.istockphoto583851138612x612Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/istockphoto583851138612x612-13.png")}
        />
        <Image
          style={[styles.biheartFillIcon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/biheartfill.png")}
        />
      </View>
      <View style={[styles.item2, styles.itemLayout]}>
        <Image
          style={[styles.spoilBlender16303888286a58dIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/spoil-blender-1630388828-6a58d22e-11.png")}
        />
        <Text style={styles.description}>
          <Text style={styles.nokiaPhoneCantStart20000}>
            <Text style={styles.nokiaPhoneCant}>{`Iona blender with a ...
`}</Text>
            <Text style={styles.rwf}>{`20,000 rwf
`}</Text>
            <Text style={styles.nokiaPhoneCant}> </Text>
          </Text>
          <Text style={[styles.checkItem1, styles.checkItemTypo]}>
            Check item Bid wish
          </Text>
        </Text>
        <Image
          style={[styles.biheartFillIcon1, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/biheartfill.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkItemTypo: {
    fontStyle: "italic",
    fontSize: FontSize.size_5xs,
    fontFamily: FontFamily.inter,
  },
  itemLayout: {
    height: 65,
    width: 325,
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    overflow: "hidden",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
    height: 50,
    width: 100,
    left: 15,
    position: "absolute",
  },
  biheartFillIcon: {
    top: 41,
    left: 295,
    width: 10,
    height: 12,
    position: "absolute",
    overflow: "hidden",
  },
  nokia1Icon: {
    top: 5,
    height: 54,
    width: 100,
    left: 15,
    position: "absolute",
  },
  nokiaPhoneCant: {
    fontFamily: FontFamily.inter,
  },
  rwf: {
    fontWeight: "700",
    fontFamily: FontFamily.inter,
  },
  nokiaPhoneCantStart20000: {
    fontSize: FontSize.size_4xs,
    color: Color.colorBlack,
  },
  checkItem: {
    color: Color.colorMediumblue_100,
  },
  description: {
    height: "76.92%",
    width: "58.46%",
    top: "12.31%",
    left: "40%",
    textAlign: "left",
    position: "absolute",
  },
  mainQimg01b073ed640cf6946b11Icon: {
    height: "78.46%",
    width: "30.77%",
    top: "10.77%",
    right: "64.62%",
    bottom: "10.77%",
    left: "4.62%",
  },
  checkItem1: {
    color: Color.colorMediumblue_200,
  },
  biheartFillIcon1: {
    height: "18.46%",
    width: "3.08%",
    top: "63.08%",
    right: "6.15%",
    bottom: "18.46%",
    left: "90.77%",
  },
  item2: {
    marginTop: 10,
  },
  istockphoto583851138612x612Icon: {
    top: 7,
  },
  spoilBlender16303888286a58dIcon: {
    top: 8,
  },
  items: {
    backgroundColor: Color.colorMediumblue_300,
    alignItems: "center",
    marginTop: 5,
    overflow: "hidden",
  },
});

export default ItemContainer;
