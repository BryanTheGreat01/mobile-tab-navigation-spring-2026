import { Text, View, ScrollView, StyleSheet} from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>Welcome Back</Text>
        <Text style={styles.title}>Hi, Mohammed</Text>
        <Text style={styles.body}>We have two classes today and 1 Assignment due in 3 days</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Next Class</Text>
          <Text style={styles.cardBody}>CPRG-303 Mobile Computing</Text>
          <Text style={styles.cardMeta}>9:30 AM . Room MC-201</Text>

        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Upcoming</Text>
          <Text style={styles.cardBody}>Second Assignment</Text>
          <Text style={styles.cardMeta}>Due Friday, May 29</Text>

        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor: '#F8FAFC'
},
content:{
  padding: 20
},
eyebrow:{
  fontSize:11,
  fontWeight: '700',
  letterSpacing: 1,
  color:"#F59E0B",
  marginTop: 4,
},
title:{
  fontSize: 22,
  fontWeight:600,
  color:"#003865",
  marginBottom: 6
},
body:{
  fontSize:14,
  color:"#475569",
  lineHeight:22,
  marginBottom: 20,
},
card:{
  backgroundColor: "#FFFFFF",
  borderRadius:12,
  padding:16,
  marginBottom:12,
  shadowColor:"#000",
  shadowOpacity:0.05,
  shadowRadius:4,
  elevation:2,
},
cardTitle:{
  fontSize:11,
  fontWeight:'700',
  color:"#94A3B8",
  letterSpacing:1,
  marginBottom:4
},
cardBody:{
  fontSize: 16,
  fontWeight:'600',
  color:"#0F172A",
  marginBottom: 4
},
cardMeta: {
  fontSize: 12, color: "#64748B"
}
})