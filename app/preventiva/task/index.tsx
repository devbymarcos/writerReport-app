import { ArrowDown, Eye, Plus } from "lucide-react-native";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import SubMenuModalPreventive from "./SubMenuModalPreventive";
import { Colors } from "@/constants/Colors";
import { useRouter, useLocalSearchParams } from "expo-router";
import React from "react";

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
  const [modalVisible, setModalVisible] = useState(false);
  const { id } = useLocalSearchParams();
  const { push } = useRouter();

  function viewSend() {
    push(`/view?id=${id}`);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Tarefas do ticket {id} </Text>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
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
});
