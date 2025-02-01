import { ButtonLink } from "@/components/ui/btnLink";
import { View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <ButtonLink
        href="/preventiva"
        title="Preventiva"
        backgroundColor="#0000"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa", // Fundo suave para destacar o botão
  },
});
