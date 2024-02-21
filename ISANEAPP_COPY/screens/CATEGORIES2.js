import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TITLEPAGE from "../components/TITLEPAGE";
import CategoryFilterContainer from "../components/CategoryFilterContainer";
import ContainerItem3 from "../components/ContainerItem3";
import ContainerItem2 from "../components/ContainerItem2";
import ContainerItem1 from "../components/ContainerItem1";
import ContainerItem from "../components/ContainerItem";
import NavCategories from "../components/NavCategories";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const CATEGORIES2 = () => {
  return (
    <View style={[styles.categories3, styles.itemsFlexBox]}>
      <TITLEPAGE
        hOME={`CATEGORIES
`}
        tITLEPAGEPosition="unset"
        fluentnavigation16FilledIOverflow="hidden"
      />
      <View style={[styles.categoriesParent, styles.itemsFlexBox]}>
        <CategoryFilterContainer />
        <View style={[styles.items, styles.itemsFlexBox]}>
          <View style={styles.homeAppliancesWrapper}>
            <Text style={styles.homeAppliances}>HOME APPLIANCES</Text>
          </View>
          <View style={[styles.items1, styles.itemsFlexBox]}>
            <ContainerItem3 />
            <ContainerItem2 />
            <ContainerItem1 />
            <ContainerItem />
            <ContainerItem />
            <ContainerItem />
            <ContainerItem />
            <ContainerItem />
          </View>
        </View>
      </View>
      <NavCategories
        navCategoriesPosition="unset"
        navCategoriesBorderStyle="unset"
        navCategoriesBorderColor="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemsFlexBox: {
    alignItems: "center",
    overflow: "hidden",
  },
  homeAppliances: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    textAlign: "left",
    width: 124,
    height: 13,
  },
  homeAppliancesWrapper: {
    width: 325,
    flexDirection: "row",
    overflow: "hidden",
  },
  items1: {
    backgroundColor: Color.colorMediumblue_300,
    marginTop: 5,
  },
  items: {
    paddingHorizontal: Padding.p_mid_5,
    paddingVertical: 0,
    marginTop: 10,
  },
  categoriesParent: {
    width: 360,
    height: 676,
  },
  categories3: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    justifyContent: "center",
    paddingHorizontal: 0,
    paddingVertical: Padding.p_28xl,
  },
});

export default CATEGORIES2;
