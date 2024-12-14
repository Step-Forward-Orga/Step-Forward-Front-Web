import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Check if the JWT exists
        const jwt = document.cookie.includes('jwt=');
        setIsAuthenticated(jwt);

        // Redirect logic for protected routes
        if (!jwt && router.pathname === '/calendar') {
            router.push('/login');
        }

        // Redirect logged-in users away from login/register
        if (jwt && ['/login', '/register'].includes(router.pathname)) {
            router.push('/');
        }
    }, [router]);

    return { isAuthenticated };
}