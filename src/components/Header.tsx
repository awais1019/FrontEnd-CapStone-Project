import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="hidden lg:block lg:flex lg:items-center lg:justify-between py-4 px-6 bg-white shadow-md lg:sticky lg:top-0 lg:z-10">
      <Logo />
      <Nav />
    </header>
  );
}
