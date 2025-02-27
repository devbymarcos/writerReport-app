import { storeTicket } from "@/store/storeTicket";
import { Controller, useForm } from "react-hook-form";
import {
  Modal,
  StyleSheet,
  Text,
  ScrollView,
  ToastAndroid,
  View,
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
import Card from "@/components/ui/card";
import { toast } from "sonner-native";
export default function ModalTimeTask() {
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
      toast.success("Atualizado com sucesso");
    }
  }

  async function getDataTicket() {
    const responseBd = await getTicketById(Number(id));

    //@ts-ignore
    setLoadData(responseBd[0]);
  }

  useEffect(() => {
    getDataTicket();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
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
        </Card>
        <BtnPrimary
          title="Salvar"
          onPress={handleSubmit(updateTime)}
          width="80%"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
