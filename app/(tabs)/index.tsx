import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Box, Button, Center, Heading, Text, VStack } from 'native-base';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useAuth } from '../context/auth';

export default function HomeScreen() {

  const { logout } = useAuth();
  const router = useRouter();
  return (
    <Center flex={1} bg="gray.100" px="4">
      <Box w="100%" maxW="400" p="6" bg="white" rounded="2xl" shadow="4">
        <VStack space={5} alignItems="center">
          <Heading size="lg" textAlign="center" color="primary.500">
            Welcome to the Dashboard!
          </Heading>
          <Text fontSize="md" color="gray.600" textAlign="center">
            This is your home screen. You can start exploring the app or log out using the button below.
          </Text>
          <Pressable
            onPress={() => router.push('/leads')}
            style={{
              marginTop: 20,
              padding: 16,
              backgroundColor: '#4e8cff',
              borderRadius: 10,
            }}
          >
            <Text style={{ color: 'white' }}>Go to Leads</Text>
          </Pressable>
          <Button colorScheme="red" w="full" onPress={logout}>
            Log Out
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}
