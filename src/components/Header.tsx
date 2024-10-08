import Link from "next/link";

//* components
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Luke<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav and hire me button */}
        <div className="hidden md:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
