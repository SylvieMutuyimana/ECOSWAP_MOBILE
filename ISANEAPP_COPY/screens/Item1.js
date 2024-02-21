import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import TITLEPAGE from "../components/TITLEPAGE";
import FilteredItemsContainer1 from "../components/FilteredItemsContainer1";
import ItemContainer from "../components/ItemContainer";
import NavCategories from "../components/NavCategories";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const Item1 = () => {
  return (
    <View style={[styles.item, styles.itemsFlexBox]}>
      <TITLEPAGE
        hOME={`CATEGORIES
`}
        tITLEPAGEPosition="unset"
        fluentnavigation16FilledIOverflow="hidden"
      />
      <View style={[styles.itemsWrapper, styles.itemsFlexBox]}>
        <View style={[styles.items, styles.itemsFlexBox]}>
          <FilteredItemsContainer1 />
          <View style={styles.similarItemsWrapper}>
            <Text style={styles.similarItems}>SIMILAR ITEMS</Text>
          </View>
          <ItemContainer />
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
  similarItems: {
    fontSize: FontSize.size_3xs,
    fontWeight: "600",
    fontFamily: FontFamily.inter,
    color: Color.colorBlack,
    textAlign: "left",
    width: 124,
    height: 13,
  },
  similarItemsWrapper: {
    width: 325,
    flexDirection: "row",
    paddingTop: Padding.p_3xs,
    marginTop: 5,
    overflow: "hidden",
  },
  items: {
    paddingHorizontal: Padding.p_mid_5,
    paddingVertical: Padding.p_mini,
  },
  itemsWrapper: {
    width: 360,
    height: 676,
  },
  item: {
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

export default Item1;
