import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function CleaningOcr({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Limpeza" />
      <Controller
        control={control}
        name="barriers"
        render={({ field }) => (
          <Select
            label="Cancelas"
            items={[
              "Limpeza realizada",
              "Não autorizado ação",
              "Abrir ticket Correção",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="antiCrushSensors"
        render={({ field }) => (
          <Select
            label="Sensores Antiesmagamento:"
            items={[
              "Limpeza realizada",
              "Não autorizado ação",
              "Abrir ticket Correção",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="cameras"
        render={({ field }) => (
          <Select
            label="Câmeras:"
            items={[
              "Limpeza realizada",
              "Não autorizado ação",
              "Abrir ticket Correção",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="postsAndPedestals"
        render={({ field }) => (
          <Select
            label="Postes e pedestais:"
            items={[
              "Limpeza realizada",
              "Não autorizado ação",
              "Abrir ticket Correção",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="automationSensors"
        render={({ field }) => (
          <Select
            label="Sensores de automação:"
            items={[
              "Limpeza realizada",
              "Não autorizado ação",
              "Abrir ticket Correção",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}
