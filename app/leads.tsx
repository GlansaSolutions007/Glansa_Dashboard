import { Box, Text, VStack } from 'native-base';
import CustomHeader from '@/components/CustomHeader'; // adjust import path accordingly

export default function LeadsScreen() {
    return (
        <VStack flex={1} bg="white">
            <CustomHeader title="Leads" />
            <Box flex={1} justifyContent="center" alignItems="center">
                <Text fontSize="xl">Leads Page</Text>
            </Box>
        </VStack>
    );
}