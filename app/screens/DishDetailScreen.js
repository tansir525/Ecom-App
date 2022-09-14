import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "../components/Icon";
import { connect } from "react-redux";
import { addToFavourites } from "../redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites,
  };
};

const mapDishpatchToProps = (dispatch) => {
  return {
    addToFavourites: (dish) => dispatch(addToFavourites(dish)),
  };
};

const DishDetailScreen = (props) => {
  const dish = props.route.params.dish;

  const isFavourite = props.favourites.some((item) => item.id === dish.id);

  const markFavourite = (dish) => {
    if (isFavourite) {
      alert("Already Added to Cart!");
    } else {
      props.addToFavourites(dish);
    }
  };

  let iconName = "ios-cart-outline";
  if (isFavourite) {
    iconName = "ios-cart";
  }

  return (
    <View>
      <Image style={styles.image} source={{ uri: dish.image }} />
      <View style={styles.details}>
        {/* <Text style={styles.name}>{dish.name}</Text> */}
        <Text>{dish.description}</Text>
      </View>
      <Text style={styles.cartText}>
        ADD TO CART{" "}
        <Icon
          name={iconName}
          color="#F53B50"
          size={39}
          iconStyle={{}}
          action={() => markFavourite(dish)}
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  name: {
    fontSize: 20,
    fontWeight: "500",
  },
  details: {
    padding: 10,
    paddingTop: 20,
  },
  cartText: {
    fontSize: 20,
    fontWeight: "800",
  },
});

export default connect(mapStateToProps, mapDishpatchToProps)(DishDetailScreen);
