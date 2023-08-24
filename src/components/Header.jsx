export default function Header() {
  return (
    <header className="flex bg-yellow-100">
      <a href="/" className="cursor-pointer flex items-center">
        <img
          src="https://previews.123rf.com/images/igorvkv/igorvkv1602/igorvkv160200006/52287514-italian-pizza-logo.jpg"
          alt="logo"
          width="60"
          height="60"
        />
        <span className="
        uppercase 
        font-black 
        italic 
        text-xl 
        drop-shadow-lg 
        ml-2">
          <span className="
          text-lime-600">rea</span>
          <span className="
          text-transparent 
          bg-clip-text 
          bg-gradient-to-r from-lime-600 to-red-600">ctpi</span>
          <span className="
          text-red-600">zza</span>
        </span>
      </a>
    </header>
  );
}
