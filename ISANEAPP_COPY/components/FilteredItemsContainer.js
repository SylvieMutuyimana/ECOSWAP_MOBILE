import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import AboutContainer from "./AboutContainer";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const FilteredItemsContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.soldItems}>
      <View style={[styles.parent, styles.parentFlexBox]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={[styles.text, styles.textTypo]}>{`<--`}</Text>
        </Pressable>
        <Text style={[styles.description, styles.textTypo]}>
          Phone- Iphone 4
        </Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/frame-175.png")}
        />
      </View>
      <AboutContainer
        dimensionsCode={require("../assets/vector5.png")}
        onVectorPress={() => navigation.navigate("Item1")}
      />
      <View style={styles.frameParent}>
        <View style={[styles.sellerMuhiziMaiWrapper, styles.parentFlexBox]}>
          <Text style={[styles.sellerMuhiziMai, styles.sellerMuhiziMaiTypo]}>
            Seller: Muhizi Mai
          </Text>
        </View>
        <View
          style={[
            styles.locationKigaliGasaboRemeWrapper,
            styles.locationSpaceBlock,
          ]}
        >
          <Text style={[styles.sellerMuhiziMai, styles.sellerMuhiziMaiTypo]}>
            Location: Kigali, Gasabo, Remera, Rukiri 2
          </Text>
        </View>
        <View style={styles.locationSpaceBlock}>
          <Text
            style={[styles.locationDescription, styles.sellerMuhiziMaiTypo]}
          >{`Location Description: `}</Text>
          <Text style={[styles.ruyenziBuildingKu, styles.sellerMuhiziMaiTypo]}>
            Ruyenzi building ku gisimenti. the third floor, room 203.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
  },
  sellerMuhiziMaiTypo: {
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
  },
  locationSpaceBlock: {
    marginTop: 5,
    flexDirection: "row",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.size_sm,
    fontWeight: "800",
    width: 27,
    height: 18,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
  },
  description: {
    fontSize: FontSize.size_2xs,
    fontWeight: "600",
    width: 99,
    marginLeft: 83,
  },
  frameChild: {
    width: 4,
    height: 17,
    marginLeft: 83,
    overflow: "hidden",
  },
  parent: {
    justifyContent: "center",
  },
  sellerMuhiziMai: {
    width: 227,
    height: 13,
  },
  sellerMuhiziMaiWrapper: {
    height: 11,
  },
  locationKigaliGasaboRemeWrapper: {
    alignItems: "center",
  },
  locationDescription: {
    width: 105,
    height: 16,
  },
  ruyenziBuildingKu: {
    width: 185,
    height: 25,
    marginLeft: 5,
  },
  frameParent: {
    marginTop: 10,
    justifyContent: "center",
    overflow: "hidden",
  },
  soldItems: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.white,
    paddingHorizontal: Padding.p_sm,
    paddingVertical: Padding.p_mini,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default FilteredItemsContainer;
