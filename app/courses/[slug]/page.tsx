interface CoursePageProps {
    params: Promise<{ slug: string }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
    const { slug } = await params;
    return (
        <div>
            <h1>Курс: {slug}</h1>
            <p>Добро пожаловать на страницу курса с идентификатором (slug): <strong>{slug}</strong></p>
        </div>
    );
}