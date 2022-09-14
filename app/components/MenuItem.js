import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Text,
} from "react-native";
import React from "react";

const MenuItem = (props) => {
  return (
    <TouchableHighlight onPress={props.selectDish}>
      <View style={styles.Container}>
        {/* {props.item.Image && ( */}
        <Image style={styles.image} source={{ uri: props.item.image }} />
        {/* )} */}
        <View style={styles.details}>
          <Text style={styles.name}>{props.item.name}</Text>
          <Text style={styles.description} numberOfLines={3}>
            {props.item.description}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  Container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  details: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 80,
    height: 80,
  },
  name: {
    fontWeight: "500",
  },
  description: {
    color: "#6e6969",
  },
});

export default MenuItem;
