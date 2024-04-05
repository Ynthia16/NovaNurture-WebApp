const Button = ({ title, styles, onClick, type }) => {
  console.log(styles.includes("bg-lightGreen"));
  return (
    <button
      className={`rounded-xl px-10 py-3 text-base  ${styles} ${
        styles.includes("bg-lightGreen") ? ` text-black` : "text-white"
      } `}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
