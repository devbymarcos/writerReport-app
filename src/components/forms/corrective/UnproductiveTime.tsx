import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import InputMultiplo from "@/components/ui/inputMultiplo";

export default function UnproductiveTime({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Justificativa de horas:" />
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
