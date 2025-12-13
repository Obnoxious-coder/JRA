import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-padding">
      <div className="container-custom text-center">
        <h1 className="heading-1 mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link href="/" className="btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
}

