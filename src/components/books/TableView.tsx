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

const TableView = () => {
  const { data, isError, isLoading } = useGetBooksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });

  if (isError) return <p className="text-xl sm:text-3xl font-bold text-center py-12">Oh no, there was an error! Please try again.</p>;
  if (isLoading) return <p>Loading........</p>;

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
    </div>
  );
};

export default TableView;
