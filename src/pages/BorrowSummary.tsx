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

const BorrowSummary = () => {
  useTitle("Borrow Summary");
  const { data, isError, isLoading } = useGetBorrowsQuery(undefined);
  if (isLoading) return <p>Loading......</p>;
  console.log(data.data);

  const borrowQuantity = data.data.map((borrow) => borrow.totalQuantity);

  const abc = data.data.map((book) => book.map((b) => b));
  console.log(abc);

  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-0 py-12">
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
          {/* <TableRow>
            {data.data.map((book) =>
              book.book.map((b) => <TableCell>{b}</TableCell>)
            )}
            {borrowQuantity.map((quantity) => (
              <TableCell>{quantity}</TableCell>
            ))} */}
          {/* </TableRow> */}
        </TableBody>
      </Table>
    </section>
  );
};

export default BorrowSummary;
