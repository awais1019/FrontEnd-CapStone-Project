import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <Logo />
      <Nav />
    </header>
  );
}
