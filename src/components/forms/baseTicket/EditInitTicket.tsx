import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import { Colors } from "@/constants/Colors";
import { storeTicket } from "@/store/storeTicket";
import { ArrowDown } from "lucide-react-native";

import { Text, StyleSheet, Modal, View, Pressable } from "react-native";

export default function EditInitTicket() {
  const { modalEditVisible, setModalEditVisible } = storeTicket();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalEditVisible}
      onRequestClose={() => {
        setModalEditVisible(!modalEditVisible);
      }}
    >
      <Card>
        <Text style={styles.title}>Dados Iniciais:</Text>
        <Input label="Numero ticket:" keyboardType="numeric" />
        <Input label="Data:" />
        <Input label="Titulo ticket:" />
        <Input label="Empresa Contratante:" />
        <Input label="Quem acompanhou ou liberou o trabalho:" />
      </Card>
      <View style={styles.boxModalClose}>
        <Pressable
          style={styles.modalClose}
          onPress={() => setModalEditVisible(!modalEditVisible)}
        >
          <ArrowDown color="#fff" />
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,

    fontSize: 20,
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
