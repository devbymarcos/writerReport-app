import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";
import Select from "@/components/ui/select";

function Brakes({ control }: { control: any }) {
  return (
    <>
      <Card>
        <TitleSectionForm title="Freios:" />
        <Controller
          control={control}
          name="pads"
          render={({ field }) => (
            <Select
              label="Pastilhas:"
              items={["Ok", "Troca necessária"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="discs"
          render={({ field }) => (
            <Select
              label="Discos:"
              items={["Ok", "Troca necessária"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
        <Controller
          control={control}
          name="brakeDrums"
          render={({ field }) => (
            <Select
              label="Tambores de freio:"
              items={["Ok", "Troca necessária"]}
              value={field.value}
              setValue={field.onChange}
            />
          )}
        />
      </Card>
    </>
  );
}

export default Brakes;
