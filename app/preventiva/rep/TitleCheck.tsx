import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import Card from "@/components/ui/card";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import { Controller } from "react-hook-form";

interface TitleCheckProps {
  control: any;
}
export default function TitleCheck({ control }: TitleCheckProps) {
  return (
    <Card>
      <TitleSectionForm title="Titulo:" />
      <Controller
        control={control}
        name="titleCheck"
        render={({ field }) => (
          <Input
            label="Lacre Fiscal"
            keyboardType="default"
            value={field.value}
            onChangeText={field.onChange}
          />
        )}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
