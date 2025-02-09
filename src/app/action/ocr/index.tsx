import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { registerTask } from "@/service/registerTask";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import TitleCheck from "@/components/forms/TitleCheck";
import CleaningOcr from "./CleaningOcr";
import ExternalInspection from "./ExternalInspection";
import CableInspection from "./CableInspection";
import Testes from "./Teste";
import Conclusion from "./Conclusion";

export default function Rep() {
  const { id } = useLocalSearchParams();
  const { push } = useRouter();
  const { control, handleSubmit } = useForm();

  function save(data: any) {
    console.log("ocr", data);
    registerTask({
      id_ticket: Number(id),
      content: JSON.stringify({ type: "ocr", ...data }),
    });
    push(`/action/task?id=${id}`);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <TitleForm title=" Preventiva OCR" />
        <TitleCheck control={control} />
        <CleaningOcr control={control} />
        <ExternalInspection control={control} />
        <CableInspection control={control} />
        <Testes control={control} />
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
