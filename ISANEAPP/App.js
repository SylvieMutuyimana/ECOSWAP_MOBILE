const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import Welcome from "./screens/Welcome";
import HOME from "./screens/HOME";
import Item from "./screens/Item";
import Item1 from "./screens/Item1";
import CATEGORIES from "./screens/CATEGORIES";
import CATEGORIES1 from "./screens/CATEGORIES1";
import CATEGORIES2 from "./screens/CATEGORIES2";
import PROFILE from "./screens/PROFILE";
import CART from "./screens/CART";
import SELL from "./screens/SELL";
import About from "./components/About";
import Login from "./screens/Login";
import CreateAccount from "./screens/CreateAccount";
import Pin from "./screens/Pin";
import Menu from "./components/Menu";
import SelluploadItems from "./screens/SelluploadItems";
import TITLEPAGE from "./components/TITLEPAGE";
import NavCategories from "./components/NavCategories";
import HomeAppliances from "./components/HomeAppliances";
import NavHome from "./components/NavHome";
import NavPROFILE from "./components/NavPROFILE";
import NavCart from "./components/NavCart";
import NavUPLOAD from "./components/NavUPLOAD";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HOME"
              component={HOME}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item"
              component={Item}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Item1"
              component={Item1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CATEGORIES"
              component={CATEGORIES}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CATEGORIES1"
              component={CATEGORIES1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CATEGORIES2"
              component={CATEGORIES2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PROFILE"
              component={PROFILE}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CART"
              component={CART}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SELL"
              component={SELL}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="About"
              component={About}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pin"
              component={Pin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelluploadItems"
              component={SelluploadItems}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
