import { Colors } from "@/constants/Colors";
import { deleteTicketAndTask } from "@/service/deleteTicketAndTask";
import { getAllTicket, IResponse } from "@/service/getAllTicket";
import { storeTicket } from "@/store/storeTicket";
import { Link } from "expo-router";
import { FilePenLine, Trash } from "lucide-react-native";
import React, { memo, useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

const ListItem = memo(
  ({
    name,
    id,
    ticket,
    onDelete,
  }: {
    name: string;
    id: number;
    ticket: string;
    onDelete: (id: number) => void;
  }) => {
    const Delete = useCallback(
      (progress: any, dragX: any) => {
        return (
          <Pressable style={styles.iconTrash} onPress={() => onDelete(id)}>
            <Text>
              <Trash color="#fff" />
            </Text>
          </Pressable>
        );
      },
      [id, onDelete]
    );

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
  }
);

const List = () => {
  const [dataSql, setDataSql] = useState<IResponse[]>();
  const { loadPage, setLoadPage } = storeTicket();

  const handleDelete = useCallback(
    async (id: number) => {
      try {
        await deleteTicketAndTask({ id });
        // Atualiza o estado localmente sem precisar recarregar tudo
        setDataSql((prev) => prev?.filter((item) => item.id !== id));
        // Atualiza o loadPage depois da atualização local
        setLoadPage(!loadPage);
      } catch (error) {
        console.error("Erro ao deletar:", error);
      }
    },
    [loadPage, setLoadPage]
  );

  const listAll = useCallback(async () => {
    const response = await getAllTicket();
    setDataSql(response as IResponse[]);
  }, []);

  useEffect(() => {
    listAll();
  }, [loadPage]);

  const ItemSeparator = useCallback(
    () => <View style={styles.separator} />,
    []
  );

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
            onDelete={handleDelete}
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
