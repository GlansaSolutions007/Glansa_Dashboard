// app/login.tsx
import { Box, Button, FormControl, Heading, NativeBaseProvider, Text, VStack } from 'native-base';
import { useState } from 'react';
import { Image, TextInput } from 'react-native';
import { useAuth } from '../context/auth';

export default function LoginScreen() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (

    <NativeBaseProvider>
      <Box flex={1} justifyContent="center" alignItems="center" bg="gray.100" px={4}>
        <Image
          source={require('../assets/images/gllogo-pl1l6bmjhmx3czxexrdpaod6usjyu1ohofup34yo3o.png')}
          style={{ width: 120, height: 120, marginBottom: 20 }}
          resizeMode="contain"
        />
        <Box bg="white" p={6} rounded="xl" shadow={2} w="100%" maxW="400">
          <VStack space={4}>
            <Heading size="lg" color="primary.600" textAlign="center">
              Login
            </Heading>
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
                style={{ borderWidth: 1, borderRadius: 5, borderColor: '#ccc', padding: 8, color: 'black' }}
              />
            </FormControl>

            <Button onPress={login} colorScheme="primary">
              Sign In
            </Button>

            <Text textAlign="right" fontSize="sm" color="gray.500">
              Forgot your password?
            </Text>
          </VStack>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
