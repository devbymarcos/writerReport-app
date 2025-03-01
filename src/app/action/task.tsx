import { Edit, Plus, Send, Timer } from "lucide-react-native";
import { memo, useCallback, useEffect, useState, useMemo } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { useRouter, useLocalSearchParams, Link } from "expo-router";
import React from "react";
import { getTasksByIdTicket } from "@/service/getTasksByIdTicket";
import { storeTicket } from "@/store/storeTicket";
import { getTaskRoute, TaskType } from "@/shared/routes";

import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { Trash } from "lucide-react-native";
import { deleteTask } from "@/service/deleteTasks";
import { getTicketAndTasks } from "@/service/getTicketAndTasks";
import { toast } from "sonner-native";

interface renderItemProps {
  item: { id: string; id_ticket: string; name: string; content: any };
  removeTask: (id: number) => void;
}

const RenderItem = memo(({ item, removeTask }: renderItemProps) => {
  const content = useMemo(() => JSON.parse(item.content), [item.content]);

  const Delete = useCallback(() => {
    const handlePress = () => removeTask(Number(item.id));

    return (
      <Pressable style={styles.iconTrash} onPress={handlePress}>
        <Text>
          <Trash color="#fff" />
        </Text>
      </Pressable>
    );
  }, [removeTask, item.id]);

  const renderRightActions = useCallback(() => {
    return <Delete />;
  }, [Delete]);

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <Link
        style={styles.item}
        href={getTaskRoute(content.type as TaskType, item.id, item.id_ticket)}
      >
        <Text style={styles.titleItem}>{content.titleCheck}</Text>
      </Link>
    </Swipeable>
  );
});

export default function Task() {
  const [tasks, setTasks] = useState<any>(null);
  const { id, ticket } = useLocalSearchParams();
  const { setLoadPage, loadPage } = storeTicket();
  const { replace } = useRouter();

  const viewSend = useCallback(async () => {
    //@ts-ignore
    if (tasks[0].content == null) {
      toast.warning("Cadastre uma tarefa");
      return;
    }
    replace(`/action/view-report?id=${id}`);
  }, [id, tasks]);

  async function getTask() {
    const data = await getTasksByIdTicket(Number(id));
    setTasks(data);
  }

  const removeTask = useCallback(async (id: number) => {
    const response = await deleteTask({ id: id });
    setLoadPage(!loadPage);
  }, []);

  useEffect(() => {
    getTask();
  }, [loadPage]);
  const ItemSeparator = () => <View style={styles.separator} />;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Tarefas da Atividade {ticket} </Text>
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <RenderItem item={item} removeTask={removeTask} />
          )}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <View style={styles.boxBtnAction}>
        <Link
          style={[styles.btnEditTicket]}
          href={`/action/modal-edit-ticket/modal?id=${id}`}
        >
          <Edit color={Colors.colorIconsLight} />
        </Link>
        <Link
          style={[styles.btnAction, { backgroundColor: Colors.btnSuccess }]}
          href={`/action/modal-timetask/modal?id=${id}`}
        >
          <Timer color={Colors.colorIconsLight} />
        </Link>
        <Pressable
          style={[styles.btnAction, { backgroundColor: Colors.btnSuccess }]}
          onPress={viewSend}
        >
          <Send color={Colors.colorIconsLight} />
        </Pressable>
        <Link
          style={[styles.btnAction]}
          href={`/action/modal-submenu-task/modal?id=${id}`}
        >
          <Plus color={Colors.colorIconsLight} />
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
    backgroundColor: Colors.bgPrimary,
  },
  boxTitle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  title: {
    width: "90%",
    fontSize: 16,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
  },
  titleItem: {
    fontSize: 16,
  },
  boxBtnAction: {
    position: "absolute",
    right: 10,
    bottom: 150,
    flexDirection: "column",
    gap: 10,
  },
  btnAction: {
    backgroundColor: Colors.btnPrimary,
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  btnEditTicket: {
    padding: 15,
    backgroundColor: Colors.btnSuccess,
    borderRadius: 10,
    alignItems: "center",
  },
  separator: {
    height: 1,
    backgroundColor: "#ccc",
  },
  iconTrash: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    backgroundColor: "red",
  },
});
