import type { ReactNode } from 'react';
import NavBar from './components/NavBar';
import './globals.css';

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="ru">
            <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
                <NavBar />
                <main style={{ padding: '24px' }}>{children}</main>
            </body>
        </html>
    );
}