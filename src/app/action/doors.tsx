import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { registerTask } from "@/service/registerTask";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import TitleCheck from "@/components/forms/TitleCheck";
import Conclusion from "@/components/forms/doors/Conclusion";
import ElectromagneticLock from "@/components/forms/doors/ElectromagneticLock";
import DoorSpring from "@/components/forms/doors/DoorSpring";
import DoorInspect from "@/components/forms/doors/DoorInspect";
import CardReader from "@/components/forms/doors/CardReader";
import PacriKey from "@/components/forms/doors/PacriKey";
import EmergencyButton from "@/components/forms/doors/EmergencyButton";
import CableManagement from "@/components/forms/doors/CableManagement";
import AccessControlPanel from "@/components/forms/doors/AccessControlPanel";
import PowerSource from "@/components/forms/doors/PowerSource";

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
    paddingBottom: 150,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
