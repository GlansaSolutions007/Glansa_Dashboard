// app/login.tsx
import { useAuth } from './context/auth';
import { Button, Center, VStack, Box, Heading, FormControl } from 'native-base';
import { TextInput } from 'react-native';
import React, { useState } from 'react';

export default function LoginScreen() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Center flex={1} px="4" bg="gray.100">
      <Box w="100%" maxW="300" bg="white" p="6" rounded="lg" shadow="2">
        <Heading mb="6" textAlign="center">Login</Heading>
        <VStack space={4}>
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <TextInput
              value={username}
              onChangeText={setUsername}
              style={{ borderWidth: 1, borderRadius: 5, borderColor: '#ccc', padding: 8 }}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              style={{ borderWidth: 1, borderRadius: 5, borderColor: '#ccc', padding: 8 }}
            />
          </FormControl>
          <Button mt="4" onPress={login}>Login</Button>
        </VStack>
      </Box>
    </Center>
  );
}
