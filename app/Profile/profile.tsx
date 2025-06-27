import { gstyle } from "@/styles/style";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import {
    Box,
    Divider,
    HStack,
    Icon,
    Pressable,
    ScrollView,
    Text,
    VStack
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

// import ProfilePic from "../assets/Screenshot 2025-04-21 111413.png";
const Profile = () => {
//   const handleEditProfile = () => {
//     navigation.navigate("EditProfile");
//   };
  const router = useRouter();

  return (
    <SafeAreaView style={[gstyle.container]}>
      <ScrollView>
        {/* Header & Avatar */}
        <Box position="relative" alignItems="center">
          <Pressable
         onPress={() => router.push('/Profile/editProfie')}
            // onPress={handleEditProfile}
            position="absolute"
            top={0}
            right={0}
            zIndex={1}
          >
            <Icon as={MaterialIcons} name="edit" size="md"  />
          </Pressable>

          {/* <Avatar
            size="2xl"
            source={ProfilePic}
            mb={3}
            
          /> */}
          <Text fontSize="xl" fontWeight="bold" style={[gstyle.primary]}>
            Sourav
          </Text>
          <Text fontSize="sm" style={[gstyle.neutral500]}>
            sourav.glansa@gmail.com
          </Text>
        </Box>

        <Divider my={5} />

        {/* Contact Info Section */}
        <Box mb={5}>
          <Text fontSize="md" fontWeight="bold" mb={2}>
            Contact Information
          </Text>
          <VStack space={3}>
            <HStack justifyContent="space-between">
              <Text style={[gstyle.neutral500]}>Email</Text>
              <Text color="gray.800">sourav.glansa@gmail.com</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text style={[gstyle.neutral500]}>Address</Text>
              <Text color="gray.800">Madhapur, Hyderabad</Text>
            </HStack>
            <HStack justifyContent="space-between">
              <Text style={[gstyle.neutral500]}>Mobile Number</Text>
              <Text color="gray.800">9140603543</Text>
            </HStack>
          </VStack>
        </Box>

        <Divider mb={5} />

        {/* Logout */}
        <Pressable onPress={() => alert("Logged out")}>
          <Box alignItems="center" mt={2}>
            <Text color="red.500" fontSize="md" fontWeight="bold">
              Logout
            </Text>
          </Box>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;