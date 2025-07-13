import { TableCell, TableRow } from "@/components/ui/table";
import { MdAddToPhotos, MdDelete, MdModeEdit } from "react-icons/md";

const BookRow = ({ book }: IBook) => {
  const {
    _id,
    title,
    author,
    genre,
    description,
    isbn,
    copies,
    available,
    createdAt,
    updatedAt,
  } = book || {};
  console.log(available);

  return (
    <TableRow>
      <TableCell className="font-medium">{title}</TableCell>
      <TableCell className="font-medium">{author}</TableCell>
      <TableCell className="font-medium">{genre}</TableCell>
      <TableCell className="font-medium">{isbn}</TableCell>
      <TableCell className="font-medium">{copies}</TableCell>
      <TableCell className="font-medium">
        {available ? "available" : "unavailable"}
      </TableCell>
      <TableCell>
        <div>
          <button type="button">
            <MdModeEdit />
          </button>
          <button type="button">
            <MdAddToPhotos />
          </button>
          <button type="button">
            <MdDelete />
          </button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default BookRow;
