import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

export default function PushButton({ onPress }: { onPress: () => void }) {
return (
<View style={styles.container}>
<Button title="Send Push Notification" onPress={onPress} />
</View>
);
}

const styles = StyleSheet.create({
container: {
marginTop: 32,
paddingHorizontal: 20,
},
});