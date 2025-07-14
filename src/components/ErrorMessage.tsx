const ErrorMessage = ({ message = "Something went wrong." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4 text-red-600">
      <svg
        className="w-10 h-10 text-red-500"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.054 0 1.62-1.14.997-2l-6.928-10c-.527-.762-1.667-.762-2.194 0l-6.928 10c-.623.86-.057 2 .997 2z"
        />
      </svg>
      <p className="text-xl sm:text-2xl font-semibold text-center max-w-md">
        {message}
      </p>
    </div>
  );
};

export default ErrorMessage;
