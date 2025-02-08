import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import InputMultiplo from "@/components/ui/inputMultiplo";

export default function MaterialUsed({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Material:" />
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
    </Card>
  );
}
