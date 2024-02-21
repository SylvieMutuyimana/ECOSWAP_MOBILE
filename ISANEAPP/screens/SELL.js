import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TITLEPAGE from "../components/TITLEPAGE";
import ItemContainer1 from "../components/ItemContainer1";
import SoldItemsContainer from "../components/SoldItemsContainer";
import SaleItemsContainer from "../components/SaleItemsContainer";
import NavUPLOAD from "../components/NavUPLOAD";
import { Padding, Border, Color } from "../GlobalStyles";

const SELL = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.sell, styles.sellSpaceBlock]}>
      <TITLEPAGE
        hOME="SELL"
        tITLEPAGEPosition="unset"
        fluentnavigation16FilledIOverflow="hidden"
      />
      <View style={[styles.newItesmParent, styles.sellSpaceBlock]}>
        <ItemContainer1 />
        <View style={styles.items}>
          <SoldItemsContainer />
          <SaleItemsContainer />
        </View>
      </View>
      <NavUPLOAD
        navUPLOADPosition="unset"
        onHOMEPress={() => navigation.navigate("HOME")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sellSpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  items: {
    marginTop: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  newItesmParent: {
    width: 360,
    height: 676,
    paddingVertical: Padding.p_mini,
  },
  sell: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    justifyContent: "center",
    paddingVertical: Padding.p_28xl,
  },
});

export default SELL;
