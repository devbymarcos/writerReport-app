import { Link } from "expo-router";
import { Plus } from "lucide-react-native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

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

      <Link href="/preventiva/task/modal" asChild>
        <TouchableOpacity style={styles.btnAdd} activeOpacity={0.8}>
          <Plus color="#fff" />
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  btnAdd: {
    position: "absolute",
    bottom: 100,
    right: 10,
    backgroundColor: "#008000",
    padding: 30,
    borderRadius: 9999,
  },
});
