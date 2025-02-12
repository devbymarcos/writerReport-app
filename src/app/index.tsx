import { ButtonLink } from "@/components/ui/btnLink";
import { View, StyleSheet, Text } from "react-native";
import { dataMenu } from "@/shared/dataMenu";
import { Colors } from "@/constants/Colors";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.boxTitle}>
        <Text style={styles.titleApp}>Write Report</Text>
        <Text style={styles.subTitleApp}></Text>
      </View>
      {dataMenu.map((item, index) => (
        <View key={index} style={styles.boxButton}>
          <ButtonLink
            href={item.path}
            title={item.title}
            backgroundColor="#0000"
            replace={true}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    padding: 20,
    backgroundColor: Colors.bgPrimary, // Fundo suave para destacar o botão
  },
  boxButton: {
    width: "100%",
    marginBottom: 10,
  },
  boxTitle: {
    marginBottom: 30,
    alignItems: "center",
  },
  titleApp: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitleApp: {
    fontSize: 11,
  },
});
