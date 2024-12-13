import { signUp } from "../api/auth";
import { useAuth } from "../hooks/useAuth";
import { useState } from 'react';

export default function Register() {
    useAuth();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Registering with', { email, password });
        
        console.log(await signUp(email, username, password))
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={{ display: 'block', width: '100%', margin: '8px 0', padding: '8px' }}
                    />
                </div>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ display: 'block', width: '100%', margin: '8px 0', padding: '8px' }}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ display: 'block', width: '100%', margin: '8px 0', padding: '8px' }}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        style={{ display: 'block', width: '100%', margin: '8px 0', padding: '8px' }}
                    />
                </div>
                <button type="submit" style={{ padding: '10px 15px', marginTop: '10px' }}>Register</button>
            </form>
        </div>
    );
}