import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import useCachedResources from './src/hooks/useCachedResources';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <RootNavigator />
    </NavigationContainer>
  );
}