import { useEffect } from "react";

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Librico - Library Management`;
  }, [title]);
};
