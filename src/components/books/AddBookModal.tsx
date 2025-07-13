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
  type SubmitErrorHandler,
} from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAddBookMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";

const AddBookModal = () => {
  const [open, setOpen] = useState(false);
  const form = useForm();
  const [addBook] = useAddBookMutation();

  const onSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    try {
      if (data.copies < 1)
        return toast.warning("Book copies must be a valid number!");
      const bookData = {
        ...data,
        available: true,
      };
      const res = await addBook(bookData).unwrap();
      if (res.error) return toast.error(`${res.error.status}`);
      toast.success(`${res.message}`);
      form.reset();
      setOpen(false);
    } catch (error: unknown) {
      console.log(error);
      form.reset();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="cursor-pointer">
            Add Book
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogDescription className="sr-only">
            Fill up this form to add task
          </DialogDescription>
          <DialogHeader className="mb-2">
            <DialogTitle>Add New Book</DialogTitle>
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
                      <Input
                        placeholder="book title"
                        {...field}
                        value={field.value || ""}
                        required
                      />
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
                      <Input
                        placeholder="book author"
                        {...field}
                        value={field.value || ""}
                        required
                      />
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
                        value={field.value || 1}
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
                      <Input
                        placeholder="book isbn"
                        {...field}
                        value={field.value || ""}
                        required
                      />
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
                    <Select
                      onValueChange={field.onChange}
                      value={field.value}
                      required
                    >
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
                        value={field.value || ""}
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
                  Submit
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddBookModal;
