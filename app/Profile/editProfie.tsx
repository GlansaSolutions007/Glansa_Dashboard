import {
    Box,
    Button,
    Icon,
    ScrollView,
    Text,
    VStack
} from "native-base";
import { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
// import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
// import ProfilePic from "../assets/Screenshot 2025-04-21 111413.png";
import { gstyle } from "@/styles/style";
import { TextInput } from "react-native";

const EditProfile = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("Sourav");
  const [email, setEmail] = useState("sourav.glansa@gmail.com");
  const [address, setAddress] = useState("Madhapur, Hyderabad");
  const [contactNumber, setContact] = useState("9140603543");

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       quality: 1,
//     });

//     if (!result.canceled) {
//       setImage(result.assets[0].uri);
//     }
//   };

  return (
    <SafeAreaView style={[gstyle.container]}>
      <ScrollView>
        <Box alignItems="center" mb={6}>
          <Box position="relative">
           {/* <Avatar
              size="2xl"
              source={image ? { uri: image } : ProfilePic}
            /> */}
            <TouchableOpacity >
              <Box
                position="absolute"
                bottom={0}
                right={0}
                bg="white"
                borderRadius="full"
                p={1}
                shadow={1}
              >
                <Icon as={Ionicons} name="camera" size={5} color="gray.700" />
              </Box>
            </TouchableOpacity>
          </Box>
          <Text mt={2} fontSize="md" fontWeight="bold" color="gray.700">
            Tap image to change
          </Text>
        </Box>

        <VStack>
          <Box>
            <Text mb={1} fontSize="sm" color="gray.600">
              Full Name
            </Text>
            <TextInput style={[gstyle.input]} value={name} placeholder="Full Name" />
          </Box>

          <Box>
            <Text mb={1} fontSize="sm" color="gray.600">
              Email Address
            </Text>
            <TextInput style={[gstyle.input]} value={email} placeholder="Email" />
          </Box>

          <Box>
            <Text mb={1} fontSize="sm" color="gray.600">
              Contact Number
            </Text>
            <TextInput style={[gstyle.input]} value={contactNumber} placeholder="Email" />
          </Box>

          <Box>
            <Text mb={1} fontSize="sm" color="gray.600">
              Address
            </Text>
            <TextInput style={[gstyle.input]} value={address} placeholder="Address" />
          </Box>

          <Button>Save</Button>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
