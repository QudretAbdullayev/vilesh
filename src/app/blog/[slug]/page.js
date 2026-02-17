
import BlogDetail from '@/components/BlogDetail';
import { blogPosts } from '@/data/blogPosts';

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | Vilesh`,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    return <BlogDetail slug={slug} />;
}
