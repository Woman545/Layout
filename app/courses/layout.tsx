import type { ReactNode } from 'react';

export default function CoursesLayout({ children }: { children: ReactNode }) {
    return (
        <section style={{ border: '1px solid #4caf50', padding: '16px', marginTop: '16px', borderRadius: '8px' }}>
            <h2 style={{ marginTop: 0, color: '#4caf50' }}>Раздел «Курсы»</h2>
            {children}
        </section>
    );
}