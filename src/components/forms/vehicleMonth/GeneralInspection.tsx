import React from "react";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";

function GeneralInspection({ control }: { control: any }) {
  return (
    <>
      <Card>
        <TitleSectionForm title="Inspeção Geral:" />
        <Controller
          control={control}
          name="bodywork"
          render={({ field }) => (
            <Select
              label="Carroceria:"
              items={["Ok", "Correção necessária", "Não verificado"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="signsOfCorrosion"
          render={({ field }) => (
            <Select
              label="Sinais de corrosão:"
              items={["Não possui sinais visiveis", "Sinais de corrosão"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
      </Card>
    </>
  );
}

export default GeneralInspection;
