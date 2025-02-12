import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import TitleCheck from "@/components/forms/catraca/TitleCheck";
import { useForm } from "react-hook-form";
import StatusAndDataCatraca from "@/components/forms/catraca/ StatusAndDataCatraca";
import CleaningActions from "@/components/forms/catraca/CleaningActions";
import InspectionOfEssentialResources from "@/components/forms/catraca/InspectionOfEssentialResources";
import FaceReader from "@/components/forms/catraca/FaceReader";
import InterviewWithClient from "@/components/forms/catraca/InterviewWithClient";
import Conclusion from "@/components/forms/rep/Conclusion";
import { useLocalSearchParams, useRouter } from "expo-router";
import { registerTask } from "@/service/registerTask";
import InstallationConditions from "@/components/forms/catraca/InstallationConditions";

export default function Catraca() {
  const { id } = useLocalSearchParams();
  const { push } = useRouter();
  const { control, handleSubmit } = useForm();

  function save(data: any) {
    registerTask({
      id_ticket: Number(id),
      content: JSON.stringify({ type: "catraca", ...data }),
    });
    push(`/action/task?id=${id}`);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleForm title="catraca preventiva" />
        <TitleCheck control={control} />
        <StatusAndDataCatraca control={control} />
        <CleaningActions control={control} />
        <InspectionOfEssentialResources control={control} />
        <InstallationConditions control={control} />
        <FaceReader control={control} />
        <InterviewWithClient control={control} />
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
