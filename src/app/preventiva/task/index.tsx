import { ArrowDown, Edit, Plus } from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import SubMenuModalPreventive from "./SubMenuModalPreventive";
import { Colors } from "@/constants/Colors";
import { useRouter, useLocalSearchParams } from "expo-router";
import React from "react";
import { getTasksByIdTicket } from "@/service/getTasksByIdTicket";
import EditInitTicket from "@/components/forms/baseTicket/EditInitTicket";
import { storeTicket } from "@/store/storeTicket";

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
  const { setModalEditVisible } = storeTicket();

  const [tasks, setTasks] = useState<any>(null);
  const { id, ticket } = useLocalSearchParams();
  const { push } = useRouter();

  function viewSend() {
    push(`/view?id=${id}`);
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
          <Text style={styles.title}>Tarefas do ticket {ticket} </Text>
          <Pressable
            style={styles.btnEditTicket}
            onPress={() => {
              setModalEditVisible(true);
            }}
          >
            <Edit color="#000" />
          </Pressable>
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
        <EditInitTicket />
      </View>
      <View style={styles.boxBtnAction}>
        <Pressable
          style={[styles.btnAction, { backgroundColor: Colors.btnSuccess }]}
          onPress={viewSend}
        >
          {/* <Eye color="#fff" /> */}
          <Text style={{ color: "#fff" }}>Ver e Enviar</Text>
        </Pressable>
        <Pressable
          style={styles.btnAction}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Plus color="#fff" />
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
  },
  boxTitle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
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
    width: "100%",
    position: "absolute",
    bottom: 70,
    flexDirection: "row",
  },
  btnAction: {
    backgroundColor: Colors.btnPrimary,
    padding: 20,
    width: "50%",
    alignItems: "center",
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
    borderRadius: 5,
  },
  btnEditTicket: {
    padding: 10,
  },
});
