import EditInitTicket from "@/components/forms/preventiva/EditInitTicket";
import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

const list = [
  { id: 1, name: "Task 1" },
  { id: 2, name: "Task 2" },
  { id: 3, name: "Task 3" },
  { id: 4, name: "Task 4" },
  { id: 5, name: "Task 5" },
];

const renderItem = ({ item }: { item: { id: number; name: string } }) => (
  <View style={styles.item}>
    <Text style={styles.titleItem}>{item.name}</Text>
  </View>
);

export default function Task() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preventiva </Text>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },
  titleItem: {
    fontSize: 16,
  },
});
