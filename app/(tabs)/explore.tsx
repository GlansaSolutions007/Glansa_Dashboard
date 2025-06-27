import React from 'react';
import { Button, View, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

export default function TabTwoScreen() {
  const sendRemoteNotification = async () => {
    try {
      const response = await fetch('http://93.127.139.216:443/api/DeviceToken/send-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: 'Admin', // Make sure this matches the token's stored username
          title: '🚀 Test Notification',
          body: 'This notification was sent via backend!',
          data: { customData: 'your_custom_payload' },
        }),
      });

      const result = await response.json();
      console.log('✅ Notification sent:', result); 
      Alert.alert('Success', 'Notification sent!');
     
    } 
    catch (error) {
      console.error('❌ Error sending notification:', error);
      Alert.alert('Error', 'Failed to send notification');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Send Remote Notification" onPress={sendRemoteNotification} />
    </View>
  );
}