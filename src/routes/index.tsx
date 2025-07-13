import MainLayout from "@/layout/MainLayout";
import AddBook from "@/pages/AddBook";
import AllBooks from "@/pages/AllBooks";
import BorrowSummary from "@/pages/BorrowSummary";
import ErrorPage from "@/pages/ErrorPage";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: AllBooks,
      },
      {
        path: "all-books",
        Component: AllBooks,
      },
      {
        path: "add-book",
        Component: AddBook,
      },
      {
        path: "borrow-summary",
        Component: BorrowSummary,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
