import React from "react";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import DishDetailScreen from "./screens/DishDetailScreen";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderTitle } from "react-navigation-stack";
import Icon from "./components/Icon";
import { useNavigation } from "@react-navigation/native";
import FavouritesScreen from "./screens/FavouritesScreen";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Icon
            action={() => navigation.toggleDrawer()}
            name="ios-menu"
            color="black"
            size={24}
            iconStyle={{
              paddingRight: 15,
            }}
          />
        ),
        headerStyle: {
          backgroundColor: "#F53B50",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontStyle: "bold",
        },
      }}
    >
      <Stack.Screen name="Product" component={MenuScreen} />
      <Stack.Screen
        name="Dish Detail"
        component={DishDetailScreen}
        options={({ route }) => ({ title: route.params.dish.name })}
      />
    </Stack.Navigator>
  );
};

const FavStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => (
          <Icon
            action={() => navigation.toggleDrawer()}
            name="ios-menu"
            color="black"
            size={24}
            iconStyle={{
              paddingRight: 15,
            }}
          />
        ),
        headerStyle: {
          backgroundColor: "#F53B50",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontStyle: "bold",
        },
      }}
    >
      <Stack.Screen name="Favourites" component={FavouritesScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="All Products" component={MenuStack} />
      <Drawer.Screen name="My Cart" component={FavStack} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
