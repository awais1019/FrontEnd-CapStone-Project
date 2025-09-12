const NavItems = ["Home", "About", "Reservations", "Order Online", "Login"];

export default function Nav() {
  return (
    <nav>
      <ul>
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
      <a>{item}</a>
    </li>
  );
}
