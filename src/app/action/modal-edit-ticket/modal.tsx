import { BtnPrimary } from "@/components/ui/btnPrimay";
import { Colors } from "@/constants/Colors";
import { storeTicket } from "@/store/storeTicket";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { getTicketById } from "@/service/getTicketById";
import React from "react";
import EditInitTicket from "@/components/forms/EditInitTicket";
import { updateTicket } from "@/service/updateTicket";

import { toast } from "sonner-native";

export default function ModalEditTicket() {
  const { modalEditVisible, setModalEditVisible } = storeTicket();

  const [loadedData, setLoadedData] = useState(undefined);
  const { control, handleSubmit, setValue } = useForm({ values: loadedData });
  const { id } = useLocalSearchParams();

  async function update(data: any) {
    const response = await updateTicket({
      id: Number(id),
      date: String(data.date),
      numberTicket: data.numberTicket,
      followed: data.followed,
      nameBusiness: data.nameBusiness,
      operator: data.operator,
      titleTicket: data.titleTicket,
    });
    if (response?.changes == 1) {
      toast.success("Atualizado com sucesso");
    }
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
    <ScrollView>
      <View style={styles.container}>
        <EditInitTicket control={control} setValue={setValue} />
        <BtnPrimary title="Atualizar" onPress={handleSubmit(update)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
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
  boxBtnModal: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
