import React from "react";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

export default function DoorInspect({ control }: { control: any }) {
  return (
    <Card>
      <TitleSectionForm title="Inspeção Física da Porta " />
      <Controller
        control={control}
        name="doorAlignment"
        render={({ field }) => (
          <Select
            label="Alinhamento (sem torções ou danos):"
            items={[
              "...",
              "Porta alinhada",
              "Problema reportado",
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
