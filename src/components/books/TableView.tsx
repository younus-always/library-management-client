import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BookRow from "./BookRow";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { Book } from "@/types";
import ErrorMessage from "../ErrorMessage";
import LoadingSpinner from "../LoadingSpinner";
import { useState } from "react";

const TableView = () => {
  const [page, setPage] = useState(1);
  const limit = 10;
  // Calculate skip dynamically:
  const skip = (page - 1) * limit;

  const { data, isError, isLoading } = useGetBooksQuery(
    { skip, limit },
    {
      pollingInterval: 30000,
      refetchOnMountOrArgChange: true,
      refetchOnReconnect: true,
      refetchOnFocus: true,
    }
  );

  console.log(data);

  if (isError) return <ErrorMessage message="Failed to fetch books." />;
  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Table className="overflow-x-auto">
        <TableCaption>A list of all books data.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Copies</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((book: Book, idx: number) => (
            <BookRow key={idx} book={book} />
          ))}
        </TableBody>
      </Table>
      {/* pagination */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className={`px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-slate-700 cursor-pointer font-semibold ${page ===1 && "cursor-not-allowed"}`}
          disabled={page === 1}
        >
          Prev
        </button>
        <span className="text-sm font-medium">Page {page}</span>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 text-slate-700 cursor-pointer font-semibold"
          disabled={data?.data?.length < limit}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TableView;
