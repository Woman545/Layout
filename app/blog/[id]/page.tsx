import Link from 'next/link';

interface PostPageProps {
    params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
    const { id } = await params;
    
    return (
        <div>
            <h1>Пост №{id}</h1>
            <p>Это содержимое поста с идентификатором {id}.</p>
            <br />
            <Link href={`/blog/${id}/comments/5`} style={{ color: '#0070f3', textDecoration: 'underline' }}>
                Посмотреть комментарий 5
            </Link>
        </div>
    );
}