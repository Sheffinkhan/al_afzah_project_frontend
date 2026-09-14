import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center px-6">
      <SEO
        title="Page Not Found"
        description="The page you're looking for doesn't exist or has been moved."
        noindex
      />
      <div className="text-center">
        <p className="text-red-500 font-bold text-7xl md:text-8xl mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
