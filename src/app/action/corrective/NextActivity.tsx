import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import InputMultiplo from "@/components/ui/inputMultiplo";

export default function NextActivity({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Próximas atividades:" />
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
    </Card>
  );
}
