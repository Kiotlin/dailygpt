export default function AppBox({ children,}) {
  return (
    <>
      <div className="container mx-4 mt-4 border border-slate-300">
        {children}
      </div>
    </>
  );
}
