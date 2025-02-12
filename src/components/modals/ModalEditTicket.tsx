import { BtnPrimary } from "@/components/ui/btnPrimay";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import { Colors } from "@/constants/Colors";
import { storeTicket } from "@/store/storeTicket";
import { ArrowDown, Calendar } from "lucide-react-native";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Controller } from "react-hook-form";
import {
  Text,
  StyleSheet,
  Modal,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getTicketById } from "@/service/getTicketById";
import React from "react";
import EditInitTicket from "@/components/forms/EditInitTicket";

export default function ModalEditTicket() {
  const { modalEditVisible, setModalEditVisible } = storeTicket();

  const [loadedData, setLoadedData] = useState(undefined);
  const { control, handleSubmit, setValue } = useForm({ values: loadedData });
  const { id } = useLocalSearchParams();

  function update(data: any) {
    console.log(data);
  }

  async function getTicket() {
    const responseBd = await getTicketById(Number(id));
    //@ts-ignore
    setLoadedData(responseBd[0]);
  }

  useEffect(() => {
    getTicket();
  }, []);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalEditVisible}
      onRequestClose={() => {
        setModalEditVisible(!modalEditVisible);
      }}
    >
      <ScrollView>
        <EditInitTicket control={control} setValue={setValue} />
        <BtnPrimary title="Atualizar" onPress={handleSubmit(update)} />
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
    fontSize: 20,
  },
  boxModalClose: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  modalClose: {
    padding: 10,
    backgroundColor: Colors.btnPrimary,
    borderRadius: 9999,
  },
  boxDate: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
