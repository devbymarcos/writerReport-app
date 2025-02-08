import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function Testes({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Teste e Registro de funcionamento" />
      <Controller
        control={control}
        name="ioModuleLedStatus"
        render={({ field }) => (
          <Select
            label="Módulo I/O status do led (Foto)"
            items={[
              "...",
              "Em operação foto registrada",
              "Não realizado",
              "Abrir ticket",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="ioModuleLedStatus"
        render={({ field }) => (
          <Select
            label="Cancela teste abertura e fechamento"
            items={[
              "...",
              "Abertura e fechamento 100%",
              "Não autorizado em operação",
              "Abrir ticket",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}
