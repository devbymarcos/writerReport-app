import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { registerTask } from "@/service/registerTask";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import TitleCheck from "@/components/forms/TitleCheck";
import ReportProblem from "@/components/forms/corrective/ReportProblem";
import Solution from "@/components/forms/corrective/Solution";
import NonRepetitionSuggestion from "@/components/forms/corrective/NonRepetitionSuggestion";

import FullyResolved from "@/components/forms/corrective/FullyResolved";

export default function Rep() {
  const { id } = useLocalSearchParams();
  const { replace } = useRouter();
  const { control, handleSubmit } = useForm();

  function save(data: any) {
    registerTask({
      id_ticket: Number(id),
      content: JSON.stringify({ type: "corrective", ...data }),
    });
    replace(`/action/task?id=${id}`);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleForm title="Corretiva" />
        <TitleCheck control={control} />
        <ReportProblem control={control} />
        <Solution control={control} />
        <NonRepetitionSuggestion control={control} />
        <FullyResolved control={control} />
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
