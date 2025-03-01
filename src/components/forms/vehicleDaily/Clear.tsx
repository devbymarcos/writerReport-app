import React from "react";
import { Controller } from "react-hook-form";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Card from "@/components/ui/card";

export default function Clear({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Limpeza" />
      <Controller
        control={control}
        name="trash"
        render={({ field }) => (
          <Select
            label="Lixo:"
            items={["Ok", "Removido", "Agendar"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="washing"
        render={({ field }) => (
          <Select
            label="Lavagem:"
            items={["Ok", "Removido", "Agendar"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}
