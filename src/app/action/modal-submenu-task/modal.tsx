import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import { useLocalSearchParams } from "expo-router";
import { storeTicket } from "@/store/storeTicket";
import { ArrowDown } from "lucide-react-native";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";
interface MenuItem {
  title: string;
  path: string;
}

const dataMenuPreventive: MenuItem[] = [
  {
    title: "REP preventiva",
    path: "/action/rep",
  },
  {
    title: "Catraca preventiva",
    path: "/action/catraca",
  },
  {
    title: "Orc preventiva",
    path: "/action/ocr",
  },
  {
    title: "Portas preventiva",
    path: "/action/doors",
  },
  {
    title: "Implantação",
    path: "/action/implantacao",
  },
  {
    title: "Corretiva",
    path: "/action/corrective",
  },
];

export default function SubMenuModalPreventive() {
  const { id } = useLocalSearchParams();
  const { modalSubMenu, setModalSubMenu } = storeTicket();
  const { push } = useRouter();

  const goRouter = (path: string) => {
    setModalSubMenu(!modalSubMenu);
    push(`${path}?id=${id}` as any);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a Tarefa </Text>
      {dataMenuPreventive.map((item, index) => (
        <View key={index} style={styles.boxButton}>
          <BtnPrimary onPress={() => goRouter(item.path)} title={item.title} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  boxButton: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  boxModalClose: {
    alignItems: "flex-end",
    padding: 20,
    backgroundColor: "#fff",
  },
  modalClose: {
    padding: 10,
    backgroundColor: Colors.btnPrimary,
    borderRadius: 99999,
  },
});
