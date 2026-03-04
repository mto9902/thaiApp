import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const CustomTabBarIcon = ({ focused, name, color }: { focused: boolean, name: any, color: string }) => (
  <View style={[styles.tabIconContainer, focused && styles.tabIconFocused]}>
    <Ionicons size={24} name={name} color={color} />
  </View>
);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#757575',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: 90,
          paddingBottom: 25,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontWeight: '900',
          fontSize: 10,
          marginTop: 5,
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'LEARN',
          tabBarIcon: ({ color, focused }) => <CustomTabBarIcon focused={focused} name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'REVIEW',
          tabBarIcon: ({ color, focused }) => <CustomTabBarIcon focused={focused} name="refresh" color={color} />,
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'PROGRESS',
          tabBarIcon: ({ color, focused }) => <CustomTabBarIcon focused={focused} name="bar-chart" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'PROFILE',
          tabBarIcon: ({ color, focused }) => <CustomTabBarIcon focused={focused} name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: {
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabIconFocused: {
    backgroundColor: '#FFFF00',
    borderWidth: 2,
    borderColor: 'black',
    // Comic shadow for tab
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
  }
});
