import { Box, HStack, IconButton, Icon, Text, useColorModeValue } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
    title: string;
};

export default function CustomHeader({ title }: Props) {
    const router = useRouter();
    const bgColor = useColorModeValue('white', 'coolGray.900');
    const textColor = useColorModeValue('black', 'white');

    return (
            <HStack alignItems="center" py={3}  px={1} borderBottomWidth={1} borderColor="coolGray.200" bg={bgColor} >
                <IconButton
                    icon={<Icon as={Ionicons} name="arrow-back" size="md" color={textColor} />}
                    onPress={() => router.back()}
                    variant="ghost"
                />
                <Text fontSize="lg" fontWeight="bold" ml={2} color={textColor}>
                    {title}
                </Text>
            </HStack>
    );
}