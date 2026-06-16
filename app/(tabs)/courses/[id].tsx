import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { COURSES } from "./index";
import { useLocalSearchParams, Stack, useRouter, Link } from "expo-router";
import React from "react";

const CourseDetailsPage = () => {
  // Get the id from the URL
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  // I have mock data (COURSES).  I need to extract the course details from the Courses mock data
  const course = COURSES.find((course) => course.code === id);

  // Graceful 404
  if (!course) {
    return (
      <View style={styles.safe}>
        <Stack.Screen options={{ title: "Course Not Found" }} />
        <Text style={styles.title}>Course "{id}" not found.</Text>
        <Link href="/courses" asChild>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Back to Courses List</Text>
          </Pressable>
        </Link>
      </View>
    );
  }
  return (
    <View style={styles.safe}>
      <Stack.Screen
        options={{
          title: course.code.toUpperCase(),
          headerBackTitle: "Courses",
          headerRight: () => (
            <Pressable onPress={() => router.push("/courses")}>
              {" "}
              <Text style={styles.headerBtn}>Courses</Text>
            </Pressable>
          ),
        }}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>{course.code.toUpperCase()}</Text>
        <Text style={styles.title}>{course.title}</Text>
        <Text style={styles.body}>{course.description}</Text>

        <View style={styles.card}>
            <Row label="Instructor" value={course.instructor}/>
            <Row label="Credits" value={course.credit}/>
            <Row label="Room" value={course.room}/>
        </View>
        <Pressable style={styles.btn} onPress={()=> router.push('/courses')}>
            <Text style={styles.btnText}>Back to Course List</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default CourseDetailsPage;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F8FAFC" },
  content: { padding: 20, paddingBottom: 40 },
  eyebrow: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1,
    color: "#F59E0B",
  },
  title: { fontSize: 28, fontWeight: "800", color: "#003865", marginTop: 4 },
  body: {
    fontSize: 14,
    color: "#475569",
    lineHeight: 22,
    marginTop: 12,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 4,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },
  rowLabel: { fontSize: 13, color: "#94A3B8", fontWeight: "600" },
  rowValue: { fontSize: 14, color: "#0F172A", fontWeight: "700" },
  btn: {
    backgroundColor: "#F59E0B",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  btnText: { color: "#0F172A", fontWeight: "800", letterSpacing: 0.5 },
  btnGhost: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  btnTextGhost: { color: "#475569" },
  headerBtn: {
    color: "#F59E0B",
    fontWeight: "700",
    fontSize: 15,
    marginRight: 4,
  },
});

// Simple Row component for label/value pairs
function Row({ label, value }: { label: string; value: string | number }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}
