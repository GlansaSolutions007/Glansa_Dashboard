import { DarkTheme, DefaultTheme, ThemeProvider, useFocusEffect } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as Notifications from 'expo-notifications';
import { NativeBaseProvider } from 'native-base';
import { useEffect, useState, useCallback } from 'react';
import * as SecureStore from 'expo-secure-store';
import { View } from 'react-native';
import { AuthProvider, useAuth } from './context/auth';
import { SafeAreaView } from 'react-native-safe-area-context';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

function LayoutContainer() {
  const colorScheme = useColorScheme();
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn === false) {
      router.replace('/login');
    } else if (isLoggedIn === true) {
      router.replace('/(tabs)');
    }
  }, [isLoggedIn]);

  return (
    <NativeBaseProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
          <Slot />
          <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
        </SafeAreaView>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}



export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) return null;

  return (
    <AuthProvider>
      <LayoutContainer />
    </AuthProvider>
  );
}
