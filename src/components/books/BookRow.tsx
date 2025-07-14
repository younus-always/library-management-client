import { TableCell, TableRow } from "@/components/ui/table";
import type { Book } from "@/types";
import { MdDelete } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";
import { Button } from "../ui/button";
import UpdateBookModal from "./UpdateBookModal";
import AddBorrowModal from "../borrow/AddBorrowModal";

const BookRow = ({ book }: { book: Book }) => {
  const [deleteBook] = useDeleteBookMutation();

  const {
    _id,
    title,
    author,
    genre,
    // description,
    isbn,
    copies,
    available,
    // createdAt,
    // updatedAt,
  } = book || {};

  // book delete function
  const handleDeleteModal = async (id: string) => {
    toast.custom((t) => (
      <div className="bg-slate-900 p-4 rounded-lg shadow text-slate-100">
        <p>Are you sure you want to delete this book?</p>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => toast.dismiss(t)}
            className="bg-gray-400 px-3 py-1 rounded cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={async () => {
              // Perform delete here
              const res = await deleteBook(id).unwrap();
               toast.success(`${res.message}`);
              toast.dismiss(t); // Close the toast
            }}
            className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
          >
            Yes, Delete
          </button>
        </div>
      </div>
    ));
  };

  return (
    <TableRow>
      <TableCell className="font-medium">{title}</TableCell>
      <TableCell className="font-medium">{author}</TableCell>
      <TableCell className="font-medium">{genre}</TableCell>
      <TableCell className="font-medium">{isbn}</TableCell>
      <TableCell className="font-medium">{copies}</TableCell>
      <TableCell className="font-medium">
        {available ? "Available" : "N/A"}
      </TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          {/* delete modal */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => handleDeleteModal(_id)}
                type="button"
                className="w-7 h-7 rounded-full hover:bg-accent-foreground bg-accent cursor-pointer text-red-500"
              >
                <MdDelete />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <span>Delete Book</span>
            </TooltipContent>
          </Tooltip>
          {/* update modal */}
          <UpdateBookModal book={book} />
          {/* borrow modal */}
          <AddBorrowModal book={book} />
        </div>
      </TableCell>
    </TableRow>
  );
};

export default BookRow;
