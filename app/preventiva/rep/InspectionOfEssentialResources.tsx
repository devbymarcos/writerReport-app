import { StyleSheet } from "react-native";
import React from "react";
import Card from "@/components/ui/card";
import TitleSectionForm from "@/components/ui/titleSectionForm";
import Select from "@/components/ui/select";
import { storeRep } from "@/store/storeRep";

export default function InspectionOfEssentialResources() {
  const {
    inspectionDisplay,
    setInspectionDisplay,
    inspectionPrinter,
    setInspectionPrinter,
    inspectionKeyboard,
    setInspectionKeyboard,
    inspectionReadersCardAndBiometrics,
    setInspectionReadersCardAndBiometrics,
    inspectionCutterOrPerforator,
    setInspectionCutterOrPerforator,
    frontAndRear,
    setFrontAndRear,
  } = storeRep();
  return (
    <Card>
      <TitleSectionForm title="Vistoria de recursos essenciais:" />
      <Select
        label="Display"
        items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
        value={inspectionDisplay}
        setValue={setInspectionDisplay}
      />
      <Select
        label="Impressor"
        items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
        value={inspectionPrinter}
        setValue={setInspectionPrinter}
      />
      <Select
        label="Teclado"
        items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
        value={inspectionKeyboard}
        setValue={setInspectionKeyboard}
      />
      <Select
        label="Leitores (carão e biometria):"
        items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
        value={inspectionReadersCardAndBiometrics}
        setValue={setInspectionReadersCardAndBiometrics}
      />
      <Select
        label="Guilhotina ou serrilha:"
        items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
        value={inspectionCutterOrPerforator}
        setValue={setInspectionCutterOrPerforator}
      />
      <Select
        label="Caixa fronta/traseira:"
        items={["...", "Ok", "Abrir Ticket", "Não realizado"]}
        value={frontAndRear}
        setValue={setFrontAndRear}
      />
    </Card>
  );
}

const styles = StyleSheet.create({});
