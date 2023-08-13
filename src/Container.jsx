export default function Container({ children }) {
  return (
    <div
      className="max-w-[2520px]
    mx-auto px-4 py-4 bg-gray-200 md:px-10 md:py-10 xl:px-20 xl:py-20"
    >
      {children}
    </div>
  );
}
