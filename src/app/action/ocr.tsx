import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import TitleForm from "@/components/ui/titleForm";
import { registerTask } from "@/service/registerTask";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import TitleCheck from "@/components/forms/TitleCheck";
import CleaningOcr from "@/components/forms/ocr/CleaningOcr";
import ExternalInspection from "@/components/forms/ocr/ExternalInspection";
import CableInspection from "@/components/forms/ocr/CableInspection";
import Testes from "@/components/forms/ocr/Teste";
import Conclusion from "@/components/forms/ocr/Conclusion";

export default function Rep() {
  const { id } = useLocalSearchParams();
  const { replace } = useRouter();
  const { control, handleSubmit } = useForm();

  async function save(data: any) {
    const response = await registerTask({
      id_ticket: Number(id),
      content: JSON.stringify({ type: "ocr", ...data }),
    });
    if ((response?.lastInsertRowId ?? 0) > 0) {
      replace(`/action/task?id=${id}`);
    }
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
