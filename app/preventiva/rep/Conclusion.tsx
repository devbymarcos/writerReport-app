import { StyleSheet } from "react-native";
import React from "react";
import InputMultiplo from "@/components/ui/inputMultiplo";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function Conclusion({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Conclusão:(use 'ENTER' para quebra de linha) " />
      <Controller
        control={control}
        name="setNonConformitiesDescription"
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
        name="setPendingOrNextActions"
        render={({ field }) => (
          <InputMultiplo
            label="Pendencias ou próximas etapas "
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
