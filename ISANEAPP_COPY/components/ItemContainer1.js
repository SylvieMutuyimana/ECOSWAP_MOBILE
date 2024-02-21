import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Padding, Border } from "../GlobalStyles";

const ItemContainer1 = () => {
  return (
    <View style={styles.newItesm}>
      <Text style={styles.uploadAndSell}>Upload and sell new items</Text>
      <View style={styles.uploadNewItem}>
        <View style={styles.upload}>
          <Image
            style={styles.bxcloudUploadIcon}
            contentFit="cover"
            source={require("../assets/bxcloudupload.png")}
          />
          <Text style={styles.newItem}>New item</Text>
        </View>
        <View style={styles.itemsSaleOverview}>
          <Text style={styles.statusTypo}>Sold item: 3</Text>
          <Text style={[styles.status1, styles.statusTypo]}>
            Items for sale: 2
          </Text>
          <Text style={[styles.status1, styles.statusTypo]}>Reviews: 1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statusTypo: {
    height: 14,
    fontSize: FontSize.size_xs,
    width: 124,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
  },
  uploadAndSell: {
    fontSize: FontSize.size_3xs,
    height: 16,
    width: 124,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
  },
  bxcloudUploadIcon: {
    width: 60,
    height: 60,
    overflow: "hidden",
  },
  newItem: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    width: 88,
    height: 23,
    color: Color.colorBlack,
    fontFamily: FontFamily.inter,
  },
  upload: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  status1: {
    marginTop: 10,
  },
  itemsSaleOverview: {
    paddingHorizontal: Padding.p_7xl,
    paddingVertical: Padding.p_2xs,
    marginLeft: 20,
    overflow: "hidden",
  },
  uploadNewItem: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.white,
    flexDirection: "row",
    paddingHorizontal: Padding.p_mini,
    paddingVertical: 0,
    marginTop: 5,
    overflow: "hidden",
  },
  newItesm: {
    overflow: "hidden",
  },
});

export default ItemContainer1;
