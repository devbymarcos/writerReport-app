import Card from "@/components/ui/card";
import InputMultiplo from "@/components/ui/inputMultiplo";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import React from "react";
import { Controller } from "react-hook-form";

export default function NoConformities({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Conclusão" />
      <Controller
        control={control}
        name="noConformities"
        render={({ field }) => (
          <InputMultiplo
            label="Descreva as não conformidades "
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}
