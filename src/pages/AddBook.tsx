import { useTitle } from "@/hook/useTitle";
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
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAddBookMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  useTitle("Add Book");
  const form = useForm();
  const [addBook] = useAddBookMutation();
  const navigate = useNavigate();
  
  const onSumit: SubmitHandler<FieldValues> = async (data) => {
    try {
      if (data.copies < 1)
        return toast.warning("Book copies must be a valid number!");
      const bookData = {
        ...data,
        available: true,
      };
      const res = await addBook(bookData);
      if (res.error) return toast.error(`${res.error.status}`);
      toast.success(`${data.title} Book has been created successfully.`);
      form.reset();
      navigate("/all-books");
    } catch (error: unknown) {
      console.log(error);
      form.reset();
    }
  };

  return (
    <section className="max-w-4xl mx-auto py-12">
      <h3 className="text-3xl font-semibold text-center mb-4">Add New Book</h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSumit)}
          className="space-y-3 rounded-xl py-6 px-5 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="pl-2">Title</FormLabel>
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
                  <FormLabel className="pl-2">Author</FormLabel>
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
          </div>
          <div className="flex items-center gap-3">
            <FormField
              control={form.control}
              name="copies"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="pl-2">Copies</FormLabel>
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
                  <FormLabel className="pl-2">ISBN</FormLabel>
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
          </div>
          <div className="flex items-center gap-3">
            <FormField
              control={form.control}
              name="genre"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel className="pl-2">Genre</FormLabel>
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
                <FormItem className="w-full">
                  <FormLabel className="pl-2">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="book description..."
                      {...field}
                      value={field.value || ""}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full cursor-pointer">
            Add Book
          </Button>
        </form>
      </Form>
    </section>
  );
};

export default AddBook;
