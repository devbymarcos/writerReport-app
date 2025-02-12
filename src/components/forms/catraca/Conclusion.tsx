import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import InputMultiplo from "@/components/ui/inputMultiplo";

export default function Conclusion({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Conclusão:(use 'ENTER' para quebra de linha) " />
      <Controller
        control={control}
        name="nonConformitiesDescription"
        render={({ field }) => (
          <InputMultiplo
            label="Descreva as não conformidades "
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="improvementSuggestions"
        render={({ field }) => (
          <InputMultiplo
            label="Sugestão de melhorias:"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="pendingOrNextActions"
        render={({ field }) => (
          <InputMultiplo
            label="Pendencias ou próximas etapas:"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
