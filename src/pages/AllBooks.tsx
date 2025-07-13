import TableView from "@/components/books/TableView";
import { Button } from "@/components/ui/button";
import { useTitle } from "@/hook/useTitle";
import { useGetBooksQuery } from "@/redux/api/baseApi";

const AllBooks = () => {
  useTitle("All Books");
  const { data, isError, isLoading, isSuccess } = useGetBooksQuery(undefined, {
    pollingInterval: 30000,
    refetchOnMountOrArgChange: true,
    refetchOnReconnect: true,
    refetchOnFocus: true,
  });

  console.log(isError, isLoading, isSuccess, data);
  if (isLoading) return;

  return (
    <section className="max-w-7xl mx-auto px-4 xl:px-0 py-12">
      <div className="flex items-center justify-between mb-5">
        <h3></h3>
        <Button >Add Book</Button>
      </div>
      <TableView data={data.data} />
    </section>
  );
};

export default AllBooks;
