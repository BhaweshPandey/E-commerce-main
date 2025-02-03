const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-2">Oops! Page Not Found</p>
        <p className="text-gray-500 mt-2">
          The page you're looking for doesn’t exist or has been moved.
        </p>
      </div>
    </div>
  );
};
export default NotFoundPage;
