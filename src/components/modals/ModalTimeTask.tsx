import { storeTicket } from "@/store/storeTicket";
import { Controller, useForm } from "react-hook-form";
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import TimePicker from "@/components/forms/TimePicker";
import InputMultiplo from "@/components/ui/inputMultiplo";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import { ArrowDown } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { updateTimeTicket } from "@/service/updateTimeTicket";
import { useLocalSearchParams } from "expo-router";
import { getTicketById } from "@/service/getTicketById";

export default function ModalTimeTask() {
  const { modalTime, setModalTime } = storeTicket();
  const [loadData, setLoadData] = useState(undefined);
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: { justifyPause: "00:00" },
    values: loadData,
  });
  const { id } = useLocalSearchParams();

  async function updateTime(data: any) {
    const response = await updateTimeTicket({
      id: Number(id),
      initHour: String(data.initHour),
      endHour: String(data.endHour),
      pauseTime: String(data.pauseTime),
      justifyPause: data.justifyPause,
    });
    // console.log(response);
    if (response?.changes) {
      ToastAndroid.showWithGravity("Registrado", 3000, ToastAndroid.TOP);
    }
  }

  async function getDataTicket() {
    const responseBd = await getTicketById(Number(id));
    console.log(responseBd);
    //@ts-ignore
    setLoadData(responseBd[0]);
  }

  useEffect(() => {
    getDataTicket();
  }, []);
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
      <ScrollView>
        <View style={styles.view}>
          <Text style={styles.titleInitActiveEnd}>
            Incio e fim da atividade:
          </Text>
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
      </ScrollView>
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
