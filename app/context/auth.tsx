// app/context/auth.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import * as SecureStore from 'expo-secure-store';
import { registerForPushNotificationsAsync } from '@/hooks/useNotifications';
import api from '../utils/api';

type AuthContextType = {
  isLoggedIn: boolean | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const checkToken = async () => {
      const token = await SecureStore.getItemAsync('token');
      setIsLoggedIn(!!token);
    };
    checkToken();
  }, []);


  const login = async (username: string, password: string) => {
    try {
      const response = await api.post('/Login', { username, password });

      const token = response.data.token ?? 'dummy_token';
      await SecureStore.setItemAsync('token', token);
      setIsLoggedIn(true);

      // Register and upload push token
      const expoPushToken = await registerForPushNotificationsAsync();
      if (expoPushToken) {
        await api.post('/DeviceToken', {
          username,
          deviceToken: expoPushToken,
        });
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync('token');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
