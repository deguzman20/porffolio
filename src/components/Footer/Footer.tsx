const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full justify-center flex py-2">
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        © {currentYear} Alejandro De Guzman. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
