import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import InputMultiplo from "@/components/ui/inputMultiplo";

export default function FullyResolved({ control }: { control: any }) {
  return (
    <Card>
      <Controller
        control={control}
        name="fullyResolved"
        render={({ field }) => (
          <InputMultiplo
            label="O problema foi 100% resolvido ou existe pendência?"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}
