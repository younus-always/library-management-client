import AddBookModal from "@/components/books/AddBookModal";
import TableView from "@/components/books/TableView";
import { useTitle } from "@/hook/useTitle";
import { useGetBooksQuery } from "@/redux/api/baseApi";

const AllBooks = () => {
  useTitle("All Books");
  const { data } = useGetBooksQuery(undefined);

  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-0 py-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-3xl font-semibold">Total Books Data: {data?.data?.length || 0}</h3>
        <AddBookModal/>
      </div>
      <TableView />
    </section>
  );
};

export default AllBooks;
