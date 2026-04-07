export const loginRequest = async (email: string, password: string) => {
    try {
        const response = await fetch(`https://dummyjson.com/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password: password,
            }),
            credentials: 'include'
        });
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }
        return data;
    } catch (error) {
        console.log('Login error:', error);
        throw error;
    }
};
