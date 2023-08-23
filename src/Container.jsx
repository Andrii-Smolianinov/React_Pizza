export default function Container({ children }) {
  return (
    <div
      className="     
    w-screen
    h-screen      
    px-4 
    py-4 
    md:px-10
    md:py-10
    xl:px-20 
    xl:py-20"
    >
      {children}
    </div>
  );
}
