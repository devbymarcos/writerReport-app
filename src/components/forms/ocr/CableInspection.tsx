import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function CableInspection({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Vistoria de Cabos" />
      <Controller
        control={control}
        name="cableManagement"
        render={({ field }) => (
          <Select
            label="Cancela (cabos e conexões)"
            items={[
              "Ok",
              "Não possui cabo aparente",
              "Organizado ou Adicionado Enrola cabo",
              "Não realizado",
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
