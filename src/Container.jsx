export default function Container({ children }) {
  return (
    <section className="w-screen h-full bg-gradient-to-r from-green-500 via-orange-50 to-red-500 px-4 py-4 md:px-5 md:py-7 lg:px-10 lg:py-10">
      {children}
    </section>
  );
}
