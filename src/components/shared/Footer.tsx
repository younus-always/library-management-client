import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import type { Book } from "@/types";

const Footer = () => {
  const { data } = useGetBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
  });

  console.log(data?.data);
  const latestBook = data?.data
    ?.slice()
    ?.sort((a: Book, b: Book) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    })
    .slice(0, 2);

  console.log(latestBook);

  return (
    <footer className="bg-slate-950/95 text-slate-100 mt-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center py-10">
          <div>
            <Link
              to={"/"}
              className="flex items-center gap-1 group duration-150"
            >
              <img src={logoImg} alt="book logo" width={40} />
              <h3 className="text-2xl font-semibold text-slate-100">
                Li
                <span className="text-amber-200 group-hover:text-slate-100">
                  br
                </span>
                ico
              </h3>
            </Link>
            <p className="my-4 font-medium text-sm text-slate-500">
              Library Management Made Effortless.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase">Latest Books</h3>
            <p className="w-10 h-0.5 bg-slate-500 rounded-full my-6"></p>
            <div className="space-y-3">
              {latestBook?.map((current: Book) => (
                <div
                  key={current._id}
                  className="p-3 bg-gray-800 text-sm rounded-lg shadow"
                >
                  <h4>Title: {current.title}</h4>
                  <p>Author: {current.author}</p>
                  <span>Genre: {current.genre}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase">Links</h3>
            <p className="w-12 h-0.5 bg-slate-500 rounded-full my-5"></p>
            <ul className="space-y-2">
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={""}>About Us</Link>
              </li>
              <li>
                <Link to={"/all-books"}>All Books</Link>
              </li>
              <li>
                <Link to={"/add-book"}>Add Book</Link>
              </li>
              <li>
                <Link to={"/borrow-summary"}>Borrow Summary</Link>
              </li>
              <li>
                <Link to={""}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase">Get in Touch</h3>
            <p className="w-12 h-0.5 bg-slate-500 rounded-full my-5"></p>
            <div>
              <span>Bangladesh —</span>
              <p className="">Block B, Plot 34, Suite 210</p>
              <span>Bashundhara R/A, Dhaka 1229</span>
              <p className="my-5 border-b w-fit pb-2 border-slate-600 hover:border-transparent duration-300">
                info@gmail.com
              </p>
              <span className="text-xl font-semibold text-slate-400 hover:text-slate-100 duration-200">
                +880 1991 234 567
              </span>
            </div>
          </div>
        </div>
        <div className="text-center py-5 text-slate-50 border-t">
          <p>&copy; {new Date().getFullYear()}. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
