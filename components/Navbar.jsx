import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Banking<span className="text-purple-600">Templates</span>
        </Link>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/sign-in">
            <Button variant="ghost" className="text-gray-700 hover:bg-gray-100 font-medium">
              Log in
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-purple-600 text-white hover:bg-purple-700 transition-colors font-semibold px-6 shadow-md">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px] p-4">
            <div className="flex flex-col gap-4 mt-6">
              
              <div className="border-t pt-4 mt-4">
                <Link href="/login">
                  <Button variant="ghost" className="w-full justify-start text-lg font-medium">
                    Log in
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full mt-2 bg-purple-600 text-white hover:bg-purple-700 transition-colors font-semibold text-lg">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
