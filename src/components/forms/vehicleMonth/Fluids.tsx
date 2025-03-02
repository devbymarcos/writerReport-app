import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import Select from "@/components/ui/select";

function Fluids({ control }: { control: any }) {
  return (
    <>
      <Card>
        <TitleSectionForm title="Fluidos" />

        <Controller
          control={control}
          name="brakes"
          render={({ field }) => (
            <Select
              label="Freios:"
              items={["Ok", "Correção necessária", "Corrigido"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="powerSteering"
          render={({ field }) => (
            <Select
              label="Direção Hidraulica:"
              items={["Ok", "Não possui", "Correção necessária", "Corrigido"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="transmission"
          render={({ field }) => (
            <Select
              label="Transmissão"
              items={["Ok", "Correção necessária", "Corrigido"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="cooling"
          render={({ field }) => (
            <Select
              label="Arrefecimento"
              items={["Ok", "Correção necessária", "Corrigido"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
      </Card>
    </>
  );
}

export default Fluids;
