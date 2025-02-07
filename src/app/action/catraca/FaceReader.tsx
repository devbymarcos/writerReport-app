import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import Select from "@/components/ui/select";

export default function FaceReader({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Leitor Facial:" />
      <Controller
        control={control}
        name="equipmentFixation"
        render={({ field }) => (
          <Select
            label="Limpeza:"
            items={["...", "Realizada", "Abrir Ticket", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="Display"
        render={({ field }) => (
          <Select
            label="Display:"
            items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="adminDefault"
        render={({ field }) => (
          <Select
            label="Possui admin padrão cadastrado(Padrão estipulado para o
                cliente)"
            items={[
              "...",
              "Ok",
              "Corrigido",
              "Não aplicavel",
              "Não verificado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="cablesAndConectionFace"
        render={({ field }) => (
          <Select
            label="Cabos e conexões:"
            items={["...", "Ok", "Corrigido", "Abrir Ticket", "Não verificado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}
