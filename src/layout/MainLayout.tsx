import Footer from "@/components/shared/Footer";
import Navber from "@/components/shared/Navber";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Navber />
      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
