import Link from "next/link";
import BeOnSchoolLogo from "./BeOnSchoolLogo";

export default function Navbar () {
    return (
    <header className="w-full flex items-center justify-between py-4 px-6">
        <Link href='/'>
            <BeOnSchoolLogo />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/courses" className="text-white font-semibold cursor-pointer">Courses</Link>
            </li>
            <li>
              <Link href="/courses" className="text-white font-semibold cursor-pointer">Resources</Link>
            </li>
            <li>
              <Link href="/auth" className="text-white font-semibold cursor-pointer">Sign In</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}