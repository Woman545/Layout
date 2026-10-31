import type { ReactNode } from 'react';

interface BlogLayoutProps {
    children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
    return (
        <section style={{ border: '1px solid #999', padding: '16px', marginTop: '16px', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0 }}>Раздел «Блог»</h2>
            <p style={{ fontSize: '0.9em', color: '#666' }}> </p>
            {children}
        </section>
    );
}