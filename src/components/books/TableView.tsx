import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import BookRow from "./BookRow";

const TableView = ({ data }) => {
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
          {data.map((book) => (
            <BookRow key={book._id} book={book} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableView;
