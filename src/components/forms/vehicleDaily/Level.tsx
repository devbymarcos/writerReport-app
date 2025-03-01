import React from "react";
import { Controller } from "react-hook-form";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Card from "@/components/ui/card";

export default function Level({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Nivel:" />
      <Controller
        control={control}
        name="waterLevel"
        render={({ field }) => (
          <Select
            label="Água:"
            items={["Ok", "Corrigido", "Agendar Manutenção"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="oilLevel"
        render={({ field }) => (
          <Select
            label="Óleo:"
            items={["Ok", "Corrigido", "Agendar Manutenção"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}
