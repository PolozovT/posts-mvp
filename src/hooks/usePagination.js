import { useMemo } from "react";

export const usePagination = (totalPages) => {
  const pagesArray = useMemo(() => {
    const arr = [];
    if (totalPages > 0) {
      for (let i = 0; i < totalPages; i++) {
        arr.push(i + 1);
      }
    }
    return arr;
  }, [totalPages]);

  return pagesArray;
}