import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const WishlistContainer = () => {
  return (
    <View style={[styles.wishlist, styles.viewFlexBox]}>
      <Text
        style={[styles.myWishlist, styles.rwfClr]}
      >{`My Wishlist -->`}</Text>
      <View style={[styles.myWishlist1, styles.viewFlexBox]}>
        <View style={styles.viewFlexBox}>
          <Image
            style={styles.spoilBlender16303888286a58dIcon}
            contentFit="cover"
            source={require("../assets/spoil-blender-1630388828-6a58d22e-13.png")}
          />
          <Text style={[styles.rwf, styles.rwfClr]}>20,000 rwf</Text>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <Image
            style={styles.spoilBlender16303888286a58dIcon}
            contentFit="cover"
            source={require("../assets/istockphoto583851138612x612-2.png")}
          />
          <Text style={[styles.rwf, styles.rwfClr]}>20,000 rwf</Text>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <Image
            style={styles.spoilBlender16303888286a58dIcon}
            contentFit="cover"
            source={require("../assets/nokia-2.png")}
          />
          <Text style={[styles.rwf, styles.rwfClr]}>20,000 rwf</Text>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <Image
            style={styles.spoilBlender16303888286a58dIcon}
            contentFit="cover"
            source={require("../assets/nokia-2.png")}
          />
          <Text style={[styles.rwf, styles.rwfClr]}>free</Text>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <Image
            style={styles.spoilBlender16303888286a58dIcon}
            contentFit="cover"
            source={require("../assets/nokia-2.png")}
          />
          <Text style={[styles.rwf, styles.rwfClr]}>free</Text>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <Image
            style={styles.spoilBlender16303888286a58dIcon}
            contentFit="cover"
            source={require("../assets/spoil-blender-1630388828-6a58d22e-13.png")}
          />
          <Text style={[styles.rwf, styles.rwfClr]}>20,000 rwf</Text>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <Image
            style={styles.spoilBlender16303888286a58dIcon}
            contentFit="cover"
            source={require("../assets/istockphoto583851138612x612-2.png")}
          />
          <Text style={[styles.rwf, styles.rwfClr]}>20,000 rwf</Text>
        </View>
        <View style={[styles.view1, styles.viewFlexBox]}>
          <Image
            style={styles.spoilBlender16303888286a58dIcon}
            contentFit="cover"
            source={require("../assets/istockphoto583851138612x612-2.png")}
          />
          <Text style={[styles.rwf, styles.rwfClr]}>20,000 rwf</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  rwfClr: {
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
  },
  myWishlist: {
    fontSize: FontSize.size_3xs,
    fontWeight: "500",
    textAlign: "left",
    width: 325,
    height: 21,
  },
  spoilBlender16303888286a58dIcon: {
    width: 70,
    height: 44,
  },
  rwf: {
    fontSize: FontSize.size_5xs,
    fontWeight: "700",
    textAlign: "center",
    width: 49,
    height: 8,
  },
  view1: {
    marginLeft: 10,
  },
  myWishlist1: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    width: 324,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_6xs,
    paddingVertical: Padding.p_7xs,
  },
  wishlist: {
    marginTop: 10,
  },
});

export default WishlistContainer;
