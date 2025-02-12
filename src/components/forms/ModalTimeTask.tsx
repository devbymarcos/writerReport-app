import { storeTicket } from "@/store/storeTicket";
import { Controller, useForm } from "react-hook-form";
import { Modal, StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import TimePicker from "@/components/forms/TimePicker";
import InputMultiplo from "@/components/ui/inputMultiplo";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import { ArrowDown } from "lucide-react-native";
import { Colors } from "@/constants/Colors";

export default function ModalTimeTask() {
  const { modalTime, setModalTime } = storeTicket();
  const { control, handleSubmit, setValue } = useForm();

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
        <Text style={styles.titleInitActiveEnd}>Incio e fim da atividade:</Text>
        <TimePicker
          control={control}
          setValue={setValue}
          label="Hora inicial:"
          name="initHour"
        />
        <TimePicker
          control={control}
          setValue={setValue}
          label="Hora Final:"
          name="endHour"
        />
        <Text style={styles.titleInitActiveEnd}>Tempo de pausa:</Text>
        <TimePicker
          control={control}
          setValue={setValue}
          label="Pausa total:"
          name="pauseTime"
        />
        <Controller
          control={control}
          name="justifyPause"
          render={({ field }) => (
            <InputMultiplo
              label="Justifique o tempo de pausa, caso exista:"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        <View style={styles.boxBtnModal}>
          <BtnPrimary
            title="Salvar"
            onPress={handleSubmit(updateTime)}
            width="80%"
          />
          <Pressable
            style={styles.modalClose}
            onPress={() => setModalTime(!modalTime)}
          >
            <ArrowDown color="#fff" />
          </Pressable>
        </View>
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
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  offView: {
    height: "30%",
  },
  titleInitActiveEnd: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
  modalClose: {
    padding: 10,
    backgroundColor: Colors.btnPrimary,
    borderRadius: 99999,
  },
  boxBtnModal: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
