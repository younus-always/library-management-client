import { useTitle } from "@/hook/useTitle";
import { Link } from "react-router-dom";

const NotFound = () => {
  useTitle("Not Found");

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center space-y-4">
        <h1 className="text-6xl font-extrabold text-red-600">404 🚫</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Page not found
        </h2>
        <p className="text-gray-600">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded shadow transition"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;