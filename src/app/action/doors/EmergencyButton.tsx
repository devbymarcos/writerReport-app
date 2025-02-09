import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function EmergencyButton({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Botoeira de Emergência(Saída)" />
      <Controller
        control={control}
        name="emergencyButtonCleaning"
        render={({ field }) => (
          <Select
            label="Limpeza:"
            items={[
              "...",
              "Realizada",
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
        name="emergencyButton"
        render={({ field }) => (
          <Select
            label="Funcionamento:"
            items={["...", "OK", "Corrigido", "Não verificado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="emergencyButtonFixation"
        render={({ field }) => (
          <Select
            label="Fixação:"
            items={["...", "OK", "Corrigido", "Não verificado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}
