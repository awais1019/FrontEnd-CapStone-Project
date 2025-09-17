import { NavLink } from "react-router-dom";

const NavItems = ["Home", "About", "Reservations", "Order Online", "Login"];

export default function Nav() {
  return (
    <nav>
      <ul className="flex gap-6 list-none">
        {NavItems.map((item) => (
          <NavItem key={item} item={item} />
        ))}
      </ul>
    </nav>
  );
}

type NavItemProps = {
  item: string;
};

function NavItem({ item }: NavItemProps) {
  return (
    <li>
      <NavLink
        to={item.toLowerCase()}
        className={({ isActive }) =>
          `transition ${
            isActive
              ? "text-secondary border-b-2 border-secondary pb-1"
              : "text-black/65 hover:text-black"
          }`
        }
      >
        {item}
      </NavLink>
    </li>
  );
}
