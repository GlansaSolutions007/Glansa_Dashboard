import CustomHeader from '@/components/CustomHeader';
import { useLocalSearchParams } from 'expo-router';
import { Box, Divider, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { ScrollView } from 'react-native';
import { gstyle } from '../../styles/style';

type Lead = {
  id: number;
  userName: string;
  userEmail: string;
  company: string;
  status: string;
};

const LeadDetails: React.FC = () => {
  const params = useLocalSearchParams();
  const lead: Lead = JSON.parse(params.lead as string);

  return (
     <Box flex={1} style={gstyle.container}>
          <CustomHeader title="Lead Details" />
    <ScrollView style={gstyle.bgwhite}>
      <Box style={gstyle.container} mt={2}>
        <Box p={3} style={[gstyle.bgprimary, gstyle.borderRadiustoplr]}>
          <Text style={[gstyle.f4, gstyle.white]}>{lead.userName}</Text>
          <Text style={[gstyle.f3, gstyle.white]}>{lead.userEmail}</Text>
        </Box>

        <Box p={3} style={gstyle.borderRadiustoblr}>
          <VStack space={3}>
            <Text style={[gstyle.f4, gstyle.primary]}>Lead Information</Text>
            <SectionRow label="Company" value={lead.company} />
            <SectionRow label="Source of Lead" value="Website" />
            <SectionRow label="Status" value={lead.status} />

            <Divider my={2} />

            <Text style={[gstyle.f4, gstyle.primary]}>Follow-Up</Text>
            <SectionRow label="Next Follow Up" value="31 May 2025" />
            <SectionRow label="Action Point" value="Shared profile" />

            <Divider my={2} />

            <Text style={[gstyle.f4, gstyle.primary]}>Interaction Stages</Text>
            <Stage label="Intro Call" value="Yes" />
            <Stage label="Meeting" value="Yes" />
            <Stage label="Proposal Sharing" value="No" />
            <Stage label="Objection Funding" value="No" />
            <Stage label="Negotiation" value="No" />
            <Stage label="Closing" value="-" />

            <Divider my={2} />

            <Text style={[gstyle.f4, gstyle.primary]}>Key Dates</Text>
            <SectionRow label="Closing Date" value="10 Jul 2025" />
            <SectionRow label="Proposed Date" value="10 Jul 2025" />
            <SectionRow label="Deal Closure Date" value="10 Jul 2025" />
          </VStack>
        </Box>
      </Box>
    </ScrollView>
        </Box>
    
  );
};

const SectionRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <HStack justifyContent="space-between">
    <Text style={[gstyle.f3, gstyle.neutral500]}>{label}:</Text>
    <Text style={[gstyle.f3, gstyle.primary]}>{value}</Text>
  </HStack>
);

const Stage: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  const isYes = value.toLowerCase() === 'yes';
  return (
    <HStack justifyContent="space-between">
      <Text style={[gstyle.f3, gstyle.neutral500]}>{label}</Text>
      <Text style={[gstyle.f3, isYes ? gstyle.success : gstyle.neutral300]}>{value}</Text>
    </HStack>
  );
};

export default LeadDetails;
