import { useTitle } from "@/hook/useTitle";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  useTitle("Error")
  const error = useRouteError();
console.log(error)
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold text-red-500">Oops! 😬</h1>
      <p>Something went wrong.</p>
      <pre className="mt-2 bg-gray-100 p-2 rounded">
        {/* {error.statusText || error.message} */}
      </pre>
    </div>
  );
};

export default ErrorPage;
