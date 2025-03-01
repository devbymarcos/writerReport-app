import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import Select from "@/components/ui/select";

export default function InstallationConditions({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Condições de Instalação" />
      <Controller
        control={control}
        name="equipmentFixation"
        render={({ field }) => (
          <Select
            label="Fixação do equipamento:"
            items={[
              "Ok",
              "Abrir Ticket",
              "Corrigido na preventiva",
              "Não realizado",
            ]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="cableOrganization"
        render={({ field }) => (
          <Select
            label="Organização cabos de rede/energia/lógica:"
            items={["Ok", "Ajustado", "Abrir Ticket", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="exposureToRainOrSun"
        render={({ field }) => (
          <Select
            label="Exposição a Chuva/Sol:"
            items={["Ok", "Exposto", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
      <Controller
        control={control}
        name="terminalConnections"
        render={({ field }) => (
          <Select
            label="Conexões (terminais componentes / placas):"
            items={["Ok", "Reparo necessário", "Não realizado"]}
            value={field.value}
            setValue={field.onChange}
          />
        )}
      />
    </Card>
  );
}
