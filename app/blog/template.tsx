import type { ReactNode } from 'react';

interface BlogTemplateProps {
    children: ReactNode;
}

export default function BlogTemplate({ children }: BlogTemplateProps) {
    console.log('BlogTemplate смонтирован заново!');
    return <div style={{ animation: 'fadeIn 0.3s ease-in' }}>{children}</div>;
}