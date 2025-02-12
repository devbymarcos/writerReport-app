import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function PowerSource({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Fontes de Alimentação e Temporizadas" />
      <Controller
        control={control}
        name="powerSources"
        render={({ field }) => (
          <Select
            label="Fonte Padrão:"
            items={[
              "...",
              "Operando normalmente",
              "Abrir ticket correção",
              "Não verificado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="powerTimerSources"
        render={({ field }) => (
          <Select
            label="Fonte temporizada:"
            items={[
              "...",
              "Operando normalmente",
              "Abrir ticket Correção",
              "Não verificado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}
