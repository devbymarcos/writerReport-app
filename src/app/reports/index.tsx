import { Colors } from "@/constants/Colors";
import { deleteTicketAndTask } from "@/service/deleteTicketAndTask";
import { getAllTicket, IResponse } from "@/service/getAllTicket";
import { storeTicket } from "@/store/storeTicket";
import { Link } from "expo-router";
import { FilePenLine, Trash } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

const ListItem = ({
  name,
  id,
  ticket,
}: {
  name: string;
  id: number;
  ticket: string;
}) => {
  const { setLoadPage, loadPage } = storeTicket();

  async function deleteTicket() {
    await deleteTicketAndTask({ id });
    setLoadPage(!loadPage);
  }

  const Delete = (progress: any, dragX: any) => {
    return (
      <Pressable style={styles.iconTrash} onPress={deleteTicket}>
        <Text>
          <Trash color="#fff" />
        </Text>
      </Pressable>
    );
  };

  return (
    <Swipeable renderRightActions={Delete}>
      <View style={styles.item}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.boxIcons}>
          <Link
            style={styles.iconView}
            href={`/action/task?id=${id}&ticket=${ticket}`}
            replace
          >
            <FilePenLine color="#000" />
          </Link>
        </View>
      </View>
    </Swipeable>
  );
};

const List = () => {
  const [dataSql, setDataSql] = useState<IResponse[]>();
  const { loadPage } = storeTicket();

  async function listAll() {
    const response = await getAllTicket();
    //@ts-ignore
    setDataSql(response);
  }

  useEffect(() => {
    listAll();
  }, [loadPage]);

  const ItemSeparator = () => <View style={styles.separator} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={dataSql}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (
          <ListItem
            name={`${item.numberTicket} - ${item.titleTicket}`}
            id={item.id}
            ticket={item.numberTicket}
          />
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
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,

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
  iconTrash: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    backgroundColor: "red",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
  },
});

export default List;
