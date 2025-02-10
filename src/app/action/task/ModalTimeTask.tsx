import { storeTicket } from "@/store/storeTicket";
import { Controller, useForm } from "react-hook-form";
import { Modal, StyleSheet, View } from "react-native";
import React from "react";
import InputMultiplo from "@/components/ui/inputMultiplo";
import Time from "@/components/forms/baseTicket/Time";
import TimePause from "@/components/forms/baseTicket/TimePause";

export default function ModalTimeTask() {
  const { modalTime, setModalTime } = storeTicket();
  const { control, handleSubmit } = useForm();

  function updateTime(data: any) {
    console.log(data);
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalTime}
      onRequestClose={() => {
        setModalTime(!modalTime);
      }}
    >
      <View style={styles.offView}></View>
      <View style={styles.view}>
        <Time control={control} />
        <TimePause control={control} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  offView: {
    flex: 1,
  },
});
