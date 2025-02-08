import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import InputMultiplo from "@/components/ui/inputMultiplo";

export default function Solution({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Solução" />
      <Controller
        control={control}
        name="solutionTechiniques"
        render={({ field }) => (
          <InputMultiplo
            label=" Quais ações técnicas foram feitas p/ resolver o problema ?"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}
