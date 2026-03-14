import axios from 'axios';
import { updatePasswordObject, updateEmailObject } from './interface/user.inteface';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function changePassword(
    oldPassword: string,
    newPassword: string,
) {
    try {
        const updatePasswordData: updatePasswordObject = {
            oldPassword,
            newPassword,
            newPasswordConfirm: newPassword
        }

        const response = await axios.post(`${API_URL}/user/password`, updatePasswordData);
        
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Change Password failed');
    }
}

export async function changeEmail(
    email: string,
    password: string
) {
    try {
        const updateEmailData: updateEmailObject = {
            newEmail: email,
        }

        const response = await axios.post(`${API_URL}/user/email`, updateEmailData);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.message || 'Change Email failed');
    }
}