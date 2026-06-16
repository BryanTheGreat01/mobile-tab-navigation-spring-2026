import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export const COURSES = [
  {
    code: "cprg303",
    title: "Mobile Computing",
    credit: 4,
    instructor: "Ali R.",
    description: "Build cross-platform mobile apps with React Native + Expo.",
    room: "MC-201",
  },
  {
    code: "cprg216",
    title: "Programming Principles 2",
    credit: 4,
    instructor: "Sara P.",
    description:
      "Object-oriented programming in C#, inheritance, polymorphism.",
    room: "MC-204",
  },
  {
    code: "cpsy301",
    title: "Operating Systems",
    credit: 3,
    instructor: "Tom K.",
    description: "Processes, memory management, scheduling, concurrency.",
    room: "MC-115",
  },
  {
    code: "comm238",
    title: "Technical Communications",
    credit: 3,
    instructor: "Jay M.",
    description:
      "Reports, documentation, presenting technical material clearly.",
    room: "AA-302",
  },
  {
    code: "math247",
    title: "Statistics for Computing",
    credit: 3,
    instructor: "Ada L.",
    description: "Descriptive stats, probability, hypothesis testing.",
    room: "NN-410",
  },
];

const Courses = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>My Courses</Text>
        {COURSES.map((course) => (
          <Pressable
            key={course.code}
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/courses/[id]",
                params: { id: course.code },
              })
            }
          >
            <View style={styles.row}>
              <Text style={styles.code}>{course.code}</Text>
              <Text style={styles.credit}>{course.credit} cr</Text>
            </View>
            <Text style={styles.courseTitle}> {course.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Courses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#003865",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E2E8F0",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  code: {
    fontSize: 12,
    fontWeight: "700",
    color: "#F59E0B",
    letterSpacing: 1,
  },
  credit: {
    fontSize: 12,
    color: "#94A3B8",
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0F172A",
  },
});
