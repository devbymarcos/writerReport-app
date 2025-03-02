import Card from "@/components/ui/card";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import React from "react";
import { Controller } from "react-hook-form";

function BeltsAndHoses({ control }: { control: any }) {
  return (
    <>
      <Card>
        <TitleSectionForm title="Correias e Magueiras:" />

        <Controller
          control={control}
          name="beltsAndHoses"
          render={({ field }) => (
            <Select
              label="Status:"
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

export default BeltsAndHoses;
