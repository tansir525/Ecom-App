import { View, Text, Image, StyleSheet, Pressable, Alert } from "react-native";
import React from "react";

import { connect } from "react-redux";
import { removeFavourite } from "../redux/actionCreators";

const mapDispatchToProps = (dispatch) => {
  return {
    removeFavourite: (dish) => dispatch(removeFavourite(dish)),
  };
};

const Card = (props) => {
  const removeFav = () => {
    Alert.alert(
      "Delete Item?",
      "Are you sure you wish to delete item" + props.item.name + "?",
      [
        {
          text: "cancel",
          onPress: () => console.log("cancel"),
          style: "cancel",
        },
        {
          text: "ok",
          onPress: () => props.removeFavourite(props.item),
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <Pressable onLongPress={() => removeFav()}>
      <View style={styles.card}>
        <Image source={{ uri: props.item.image }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.title}>{props.item.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    overflow: "hidden",
    margin: 20,
    elevation: 5,
  },
  details: {
    padding: 25,
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    marginBottom: 7,
    fontSize: 20,
  },
});

export default connect(null, mapDispatchToProps)(Card);
