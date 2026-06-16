/**
 * Week 4 · Day 1 · CampusHub Tabs — FINAL
 * (tabs) LAYOUT  —  app/(tabs)/_layout.tsx
 *
 * Concepts in this file:
 *   1. <Tabs> wraps every tab in the group
 *   2. screenOptions = shared theme for every tab + header
 *   3. <Tabs.Screen name="..."> configures ONE tab
 *   4. tabBarIcon receives { color, size, focused } — use them all
 *   5. Focused → filled icon · unfocused → outline icon
 *   6. tabBarBadge: show a small red bubble (notification dot)
 *   7. href: null  → hide a tab button but keep the route reachable
 */

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        // Active/inactive colors
        tabBarActiveTintColor: "#F59E0B",
        tabBarInactiveTintColor: "#94A3BA",

        // Tab bar visual styles

        tabBarStyle: {
          backgroundColor: "#0F172A",
          borderTopColor: "#1E293B",
          height: 64,
          paddingBottom: 6,
          paddingTop: 3,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
        },
        headerStyle: { backgroundColor: "#003865" },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { fontWeight: "700" },
      }}
    >
      <Tabs.Screen
        //This name has to exactly match the file name without extension
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        //This name has to exactly match the file name without extension
        name="courses"
        options={{
          title: "Courses",
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "book" : "book-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        //This name has to exactly match the file name without extension
        name="about"
        options={{
          href: null,
          title: "About",
        }}
      />

      <Tabs.Screen
        //This name has to exactly match the file name without extension
        name="profile"
        options={{
          title: "Profile",
          tabBarBadge: 4,
          tabBarBadgeStyle: {
            backgroundColor: "#DC2626",
            color: "#FFFFFF",
            fontSize: 10,
          },
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        //This name has to exactly match the file name without extension
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
