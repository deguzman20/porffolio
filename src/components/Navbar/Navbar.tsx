import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const navbarHeight = 64; // Adjust this value to match your navbar height in pixels
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full flex items-center justify-between p-4 bg-white sticky top-0 z-50 shadow-md md:shadow-none">
      <div className="text-2xl font-bold text-gray-800">Andy.dev</div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-800 hover:text-gray-600 focus:outline-none"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>
      <ul
        className={`flex-col md:flex-row md:flex md:space-x-6 absolute md:static bg-white md:bg-transparent w-full md:w-auto top-16 left-0 md:top-auto md:left-auto ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        <li className="text-center">
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-navbarHeight}
            activeClass="text-blue-500 font-bold"
            className="block py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            About
          </Link>
        </li>
        <li className="text-center">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            offset={-navbarHeight}
            activeClass="text-blue-500 font-bold"
            className="block py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Projects
          </Link>
        </li>
        <li className="text-center">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-navbarHeight}
            activeClass="text-blue-500 font-bold"
            className="block py-2 text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
