import { NavLink } from "react-router";
import cn from "classnames";

export default function Header() {
  return (
    <header className="px-4 py-4 bg-[#000000] flex justify-end">
      <nav className="flex space-x-4 max-w-7xl w-full mx-auto">
        <NavLink to="/" className={({ isActive }) =>
          cn(
            "px-4 py-1 rounded text-lg font-semibold active:scale-95 transition",
            { "px-12 bg-[#1dd64b] text-[#000]": isActive }
          )}
        >
          Каталог
        </NavLink>

        <NavLink to="/cart" className={({ isActive }) =>
          cn(
            "px-4 py-1 rounded text-lg font-semibold active:scale-95 transition",
            { "px-12 bg-[#1dd64b] text-[#000]": isActive }
          )}
        >
          Корзина
        </NavLink>
      </nav>
    </header>
  );
}