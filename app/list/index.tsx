import { Colors } from "@/constants/Colors";
import { deleteTicketAndTask } from "@/service/deleteTicketAndTask";
import { getAllTicket, IResponse } from "@/service/getAllTicket";
import { storeTicket } from "@/store/storeTicket";
import { Link } from "expo-router";
import { Eye, Trash } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";

const ListItem = ({ name, id }: { name: string; id: number }) => {
  const { setLoadPage, loadPage } = storeTicket();
  async function deleteTicket() {
    await deleteTicketAndTask({ id });
    setLoadPage(!loadPage);
  }

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.boxIcons}>
        <Link style={styles.iconView} href={`/preventiva/task?id=${id}`}>
          <Eye color="#000" />
        </Link>
        <Pressable style={styles.iconTash} onPress={deleteTicket}>
          <Trash color="#000" />
        </Pressable>
      </View>
    </View>
  );
};

const ListScreen = () => {
  const [dataSql, setDataSql] = useState<IResponse[]>();
  const { loadPage } = storeTicket();

  async function listAll() {
    const response = await getAllTicket();
    //@ts-ignore
    setDataSql(response);
    console.log(response);
  }

  useEffect(() => {
    listAll();
  }, [loadPage]);
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 8,
    borderRadius: 5,
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: 16,
  },
  boxIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
  },
  iconView: {
    padding: 10,
    borderRadius: 6,
  },
  iconTash: {
    padding: 10,
    borderRadius: 6,
  },
});

export default ListScreen;
