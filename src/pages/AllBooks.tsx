import AddBookModal from "@/components/books/AddBookModal";
import TableView from "@/components/books/TableView";
import { useTitle } from "@/hook/useTitle";

const AllBooks = () => {
  useTitle("All Books");

  return (
    <section className="max-w-7xl mx-auto px-4 2xl:px-0 py-12">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl sm:text-2xl font-semibold mr-3">
          All Books. View and manage your book collection, or add a new book.
        </h3>
        <AddBookModal />
      </div>
      <TableView />
    </section>
  );
};

export default AllBooks;
