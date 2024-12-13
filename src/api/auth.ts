import axios from 'axios';
import { signUpObject, signInObject} from './interface/auth.interface';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function signUp(
    email: string,
    username: string,
    password: string
) {
    try {
        const signUpData: signUpObject = {
            email,
            username,
            password,
        }

        const response = await axios.post(`${API_URL}/authentication/sign-up`, signUpData);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Registration failed');
    }
}

export async function signIn(
    email: string,
    password: string
) {
    try {
        const signInData: signInObject = {
            email,
            password,
        }

        const response = await axios.post(`${API_URL}/auth/login`, signInData);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Login failed');
    }
}