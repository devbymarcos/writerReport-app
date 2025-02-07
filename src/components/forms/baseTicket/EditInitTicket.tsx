import { BtnPrimary } from "@/components/ui/btnPrimay";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import { Colors } from "@/constants/Colors";
import { storeTicket } from "@/store/storeTicket";
import { ArrowDown, Calendar } from "lucide-react-native";
import { useState } from "react";
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

export default function EditInitTicket() {
  const { date, setDate, modalEditVisible, setModalEditVisible } =
    storeTicket();
  const [mode, setMode] = useState<"date" | "time">("date");
  const [show, setShow] = useState(false);
  const { control, handleSubmit } = useForm();

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode: any) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  function update(data: any) {
    console.log(data);
  }
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
        <Card style={{ flex: 1 }}>
          <View style={styles.boxModalClose}>
            <Text style={styles.title}>Atualize o ticket:</Text>
            <Pressable
              style={styles.modalClose}
              onPress={() => setModalEditVisible(!modalEditVisible)}
            >
              <ArrowDown color="#fff" />
            </Pressable>
          </View>
          <Controller
            control={control}
            name="numberTicket"
            render={({ field }) => (
              <Input
                label="Numero ticket:"
                value={field.value}
                onChangeText={field.onChange}
                keyboardType="phone-pad"
              />
            )}
          />

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
          <View style={styles.boxDate}>
            <View style={{ width: "90%" }}>
              <Input label="Data:" value={date.toLocaleDateString()} />
            </View>
            <View>
              <Pressable onPress={showDatepicker}>
                <Calendar color="#000" />
              </Pressable>
            </View>
          </View>
          <Controller
            control={control}
            name="titleTicket"
            render={({ field }) => (
              <Input
                label="Titulo ticket:"
                value={field.value}
                onChangeText={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="nameBusiness"
            render={({ field }) => (
              <Input
                label="Empresa Contratante:"
                value={field.value}
                onChangeText={field.onChange}
              />
            )}
          />
          <Controller
            control={control}
            name="followed"
            render={({ field }) => (
              <Input
                label="Quem acompanhou ou liberou o trabalho:"
                value={field.value}
                onChangeText={field.onChange}
              />
            )}
          />
          <View style={{ flexDirection: "row", gap: 5 }}>
            <View style={{ width: "50%" }}>
              <Controller
                control={control}
                name="initTime"
                render={({ field }) => (
                  <Input
                    label="Hora inicial:"
                    value={field.value}
                    onChangeText={field.onChange}
                  />
                )}
              />
            </View>
            <View style={{ width: "50%" }}>
              <Controller
                control={control}
                name="endTime"
                render={({ field }) => (
                  <Input
                    label="Hora Final:"
                    value={field.value}
                    onChangeText={field.onChange}
                  />
                )}
              />
            </View>
          </View>
          <Controller
            control={control}
            name="pauseTime"
            render={({ field }) => (
              <Input
                label="Tempo de pausa:"
                value={field.value}
                onChangeText={field.onChange}
              />
            )}
          />
          <BtnPrimary title="Atualizar" onPress={handleSubmit(update)} />
        </Card>
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
