import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <time className="text-sm text-gray-500" dateTime={post.date}>
              {formatDate(post.date)}
            </time>
            {post.tags && post.tags.length > 0 && (
              <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                {post.tags[0]}
              </span>
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-primary-700 transition-colors">
            {post.title}
          </h3>
          {post.excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
          )}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">By {post.author}</span>
            <span className="text-primary-700 font-medium text-sm hover:underline">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

