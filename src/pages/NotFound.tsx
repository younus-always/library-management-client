import { useTitle } from "@/hook/useTitle";

const NotFound = () => {
  useTitle("Not Found");
  return (
    <>
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold text-red-600">
          Something went wrong
        </h1>
        <p></p>
      </div>
    </>
  );
};

export default NotFound;
