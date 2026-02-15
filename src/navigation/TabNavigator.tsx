import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TomorrowScreen from '../screens/TomorrowScreen';
import ArchiveScreen from '../screens/ArchiveScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Colors } from '../constants/colors';
import { Typography } from '../constants/typography';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.text.tertiary,
        tabBarStyle: {
          backgroundColor: Colors.light.card,
          borderTopWidth: 1,
          borderTopColor: Colors.light.border,
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontFamily: Typography.fontFamily.medium,
          fontSize: Typography.fontSize.xs,
        },
      }}
    >
      <Tab.Screen 
        name="Tomorrow" 
        component={TomorrowScreen}
        options={{
          tabBarLabel: 'Tomorrow',
        }}
      />
      <Tab.Screen 
        name="Archive" 
        component={ArchiveScreen}
        options={{
          tabBarLabel: 'Archive',
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
}