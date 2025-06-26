import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import axios from 'axios';
import {
    Box,
    HStack, Icon,
    Pressable, Spinner,
    Text, VStack
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { FlatList, TextInput } from 'react-native';
import { gstyle } from "../styles/style";

// Define types
type Lead = {
  id: number;
  userName: string;
  userEmail: string;
  company: string;
  status: string;
};

type RootStackParamList = {
  LeadDetails: { lead: Lead };
};

const Tab = createMaterialTopTabNavigator();

const LeadCard: React.FC<{ lead: Lead }> = ({ lead }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handlePress = () => {
    navigation.navigate('LeadDetails', { lead });
  };

  return (
    <Pressable onPress={handlePress}>
      <Box bg="white" p={4} rounded="lg" borderColor="purple.200" borderWidth={1.5} m={2}>
        <VStack space={1}>
          <Text fontSize="md" fontWeight="bold">{lead.userName}</Text>
          <Text color="gray.500">{lead.userEmail}</Text>
          <Text fontSize="sm" color="gray.500">{lead.company}</Text>
          <Text fontSize="xs" color="blue.600">{lead.status}</Text>
        </VStack>
      </Box>
    </Pressable>
  );
};

const TotalLeads: React.FC<{ leads: Lead[] }> = ({ leads }) => (
  <FlatList
    data={leads}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <LeadCard lead={item} />}
    contentContainerStyle={{ paddingBottom: 16 }}
  />
);

const ProcessedLeads: React.FC<{ leads: Lead[] }> = ({ leads }) => (
  <FlatList
    data={leads.filter((_, idx) => idx % 2 === 0)}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => <LeadCard lead={item} />}
    contentContainerStyle={{ paddingBottom: 16 }}
  />
);

const DetailsTabs: React.FC<{ leads: Lead[] }> = ({ leads }) => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 14, fontWeight: '600' },
      tabBarIndicatorStyle: { backgroundColor: '#4f46e5' },
    }}
  >
    <Tab.Screen name="Total Leads">
      {() => <TotalLeads leads={leads} />}
    </Tab.Screen>
    <Tab.Screen name="Processed Leads">
      {() => <ProcessedLeads leads={leads} />}
    </Tab.Screen>
  </Tab.Navigator>
);

const Details: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchLeads = async () => {
    try {
      const response = await axios.get<Lead[]>('http://93.127.139.216:443/api/Leads/GetAllLeads');
      setLeads(response.data || []);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <Box flex={1} style={gstyle.container}>
      {/* Search Header */}
      <Box style={gstyle.searchinput}>
        <HStack alignItems="center" space={2}>
          <Icon as={Ionicons} name="search-outline" size="sm" color="gray.400" />
          <TextInput
            // style={gstyle.width100}
            placeholder="Search here..."
          />
        </HStack>
      </Box>

      {/* Tab Content */}
      {loading ? (
        <Box flex={1} justifyContent="center" alignItems="center">
          <Spinner size="lg" color="primary.500" />
        </Box>
      ) : (
        <DetailsTabs leads={leads} />
      )}
    </Box>
  );
};

export default Details;
