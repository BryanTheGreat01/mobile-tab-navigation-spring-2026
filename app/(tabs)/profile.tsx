import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Profile = () => {
  return (
    <View style={styles.safe}>
      <View style={styles.banner} />
      <View style={styles.avatarWrap}>
        <Image
          source={{ uri: "https://i.pravatar.cc/200?img=12" }}
          style={styles.avatar}
        />
      </View>
      <Text style={styles.name}>Mohammed A.</Text>
      <Text style={styles.role}>SADT . Software Development</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Student ID</Text>
        <Text style={styles.value}>000-123-456</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Program</Text>
        <Text style={styles.value}>Software Development Diploma</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Graduating</Text>
        <Text style={styles.value}>Spring 2027</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F8FAFC" },
  banner: { height: 80, backgroundColor: "#003865" },
  avatarWrap: { alignItems: "center", marginTop: -50 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#FFFFFF",
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: "#003865",
    textAlign: "center",
    marginTop: 8,
  },
  role: {
    fontSize: 13,
    color: "#475569",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 19,
    marginHorizontal: 20,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "#6a809c",
  },
  label: { fontSize: 12, color: "#94A3B8", fontWeight: "600" },
  value: { fontSize: 14, color: "#0F172A", fontWeight: "600" },
});
