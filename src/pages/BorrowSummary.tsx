import { useTitle } from "@/hook/useTitle";
import { useGetBorrowsQuery } from "@/redux/api/baseApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { BorrowBook } from "@/types";
import ErrorMessage from "@/components/ErrorMessage";
import LoadingSpinner from "@/components/LoadingSpinner";

const BorrowSummary = () => {
  useTitle("Borrow Summary");
  const { data, isError, isLoading } = useGetBorrowsQuery(undefined, {
    pollingInterval: 30000,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
  });

  if (isError) return <ErrorMessage message="Failed to fetch borrow books." />;
  if (isLoading) return <LoadingSpinner />;

  return (
    <section className="max-w-7xl mx-auto px-4 2xl:px-0 py-12">
      <Table className="overflow-x-auto">
        <TableCaption>A list of borrow book.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Quantity</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((item: BorrowBook, idx: number) => (
            <TableRow key={idx}>
              <TableCell>{item?.book[0]?.title}</TableCell>
              <TableCell>{item?.book[0]?.isbn}</TableCell>
              <TableCell>{item?.totalQuantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

export default BorrowSummary;
