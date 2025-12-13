import { BlogPost } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { remark } from 'remark';
import html from 'remark-html';

interface BlogPostProps {
  post: BlogPost;
}

async function markdownToHtml(content: string): Promise<string> {
  const processedContent = await remark().use(html).process(content);
  return processedContent.toString();
}

export default async function BlogPostComponent({ post }: BlogPostProps) {
  const contentHtml = await markdownToHtml(post.content);

  return (
    <article className="max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <h1 className="heading-1 mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
          <time dateTime={post.date} className="text-sm">
            {formatDate(post.date)}
          </time>
          <span className="text-sm">By {post.author}</span>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {post.excerpt && (
          <p className="text-xl text-gray-600 italic border-l-4 border-primary-700 pl-4">
            {post.excerpt}
          </p>
        )}
      </header>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}

