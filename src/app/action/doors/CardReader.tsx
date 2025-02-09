import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function CardReader({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Leitores de Cartão (Entrada e Saída)" />
      <Controller
        control={control}
        name="cardReaders"
        render={({ field }) => (
          <Select
            label="Leitores de Cartão (Entrada e Saída):"
            items={["...", "Ok", "Abrir ticket correção", "Não verificado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="cardReadersCleaning"
        render={({ field }) => (
          <Select
            label="Limpeza (superficie):"
            items={["...", "Realizada", "Porta Limpa", "Não verificado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}
