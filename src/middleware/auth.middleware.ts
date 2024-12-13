import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const jwt = req.cookies.get('jwt');

    const publicPages = ['/', '/exercise', '/login', '/register'];
    const pathname = req.nextUrl.pathname;

    // Redirect logged-in users away from login/register pages
    if (jwt && ['/login', '/register'].includes(pathname)) {
        return NextResponse.redirect(new URL('/', req.url)); // Redirect to homepage
    }

    // Allow access to public pages
    if (publicPages.includes(pathname)) {
        return NextResponse.next();
    }

    // Redirect unauthenticated users from protected pages
    if (!jwt && !publicPages.includes(pathname)) {
        return NextResponse.redirect(new URL('/login', req.url)); // Redirect to login
    }

    return NextResponse.next();
}