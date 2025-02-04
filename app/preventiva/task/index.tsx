import { ArrowDown, Plus } from "lucide-react-native";
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
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preventiva </Text>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <Pressable
        style={styles.btnAdd}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Plus color="#fff" />
      </Pressable>

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
  btnAdd: {
    position: "absolute",
    bottom: 100,
    right: 10,
    backgroundColor: "#008000",
    padding: 20,
    borderRadius: 9999,
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
