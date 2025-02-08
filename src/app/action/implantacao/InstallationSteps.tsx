import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import InputMultiplo from "@/components/ui/inputMultiplo";

export default function InstallationSteps({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Etapas da instalação:" />
      <Controller
        control={control}
        name="installationSteps"
        render={({ field }) => (
          <InputMultiplo
            label="Quais etapas da instalação foram realizadas?"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="nextActivity"
        render={({ field }) => (
          <InputMultiplo
            label="Qual será a próxima atividade?"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="materialUsed"
        render={({ field }) => (
          <InputMultiplo
            label="Relação de material utilizado?"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="unproductiveTime"
        render={({ field }) => (
          <InputMultiplo
            label="Justificativas de horas improdutivas (se houver)?"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}
