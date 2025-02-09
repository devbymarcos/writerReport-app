import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function CableManagement({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Cabeamento Aparente" />
      <Controller
        control={control}
        name="cableManagement"
        render={({ field }) => (
          <Select
            label="Possui dano ou esta frouxo ?"
            items={[
              "...",
              "Sem danos",
              "Não possui cabo aparente",
              "Organizado ou Adicionado EnrolaCabo",
              "Não verificado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="cableManagementFixation"
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
