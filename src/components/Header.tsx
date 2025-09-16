import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-4 px-6 bg-white shadow-md sticky top-0 z-10">
      <Logo />
      <Nav />
    </header>
  );
}
