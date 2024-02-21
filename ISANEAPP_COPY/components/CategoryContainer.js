import * as React from "react";
    import {Text, StyleSheet, View, Pressable} from "react-native";
import {Image} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import HomeAppliances from "./HomeAppliances";
import HomeAppliancesContainerPhonesT from "./HomeAppliancesContainerPhonesT";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";
    
const CategoryContainer = () => {
const navigation = useNavigation();

  return (
    <View style={[styles.newItems, styles.newItemsFlexBox]}>
      <Text style={styles.categories}>CATEGORIES</Text>
      <View style={[styles.categories1, styles.newItemsFlexBox]}><HomeAppliances homeAppliancesYoullLoveAn={require("../assets/5homeappliancesyoullloveandrelyoneveryday1-1.png")} homeAppliancesPosition="unset" homeAppliancesBackgroundColor="unset" frameViewBorderStyle="unset" frameViewBorderColor="unset" homeApplicancesFontWeight="unset" onHomeAppliancesPress={() => navigation.navigate("CATEGORIES1")} /><HomeAppliancesContainerPhonesT dimensionsCode={require("../assets/istockphoto583851138612x612-1.png")} /><HomeAppliancesContainer productDimensionsId={require("../assets/download-1-1.png")} categoryDescription="Computers/TVs" propMarginLeft={22} propHeight={79} onHomeAppliancesPress={() => navigation.navigate("CATEGORIES2")} />
      </View>
    </View>);
};

const styles = StyleSheet.create({
  newItemsFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden"
  },
  categories: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    textAlign: "left",
    width: 321,
    height: 13
  },
  categories1: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_base_5,
    paddingVertical: 0,
    marginTop: 5
  },
  newItems: {
    paddingHorizontal: Padding.p_12xs,
    paddingTop: Padding.p_8xs,
    marginTop: 10
  }
});

export default CategoryContainer;
