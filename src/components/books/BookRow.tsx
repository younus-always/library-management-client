import { TableCell, TableRow } from "@/components/ui/table";
import type { Book } from "@/types";
import { FaBook } from "react-icons/fa6";
import { MdDelete, MdModeEdit } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useDeleteBookMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";

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
  const handleDelete = async (id: string) => {
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
            onClick={() => {
              // Perform delete here
              deleteBook(id);
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

  // book update function
  const handleUpdate = (id) => {
    console.log(id);
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
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => handleDelete(_id)}
                type="button"
                className="p-1 rounded-full cursor-pointer text-red-500"
              >
                <MdDelete size={20} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span>Delete Book</span>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={() => handleUpdate(_id)}
                type="button"
                className="p-2 rounded-full cursor-pointer text-orange-400"
              >
                <MdModeEdit size={20} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span>Update Book</span>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                type="button"
                className="p-2 rounded-full cursor-pointer text-green-500"
              >
                <FaBook size={20} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <span>Borrow Book</span>
            </TooltipContent>
          </Tooltip>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default BookRow;
