import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Icon = (props) => {
  return (
    <TouchableOpacity style={{ ...props.iconStyle }} onPress={props.action}>
      <Ionicons name={props.name} size={props.size} color={props.color} />
    </TouchableOpacity>
  );
};

export default Icon;
