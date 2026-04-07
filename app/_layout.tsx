
import {
    Stack
} from 'expo-router'

import { AuthProvider } from '../src/AuthProvider' 
import  RootLayoutNav  from './RootLayoutNav' 

export default function RoutLayout() {
    return (
        <AuthProvider>
            <RootLayoutNav/>
        </AuthProvider>
    );
}
