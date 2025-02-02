import { Colors } from "@/constants/Colors";
import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const data = [
  { id: "1", name: "2240 worksystem" },
  { id: "2", name: "10 Rocha" },
  { id: "4", name: "789  worksystem" },
  { id: "5", name: "789  worksystem" },
  { id: "6", name: "789  worksystem" },
];

const ListItem = ({ name }: { name: string }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
  </View>
);

const ListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem name={item.name} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
    padding: 20,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: 16,
  },
});

export default ListScreen;
