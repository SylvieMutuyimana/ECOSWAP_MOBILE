import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TITLEPAGE from "../components/TITLEPAGE";
import CartContainer from "../components/CartContainer";
import WishlistContainer from "../components/WishlistContainer";
import SimilarItemsContainer from "../components/SimilarItemsContainer";
import NavCart from "../components/NavCart";
import { Padding, Border, Color } from "../GlobalStyles";

const CART = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.cart, styles.cartSpaceBlock]}>
      <TITLEPAGE
        hOME={`MY CART
`}
        tITLEPAGEPosition="unset"
        fluentnavigation16FilledIOverflow="hidden"
      />
      <View style={[styles.itemsParent, styles.cartSpaceBlock]}>
        <CartContainer />
        <WishlistContainer />
        <SimilarItemsContainer />
      </View>
      <NavCart
        navCartPosition="unset"
        onHOMEPress={() => navigation.navigate("HOME")}
        onHOMEPress1={() => navigation.navigate("PROFILE")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cartSpaceBlock: {
    paddingHorizontal: 0,
    alignItems: "center",
    overflow: "hidden",
  },
  itemsParent: {
    width: 360,
    height: 676,
    paddingVertical: Padding.p_mini,
  },
  cart: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.grey,
    flex: 1,
    width: "100%",
    height: 800,
    justifyContent: "center",
    paddingVertical: Padding.p_28xl,
  },
});

export default CART;
