import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import InputMultiplo from "@/components/ui/inputMultiplo";

export default function NonRepetitionSuggestion({ control }: { control: any }) {
  return (
    <Card>
      <Controller
        control={control}
        name="nonRepetitionSuggestion"
        render={({ field }) => (
          <InputMultiplo
            label="O que pode ser feito para o problema não se repetir?"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}
