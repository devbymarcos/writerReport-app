import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import TitleCheck from "./TitleCheck";
import { useForm } from "react-hook-form";
import StatusAndDataCatraca from "./ StatusAndDataCatraca";
import CleaningActions from "./CleaningActions";
import InspectionOfEssentialResources from "./InspectionOfEssentialResources";
import FaceReader from "./FaceReader";
import InterviewWithClient from "./InterviewWithClient";
import Conclusion from "../rep/Conclusion";
import { useLocalSearchParams, useRouter } from "expo-router";
import { registerTask } from "@/service/registerTask";

export default function Rep() {
  const { id } = useLocalSearchParams();
  const { push } = useRouter();
  const { control, handleSubmit } = useForm();

  function save(data: any) {
    registerTask({
      id_ticket: Number(id),
      content: JSON.stringify({ type: "corrective", ...data }),
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
