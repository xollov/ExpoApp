import { Slot, useRouter, useSegments } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import { useAuth } from '../src/AuthProvider';

export default function RootLayoutNav() {

    const { token, isLoading } = useAuth();
    const router = useRouter();
    const segments = useSegments(); 
    useEffect(() => {
        if (isLoading) return; 
        const inAuthGroup = segments[0] === '(auth)';
        if (!token && !inAuthGroup) {
            router.replace('/(auth)/login');

        } else if (token && inAuthGroup) {
            router.replace('/(profile)/profile');
        }
    }, [token, isLoading, segments]);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    return <Slot />; 
}
