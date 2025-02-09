import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function DoorSpring({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Mola da Porta" />
      <Controller
        control={control}
        name="doorSpring"
        render={({ field }) => (
          <Select
            label="Funcionamento (fechamento completo e suave):"
            items={["...", "OK", "Abrir ticket correção", "Não verificado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="doorSpringAdjustment"
        render={({ field }) => (
          <Select
            label="Regulagem:"
            items={[
              "...",
              "Realizado ajuste",
              "Corrigida",
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
