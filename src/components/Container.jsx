export default function Container({ children, className }) {
  return (
    <div
      className={`max-w-[80rem] mx-auto px-5 md:px-10 lg:px-14 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}
