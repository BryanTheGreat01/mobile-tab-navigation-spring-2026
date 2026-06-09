import { StyleSheet, Text, View, Switch } from "react-native";
import { useState } from "react";
import React from "react";

const Settings = () => {
  const [push, setPush]= useState(true)
  const [darkMode, setDarkMode] = useState(false)
  const [analytics, setAnalytics]=useState(true)
  return (
    <View style={styles.safe}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.row}>
        <Text style={styles.rowLabel}>Push Notifications</Text>
        <Switch
        value={push}
        onValueChange={setPush}
        trackColor={{false:"#CBD5E1", true:"#F59E0B"}}
        thumbColor={"#FFFFFF"}
        />

      </View>
            <View style={styles.row}>
        <Text style={styles.rowLabel}>Dark Mode</Text>
        <Switch
        value={darkMode}
        onValueChange={setDarkMode}
        trackColor={{false:"#CBD5E1", true:"#F59E0B"}}
        thumbColor={"#FFFFFF"}
        />

      </View>
            <View style={styles.row}>
        <Text style={styles.rowLabel}>Share Analytics</Text>
        <Switch
        value={analytics}
        onValueChange={setAnalytics}
        trackColor={{false:"#CBD5E1", true:"#F59E0B"}}
        thumbColor={"#FFFFFF"}
        />

      </View>
      <Text style={styles.footnote}>V1.0.0 . SAIT CAMPUS HUB</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F8FAFC", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#003865",
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  rowLabel: { fontSize: 15, color: "#0F172A" },
  footnote: {
    fontSize: 11,
    color: "#94A3B8",
    textAlign: "center",
    marginTop: 24,
  },
});
