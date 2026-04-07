
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

import { styles } from '../styles';
import { loginRequest } from '../../src/authRequest';
import { useAuth } from '../../src/AuthProvider';


export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signIn } = useAuth();
    const router = useRouter();
    const logIn = async () => {
        try {
            const data = await loginRequest(email, password);
            await signIn(data.accessToken, data); 
        } catch (error) {
            console.log('Login failed: ', error);
        }
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>
            <TextInput style={styles.textInput} placeholder='username' onChangeText={setEmail}/>
            <TextInput style={styles.textInput} placeholder='password' onChangeText={setPassword}/>
            <TouchableOpacity style={styles.button} onPress={logIn}>
                <Text>Login</Text>
            </TouchableOpacity>
            <Text style={styles.small}>Test: username=emilys</Text>
            <Text style={styles.small}>Test: password=emilyspass</Text>
        </View>
    )
}
