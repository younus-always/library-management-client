import { Loader } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-40">
      <Loader className="h-10 w-10 animate-spin text-blue-500" />
    </div>
  );
};

export default LoadingSpinner;
