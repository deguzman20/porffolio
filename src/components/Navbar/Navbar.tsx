import { Link } from "react-scroll";

const Navbar = () => {
  const navbarHeight = 64; // Adjust this value to match your navbar height in pixels

  return (
    <nav className="w-full flex items-center justify-between py-4 bg-white sticky top-0 z-50">
      <div className="text-2xl font-bold text-gray-800">Andy.dev</div>
      <ul className="flex space-x-6">
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-navbarHeight} // Adjust scroll position for sticky navbar
            activeClass="text-blue-500 font-bold"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-navbarHeight} // Adjust scroll position for sticky navbar
            activeClass="text-blue-500 font-bold"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-navbarHeight} // Adjust scroll position for sticky navbar
            activeClass="text-blue-500 font-bold"
            className="text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
