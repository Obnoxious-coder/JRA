import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Legal insights, updates, and articles from JRA Law Firm. Stay informed about the latest developments in law.',
};

export default function Blog() {
  const posts = getBlogPosts();

  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="heading-1 mb-6">Legal Insights & Updates</h1>
          <p className="text-xl text-gray-600">
            Stay informed with our latest articles, legal updates, and insights
            from our experienced attorneys.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              No blog posts available yet. Check back soon for updates!
            </p>
            <Link href="/" className="btn-primary">
              Return to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

