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
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { toast } from "sonner";
import { useAddBorrowMutation } from "@/redux/api/baseApi";
import { FaBook } from "react-icons/fa6";
import type { Book } from "@/types";
import { useNavigate } from "react-router-dom";

const AddBorrowModal = ({ book }: { book: Book }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [addBorrow] = useAddBorrowMutation();
  const form = useForm();
  const { _id, copies } = book || {};

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const { borrowQuantity } = data;
      if (Number(borrowQuantity) < 1)
        return toast.warning("Invalid quantity input");
      if (Number(borrowQuantity) > copies)
        return toast.info(
          `Not enough copies available! Available copies: ${copies}`
        );

      const borrowData = { book: _id, quantity: borrowQuantity };
      const res = await addBorrow(borrowData).unwrap();

      toast.success(res.message);
      form.reset();
      setOpen(false);
      navigate("/borrow-summary");
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
              className="w-7 h-7 rounded-full hover:bg-accent-foreground bg-accent cursor-pointer text-green-500"
            >
              <FaBook />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <span>Borrow Book</span>
          </TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogDescription className="sr-only">
          Fill up this form to add borrow book
        </DialogDescription>
        <DialogHeader className="mb-2">
          <DialogTitle>Add Borrow Book</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="bookId"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Book ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="borrow book ID"
                      {...field}
                      defaultValue={_id}
                      readOnly
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="borrowQuantity"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="borrow quantity"
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
                Borrow
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBorrowModal;
