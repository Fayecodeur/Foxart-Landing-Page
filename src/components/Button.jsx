export default function Button({ children, theme, className, href }) {
  const baseClasse = "text-white";
  const themeClasses =
    theme === "primary"
      ? "bg-p-3 hover:bg-p-2"
      : theme === "secondary"
      ? "bg-n-7 hover:bg-p-3"
      : "";

  const renderButton = () => {
    return (
      <button
        className={`px-3 py-3 lg:px-4 lg:py-4 rounded-lg ${themeClasses} ${baseClasse} ${className}`}
      >
        {children}
      </button>
    );
  };
  const renderLink = () => {
    return (
      <a
        href={href}
        className={`button inline-block px-3 py-3 lg:px-6 lg:py-6 rounded-lg ${themeClasses} ${baseClasse} ${className}`}
      >
        {children}
      </a>
    );
  };
  return href ? renderLink() : renderButton();
}
