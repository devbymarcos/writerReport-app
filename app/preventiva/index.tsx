import InitTicket from "@/components/forms/preventiva/InitTicket";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import { useRouter } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function Home() {
  const { push } = useRouter();
  function msg() {
    push("/preventiva/task");
  }

  return (
    <View style={styles.container}>
      <InitTicket />
      <BtnPrimary title="Iniciar Ticket" onPress={msg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 10,
  },
});
