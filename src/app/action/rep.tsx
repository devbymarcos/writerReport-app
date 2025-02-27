import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import StatusAndData from "@/components/forms/rep/StatusAndData";
import CleaningActions from "@/components/forms/rep/CleaningActions";
import InspectionOfEssentialResources from "@/components/forms/rep/InspectionOfEssentialResources";
import InstallationConditions from "@/components/forms/rep/InstallationConditions";
import InterviewWithHR from "@/components/forms/rep/InterviewWithHR";
import Conclusion from "@/components/forms/rep/Conclusion";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { registerTask } from "@/service/registerTask";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import TitleCheck from "@/components/forms/rep/TitleCheck";

export default function Rep() {
  const { id } = useLocalSearchParams();
  const { replace } = useRouter();
  const { control, handleSubmit } = useForm();

  function save(data: any) {
    registerTask({
      id_ticket: Number(id),
      content: JSON.stringify({ type: "rep", ...data }),
    });
    replace(`/action/task?id=${id}`);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleForm title="rep preventiva" />
        <TitleCheck control={control} />
        <StatusAndData control={control} />
        <CleaningActions control={control} />
        <InspectionOfEssentialResources control={control} />
        <InstallationConditions control={control} />
        <InterviewWithHR control={control} />
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
