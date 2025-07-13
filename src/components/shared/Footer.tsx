// import { Link } from "react-router-dom";
// import logoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-900 mt-4">
      {/*     <Link
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
            </Link> */}
      <div className="text-center py-3">
        <p>
          <span></span>
          &copy; {new Date().getFullYear()} / All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
