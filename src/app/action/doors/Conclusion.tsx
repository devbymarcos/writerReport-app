import { StyleSheet } from "react-native";
import React from "react";
import InputMultiplo from "@/components/ui/inputMultiplo";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function Conclusion({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Conclusao" />
      <Controller
        control={control}
        name="nonConformitiesDescription"
        render={({ field }) => (
          <InputMultiplo
            label="Descreva as não conformidades:"
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
            label="Sugestão de melhorias: "
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="materialsUsed"
        render={({ field }) => (
          <InputMultiplo
            label="Materiais usados:"
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
            label="Pendencias ou próximas etapas"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
