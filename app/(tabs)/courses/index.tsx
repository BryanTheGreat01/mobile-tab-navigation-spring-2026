import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const COURSES = [
  { code: 'CPRG-303', title: 'Mobile Computing', credit: 4 },
  { code: 'CPRG-216', title: 'Programming Principles 2', credit: 4 },
  { code: 'CPSY-301', title: 'OS Concepts', credit: 3 },
  { code: 'COMM-238', title: 'Technical Communications', credit: 3 },
];


const Courses = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>My Courses</Text>
        {
          COURSES.map((course)=>(
            <View key={course.code} style={styles.card}>
              <View style={styles.row}>
                <Text style={styles.code}>{course.code}</Text>
                <Text style={styles.credit}>{course.credit} cr</Text>
              </View>
              <Text style={styles.courseTitle}> {course.title}</Text>
            </View>
          ))
        }
      </ScrollView>
    </View>
  )
}

export default Courses

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F8FAFC"
  },
  content:{
    padding: 20
  },
  title:{
    fontSize:24,
    fontWeight: "600",
    color:"#003865",
    marginBottom:16,
  },
  card:{
    backgroundColor: "#FFFFFF",
    borderRadius:12,
    padding:16,
    marginBottom:10,
    borderWidth:1,
    borderColor:'#E2E8F0'
  },
  row:{
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: 4,
  },
  code:{
    fontSize: 12,
    fontWeight:'700',
    color:'#F59E0B',
    letterSpacing: 1,
  },
  credit:{
    fontSize: 12, color: "#94A3B8"
  },
  courseTitle:{
    fontSize:16,
    fontWeight: "600",
    color:"#0F172A"
  }
})