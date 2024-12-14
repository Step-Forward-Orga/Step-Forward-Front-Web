import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
    useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logging in with', { email, password });
        // Add your API call here
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
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
                <button type="submit" style={{ padding: '10px 15px', marginTop: '10px' }}>Login</button>
            </form>
        </div>
    );
}