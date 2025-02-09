import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function ElectromagneticLock({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Fechadura Eletroímã" />
      <Controller
        control={control}
        name="electromagneticLock"
        render={({ field }) => (
          <Select
            label="Funcionamento:"
            items={["...", "OK", "Abrir ticket Correção", "Não verificado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="electromagnetFixation"
        render={({ field }) => (
          <Select
            label="Fixação:"
            items={[
              "...",
              "Ok",
              "Corrigida",
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
        name="electromagnetCleaning"
        render={({ field }) => (
          <Select
            label="Limpeza Eletroímã:"
            items={[
              "...",
              "Realizada",
              "Componente limpo",
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
        name="doorContactCleaning"
        render={({ field }) => (
          <Select
            label="Limpeza Contato da porta:"
            items={[
              "...",
              "Realizada",
              "Não realizado",
              "Não autorizado ação",
              "Abrir ticket Correção",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}
