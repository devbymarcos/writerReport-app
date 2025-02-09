import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { registerTask } from "@/service/registerTask";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import TitleCheck from "@/components/forms/TitleCheck";
import CleaningOcr from "./ElectromagneticLock";
import Conclusion from "./Conclusion";
import ElectromagneticLock from "./ElectromagneticLock";
import DoorSpring from "./DoorSpring";
import DoorInspect from "./DoorInspect";
import CardReader from "./CardReader";
import PacriKey from "./PacriKey";
import EmergencyButton from "./EmergencyButton";
import CableManagement from "./CableManagement";
import AccessControlPanel from "./AccessControlPanel";
import PowerSource from "./PowerSource";

export default function Rep() {
  const { id } = useLocalSearchParams();
  const { push } = useRouter();
  const { control, handleSubmit } = useForm();

  function save(data: any) {
    registerTask({
      id_ticket: Number(id),
      content: JSON.stringify({ type: "doors", ...data }),
    });
    push(`/action/task?id=${id}`);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleForm title="Portas preventiva" />
        <TitleCheck control={control} />
        <ElectromagneticLock control={control} />
        <DoorSpring control={control} />
        <DoorInspect control={control} />
        <CardReader control={control} />
        <PacriKey control={control} />
        <EmergencyButton control={control} />
        <CableManagement control={control} />
        <AccessControlPanel control={control} />
        <PowerSource control={control} />
        <Conclusion control={control} />
        <View>
          <BtnPrimary title="Salvar" onPress={handleSubmit(save)} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgPrimary,
    padding: 20,
    paddingBottom: 100,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
