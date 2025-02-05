import { StyleSheet, Text, View } from "react-native";
import React from "react";
import InputMultiplo from "@/components/ui/inputMultiplo";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";

export default function Conclusion() {
  return (
    <Card>
      <TitleSectionForm title="Conclusão: " />
      <InputMultiplo label="Descreva as não conformidades (use 'ENTER' para quebra de linha)" />
      <InputMultiplo label="Conclusão (use 'ENTER' para quebra de linha)" />
    </Card>
  );
}

const styles = StyleSheet.create({});
