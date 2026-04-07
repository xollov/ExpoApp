

import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { useRouter } from 'expo-router';

import { useAuth } from '../../src/AuthProvider';
import {styles} from '../styles';

export default function ProfileScreen() {

    const { token, isLoading, user, signOut} = useAuth();
    const router = useRouter();
    const logOut = () => {
        signOut();
        router.replace('/(auth)/login')
    }
    console.log('Token in profile screen: ', token)
    console.log('User in profile screen: ', user)
    if (!user) {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Loading...</Text>
                <TouchableOpacity style={styles.button} onPress={logOut}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Name: {user.firstName}</Text>
            <Text style={styles.header}>Username: {user.username}</Text>
            <Text style={styles.header}>Email: {user.email}</Text>
            <TouchableOpacity style={styles.button} onPress={logOut}>
                <Text>Logout</Text>
            </TouchableOpacity>

        </View>
    )
}
