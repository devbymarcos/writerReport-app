import InitTicket from "@/components/forms/baseTicket/InitTicket";
import { BtnPrimary } from "@/components/ui/btnPrimay";
import { useRouter } from "expo-router";
import { View, StyleSheet, Text } from "react-native";

export default function Home() {
  const { push } = useRouter();
  function msg() {
    push("/preventiva/task?id=1");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Preventiva </Text>
      <InitTicket />
      <BtnPrimary title="Iniciar Ticket" onPress={msg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
