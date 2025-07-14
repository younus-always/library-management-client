import { useEffect } from "react";

export const useTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Librico - Your Digital Bookkeeper.`;
  }, [title]);
};
