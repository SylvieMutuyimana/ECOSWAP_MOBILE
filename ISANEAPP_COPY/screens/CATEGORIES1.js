import * as React from "react";
    import {Text, StyleSheet, View, Pressable} from "react-native";
import {Image} from "expo-image";
import {useNavigation} from "@react-navigation/native";
import TITLEPAGE from "../components/TITLEPAGE";
import HomeAppliances from "../components/HomeAppliances";
import HomeAppliancesContainerPhonesT from "../components/HomeAppliancesContainerPhonesT";

import ContainerItem3 from "../components/ContainerItem3";
import ContainerItem2 from "../components/ContainerItem2";
import ContainerItem1 from "../components/ContainerItem1";
import ContainerItem from "../components/ContainerItem";
import NavCategories from "../components/NavCategories";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";
    
const CATEGORIES1 = () => {
const navigation = useNavigation();

  return (
    <View style={[styles.categories, styles.categoriesParentFlexBox]}><TITLEPAGE hOME={`CATEGORIES
`} tITLEPAGEPosition="unset" fluentnavigation16FilledIOverflow="hidden" />
      <View style={[styles.categoriesParent, styles.categoriesParentFlexBox]}>
        <View style={[styles.categories1, styles.itemsSpaceBlock]}>
          <Image style={styles.cursorIconLayout} contentFit="cover" source={require("../assets/left-cursor.png")} />
          <View style={[styles.homeAppliancesParent, styles.categoriesParentFlexBox]}><HomeAppliances homeAppliancesYoullLoveAn={require("../assets/5homeappliancesyoullloveandrelyoneveryday1-11.png")} homeAppliancesPosition="unset" homeAppliancesBackgroundColor="unset" frameViewBorderStyle="solid" frameViewBorderColor="#d9d9d9" frameViewBorderWidth={1} homeApplicancesFontWeight="700" /><HomeAppliancesContainerPhonesT dimensionsCode={require("../assets/istockphoto583851138612x612-14.png")} propMarginLeft={15} /><HomeAppliancesContainer productDimensionsId={require("../assets/download-1-11.png")} categoryDescription="Computers/TVs" propMarginLeft={15} propHeight={79} onHomeAppliancesPress={() => navigation.navigate("CATEGORIES2")} />
          </View>
          <Image style={[styles.rightCursorIcon, styles.cursorIconLayout]} contentFit="cover" source={require("../assets/right-cursor.png")} />
        </View>
        <View style={[styles.items, styles.itemsSpaceBlock]}>
          <View style={styles.homeAppliancesWrapper}>
            <Text style={styles.homeAppliances}>HOME APPLIANCES</Text>
          </View>
          <View style={[styles.items1, styles.categoriesParentFlexBox]}><ContainerItem3 /><ContainerItem2 /><ContainerItem1 /><ContainerItem /><ContainerItem /><ContainerItem /><ContainerItem /><ContainerItem />
          </View>
        </View>
      </View><NavCategories navCategoriesPosition="unset" navCategoriesBorderStyle="solid" navCategoriesBorderColor="#8d8a8a" navCategoriesBorderTopWidth={2} onHOMEPress={() => navigation.navigate("HOME")} />
    </View>);
};

const styles = StyleSheet.create({
  categoriesParentFlexBox: {
    alignItems: "center",
    overflow: "hidden"
  },
  itemsSpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
    overflow: "hidden"
  },
  cursorIconLayout: {
    height: 20,
    width: 10
  },
  homeAppliancesParent: {
    marginLeft: 8.5,
    flexDirection: "row"
  },
  rightCursorIcon: {
    marginLeft: 8.5
  },
  categories1: {
    backgroundColor: Color.colorDarkslategray_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    paddingHorizontal: Padding.p_9xs,
    flexDirection: "row"
  },
  homeAppliances: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    textAlign: "left",
    width: 124,
    height: 13
  },
  homeAppliancesWrapper: {
    width: 325,
    flexDirection: "row",
    overflow: "hidden"
  },
  items1: {
    backgroundColor: Color.colorMediumblue_300,
    marginTop: 5
  },
  items: {
    paddingHorizontal: Padding.p_mid_5,
    marginTop: 10
  },
  categoriesParent: {
    width: 360,
    height: 676
  },
  categories: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_28xl
  }
});

export default CATEGORIES1;
