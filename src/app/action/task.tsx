import { Edit, Plus, Send, Timer } from "lucide-react-native";
import { memo, useCallback, useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import SubMenuModalPreventive from "@/components/app/SubMenuModalPreventive";
import { Colors } from "@/constants/Colors";
import { useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import { getTasksByIdTicket } from "@/service/getTasksByIdTicket";
import { storeTicket } from "@/store/storeTicket";
import ModalEditTicket from "@/components/modals/ModalEditTicket";
import ModalTimeTask from "@/components/modals/ModalTimeTask";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";
import { Trash } from "lucide-react-native";
import { deleteTask } from "@/service/deleteTasks";
import { getTicketAndTasks } from "@/service/getTicketAndTasks";
import { toast } from "sonner-native";

interface renderItemProps {
  item: { id: number; name: string; content: any };
}

const RenderItem = memo(({ item }: renderItemProps) => {
  const content = JSON.parse(item.content);
  const { setLoadPage, loadPage } = storeTicket();
  async function removeTask() {
    await deleteTask({ id: Number(item.id) });
    setLoadPage(!loadPage);
  }

  const Delete = useCallback(
    (progress: any, dragX: any) => {
      return (
        <Pressable style={styles.iconTrash} onPress={removeTask}>
          <Text>
            <Trash color="#fff" />
          </Text>
        </Pressable>
      );
    },
    [removeTask]
  );

  return (
    <Swipeable renderRightActions={Delete}>
      <View style={styles.item}>
        <Text style={styles.titleItem}>{content.titleCheck}</Text>
      </View>
    </Swipeable>
  );
});

export default function Task() {
  const { setModalEditVisible, setModalTime, modalSubMenu, setModalSubMenu } =
    storeTicket();
  const [tasks, setTasks] = useState<any>(null);
  const { id, ticket } = useLocalSearchParams();
  const { push } = useRouter();

  const viewSend = useCallback(async () => {
    const data = await getTicketAndTasks(Number(id));
    //@ts-ignore
    if (data[0].content == null) {
      toast.warning("Cadastre uma tarefa");
      return;
    }
    push(`/action/view?id=${id}`);
  }, [id]);

  async function getTask() {
    const data = await getTasksByIdTicket(Number(id));
    setTasks(data);
  }

  useEffect(() => {
    getTask();
  }, []);
  const ItemSeparator = () => <View style={styles.separator} />;
  return (
    <>
      <View style={styles.container}>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Tarefas da Atividade {ticket} </Text>
        </View>

        <FlatList
          data={tasks}
          renderItem={({ item }) => <RenderItem item={item} />}
          ItemSeparatorComponent={ItemSeparator}
          keyExtractor={(item) => item.id.toString()}
        />

        <SubMenuModalPreventive />
      </View>
      <ModalEditTicket />
      <ModalTimeTask />
      <View style={styles.boxBtnAction}>
        <Pressable
          style={[styles.btnEditTicket]}
          onPress={() => {
            setModalEditVisible(true);
          }}
        >
          <Edit color={Colors.colorIconsLight} />
        </Pressable>
        <Pressable
          style={[styles.btnAction, { backgroundColor: Colors.btnSuccess }]}
          onPress={() => setModalTime(true)}
        >
          <Timer color={Colors.colorIconsLight} />
        </Pressable>
        <Pressable
          style={[styles.btnAction, { backgroundColor: Colors.btnSuccess }]}
          onPress={viewSend}
        >
          <Send color={Colors.colorIconsLight} />
        </Pressable>
        <Pressable
          style={[styles.btnAction]}
          onPress={() => setModalSubMenu(!modalSubMenu)}
        >
          <Plus color={Colors.colorIconsLight} />
        </Pressable>
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
