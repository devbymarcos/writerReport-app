import React from "react";
import { Controller } from "react-hook-form";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Card from "@/components/ui/card";
import Select from "@/components/ui/select";

function Suspension({ control }: { control: any }) {
  return (
    <>
      <Card>
        <TitleSectionForm title="Suspensão:" />

        <Controller
          control={control}
          name="shockAbsorber"
          render={({ field }) => (
            <Select
              label="Amortecedores:"
              items={["Ok", "Correção necessária", "Corrigido"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="springs"
          render={({ field }) => (
            <Select
              label="Molas:"
              items={["Ok", "Não possui", "Correção necessária", "Corrigido"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="steeringComponents"
          render={({ field }) => (
            <Select
              label="Componentes de Direção"
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

export default Suspension;
