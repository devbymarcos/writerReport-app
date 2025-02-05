import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function index() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>index{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
