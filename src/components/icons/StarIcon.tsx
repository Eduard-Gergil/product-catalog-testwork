export default function StarIcon({ className = "w-5 h-5 text-yellow-500" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .587l3.668 7.568L24 9.423l-6 5.849 1.416 8.264L12 18.896l-7.416 4.64L6 15.272 0 9.423l8.332-1.268L12 .587z" />
    </svg>
  );
}