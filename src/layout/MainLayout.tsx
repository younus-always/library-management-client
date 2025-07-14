import Footer from "@/components/shared/Footer";
import Navber from "@/components/shared/Navber";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Navber />
      <main className="min-h-[calc(100vh-482.8px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
