import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Box, HStack, Icon, Text, VStack } from 'native-base';
import { Pressable, SafeAreaView, TextInput } from 'react-native';
import { gstyle } from "../../styles/style";

export default function LeadsScreen() {
  const router = useRouter();
  return (
     <SafeAreaView   style={[ gstyle.bgwhite, gstyle.container]}>
      <Box style={gstyle.searchinput}>
        <HStack style={[gstyle.borderRadius]}  ml={2} space={2}>
          <Icon
            as={Ionicons}
            name="search-outline"
            size="sm"
            // style={gstyle.neutral500}
          />
          <TextInput
            placeholder="Search here..."
            placeholderTextColor="#888"
            // width="100%"
            style={[gstyle.f3]}
          />
        </HStack>
      </Box>

      <Pressable  onPress={() => router.push('/Lead/leads')} >
        <Box style={gstyle.Card}>
          <HStack space={4}>
            <Box borderRadius={100} p={3} style={[gstyle.bgprimary]}>
              <Icon
                as={Ionicons}
                name="briefcase-outline"
                size="md"
                // style={gstyle.white}
              />
            </Box>
            <VStack>
              <Text style={[gstyle.f4, gstyle.primary]}>Marketing</Text>
              <Text style={[gstyle.f2, gstyle.secondary]}>Department</Text>
            </VStack>
          </HStack>
        </Box>
      </Pressable>
      <Pressable onPress={() => router.push('/Lead/details')} >
        <Box style={gstyle.Card}>
          <HStack space={4}>
            <Box borderRadius={100} p={3} style={[gstyle.bgprimary]}>
              <Icon
                as={Ionicons}
                name="briefcase-outline"
                size="md"
                // style={gstyle.white}
              />
            </Box>
            <VStack>
              <Text style={[gstyle.f4, gstyle.primary]}>Sales</Text>
              <Text style={[gstyle.f2, gstyle.secondary]}>Department</Text>
            </VStack>
          </HStack>
        </Box>
      </Pressable>
      <Pressable onPress={() => router.push('/Lead/details')} >
        <Box style={gstyle.Card}>
          <HStack space={4}>
            <Box borderRadius={100} p={3} style={[gstyle.bgprimary]}>
              <Icon
                as={Ionicons}
                name="briefcase-outline"
                size="md"
                // style={gstyle.white}
              />
            </Box>
            <VStack>
              <Text style={[gstyle.f4, gstyle.primary]}>Cleaning</Text>
              <Text style={[gstyle.f2, gstyle.secondary]}>Department</Text>
            </VStack>
          </HStack>
        </Box>
      </Pressable>
    </SafeAreaView>
  );
}
