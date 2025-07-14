import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  useForm,
  type FieldValues,
  type SubmitHandler,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { MdModeEdit } from "react-icons/md";
import type { Book } from "@/types";
import { toast } from "sonner";
import { useUpdateBookMutation } from "@/redux/api/baseApi";

const UpdateBookModal = ({ book }: { book: Book }) => {
  const [updateBook] = useUpdateBookMutation();
  const [open, setOpen] = useState(false);
  const { _id, title, author, copies, isbn, genre, description } = book || {};
  const form = useForm({
    defaultValues: {
      title,
      author,
      copies,
      isbn,
      genre,
      description,
    },
  });

  // When modal opens, reset form with current book data
  useEffect(() => {
    if (open) {
      form.reset({ ...book });
    }
  }, [book, form, open]);

  // update submit handler
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const { copies } = data;
      if (Number(copies) < 1)
        return toast.warning("Book copies must be a valid number!");
      
      const bookData = {
        ...data,
        available: true,
      };
      const res = await updateBook({ id: _id, data: bookData }).unwrap();
      toast.success(`${res.message}`);

      form.reset();
      setOpen(false);
    } catch (err) {
      if (err && typeof err === "object" && "status" in err) {
        toast.error(`Error ${err.status}`);
      } else {
        toast.error("Something went wrong");
      }
      form.reset();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={() => setOpen(true)}
              className="w-7 h-7 rounded-full hover:bg-accent-foreground bg-accent cursor-pointer text-orange-400"
            >
              <MdModeEdit />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <span>Update Book</span>
          </TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">
          Fill up this form to update book data
        </DialogDescription>
        <DialogHeader className="mb-2">
          <DialogTitle>Update "{title}" Book</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="book title" {...field} required />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="book author" {...field} required />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="book copies"
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isbn"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input placeholder="book isbn" {...field} required />
                  </FormControl>
                </FormItem>
              )}
            />
            {/* select field */}
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Genre</FormLabel>
                  <Select onValueChange={field.onChange} {...field} required>
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="BIOGRAPHY">BIOGRAPHY</SelectItem>
                      <SelectItem value="FANTASY">FANTASY</SelectItem>
                      <SelectItem value="SCIENCE">SCIENCE</SelectItem>
                      <SelectItem value="HISTORY">HISTORY</SelectItem>
                      <SelectItem value="FICTION">FICTION</SelectItem>
                      <SelectItem value="NON_FICTION">NON_FICTION</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="book description... "
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter className="mt-5">
              <DialogClose asChild>
                <Button variant="outline" className="cursor-pointer">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" className="cursor-pointer">
                Update
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateBookModal;
