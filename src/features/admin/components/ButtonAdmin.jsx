export default function ButtonAdmin({ children, onClick, width }) {
  return (
    <button
      className={`bg-black text-white h-10 rounded-lg ${width} hover:border border-yellow`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
