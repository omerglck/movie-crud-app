import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-5 border-b">
      <Link className="flex items-center" to={"/"}>
        <img src="/movie-logo.png" alt="logo" width={80} className=" " />
        <h2 className="font-bold text-2xl max-sm:hidden">Filmania</h2>
      </Link>
      <Link
        className="border rounded-full py-1 px-5 hover:bg-black hover:text-white transition"
        to="/create"
      >
        Film Oluştur{" "}
      </Link>
    </header>
  );
};

export default Header;
