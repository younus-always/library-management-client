import { useTitle } from "@/hook/useTitle";
import { useRouteError } from "react-router-dom";

interface RouteError {
  statusText?: string;
  message?: string;
}

const ErrorPage = () => {
  useTitle("Error");
  const error = useRouteError();
  const err = error as RouteError | null;
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold text-red-500">Oops! 😬</h1>
      <p>Something went wrong.</p>
      <pre className="mt-2 bg-gray-300 text-slate-800 p-2 rounded">
        {err?.statusText || err?.message || "Unknown error"}
      </pre>
    </div>
  );
};

export default ErrorPage;
