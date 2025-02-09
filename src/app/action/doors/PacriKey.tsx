import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function PacriKey({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Chave Pacri (Entrada)" />
      <Controller
        control={control}
        name="pacriKey"
        render={({ field }) => (
          <Select
            label="Funcionamento:"
            items={["...", "Ok", "Abrir ticket correção", "Não verificado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="pacriKeyLubrication"
        render={({ field }) => (
          <Select
            label="Lubrificação:"
            items={["...", "OK", "Corrigido/preventiva", "Não verificado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}
