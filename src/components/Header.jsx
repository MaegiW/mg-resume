import { useState, useEffect } from "react";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // 決定是否顯示 header
      setVisible(
        prevScrollPos > currentScrollPos || // 往上滾
          currentScrollPos < 10 // 在頁面頂部
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="max-w-4xl mx-auto px-4 py-4">
        <ul className="flex justify-center space-x-6">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("education")}
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Education
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
