export default function Container({ children }) {
  return (
    <section
      className="w-screen min-h-screen bg-gradient-to-r from-green-500 via-orange-50 to-red-500 
      px-2 md:px-4 lg:px-6 xl:px-8
      py-2 md:py-4 lg:py-6 xl:py-8"
    >
      {children}
    </section>
  );
}
