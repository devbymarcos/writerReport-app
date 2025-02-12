import { ArrowDown, Edit, Plus, Send, Timer } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import SubMenuModalPreventive from "@/components/app/SubMenuModalPreventive";
import { Colors } from "@/constants/Colors";
import { useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import { getTasksByIdTicket } from "@/service/getTasksByIdTicket";
import { storeTicket } from "@/store/storeTicket";
import ModalEditTicket from "@/components/forms/ModalEditTicket";
import ModalTimeTask from "@/components/forms/ModalTimeTask";

const renderItem = ({
  item,
}: {
  item: { id: number; name: string; content: any };
}) => {
  const content = JSON.parse(item.content); //TODO CONTINUAR DAQUI
  return (
    <View style={styles.item}>
      <Text style={styles.titleItem}>{content.titleCheck}</Text>
    </View>
  );
};

export default function Task() {
  const [modalVisible, setModalVisible] = useState(false);
  const { setModalEditVisible, setModalTime } = storeTicket();
  const [tasks, setTasks] = useState<any>(null);
  const { id, ticket } = useLocalSearchParams();
  const { push } = useRouter();

  function viewSend() {
    push(`/action/view?id=${id}`);
  }

  async function getTask() {
    const data = await getTasksByIdTicket(Number(id));
    setTasks(data);
  }

  useEffect(() => {
    getTask();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.boxTitle}>
          <Text style={styles.title}>Tarefas da Atividade {ticket} </Text>
        </View>

        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <SubMenuModalPreventive />
          <View style={styles.boxModalClose}>
            <Pressable
              style={styles.modalClose}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <ArrowDown color="#fff" />
            </Pressable>
          </View>
        </Modal>
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
          onPress={() => setModalVisible(!modalVisible)}
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
    padding: 20,
    paddingTop: 20,
    paddingBottom: 150,
    backgroundColor: Colors.bgPrimary,
  },
  boxTitle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  title: {
    width: "90%",
    fontSize: 20,
    fontWeight: "bold",
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
  boxModalClose: {
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#fff",
  },
  modalClose: {
    padding: 10,
    backgroundColor: Colors.btnPrimary,
    borderRadius: 99999,
  },
  btnEditTicket: {
    padding: 15,
    backgroundColor: Colors.btnSuccess,
    borderRadius: 10,
    alignItems: "center",
  },
});
