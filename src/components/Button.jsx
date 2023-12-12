const Button = ({ children, bg = "bg-red-600", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-3xl font-semibold px-5 rounded-md min-w-[35%]  text-white antialiased tracking-tight ${bg}`}
    >
      {children}
    </button>
  );
};

export default Button;
