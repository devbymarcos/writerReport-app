import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function AccessControlPanel({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Painel de Controle de Acesso" />
      <Controller
        control={control}
        name="accessControlPanel"
        render={({ field }) => (
          <Select
            label="Fixação:"
            items={["OK", "Abrir ticket correção", "Não verificado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="cleaningAccessControlPanel"
        render={({ field }) => (
          <Select
            label="Limpeza do painel:"
            items={["Realizada", "Abrir ticket Correção", "Não verificado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="statusControlPanel"
        render={({ field }) => (
          <Select
            label="Status:"
            items={["Operando normalmente", "Corrigido", "Não verificado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="cablesConnectionsControlPanel"
        render={({ field }) => (
          <Select
            label="Cabos e conexões:"
            items={["OK", "Corrigido", "Não verificado", "Abrir ticket"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}
