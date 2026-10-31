import Link from 'next/link';

export default function CoursesPage() {
    return (
        <div>
            <h1>Список курсов</h1>
            <ul>
                <li><Link href="/courses/nextjs-basics">Next.js для начинающих</Link></li>
                <li><Link href="/courses/react-advanced">Продвинутый React</Link></li>
            </ul>
        </div>
    );
}