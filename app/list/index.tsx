import { Colors } from "@/constants/Colors";
import { getAllTicket, IResponse } from "@/service/getAllTicket";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListItem = ({ name, id }: { name: string; id: number }) => (
  <Link style={styles.item} href={`/preventiva/task?id=${id}`}>
    <Text style={styles.title}>{name}</Text>
  </Link>
);

const ListScreen = () => {
  const [dataSql, setDataSql] = useState<IResponse[]>();

  async function listAll() {
    const response = await getAllTicket();
    //@ts-ignore
    setDataSql(response);
    console.log(response);
  }

  useEffect(() => {
    listAll();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={dataSql}
        renderItem={({ item }) => (
          <ListItem name={item.titleTicket} id={item.id} />
        )}
        keyExtractor={(item) => String(item.id)}
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
