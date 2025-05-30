import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-6xl font-bold text-indigo-600 dark:text-indigo-400">404</h1>
      <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Page Not Found</h2>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="mt-8">
        <Link
          to="/"
          className="btn-primary"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage