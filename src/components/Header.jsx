import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex bg-yellow-100 border-b-2 border-red-600">
      <Link to="/" className="cursor-pointer flex items-center">
        <img src="images/favicon.ico" alt="logo" className="w-16 h-15 m-1" />
        <span className="uppercase font-black italic text-xl drop-shadow-lg ml-2">
          <span className="text-lime-600">rea</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-red-600">ctpi</span>
          <span className="text-red-600">zza</span>
        </span>
      </Link>
    </header>
  );
}
