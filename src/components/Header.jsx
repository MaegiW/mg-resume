import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // 控制 body 的 overflow
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId) => {
    // 先關閉選單並恢復滾動
    setIsMenuOpen(false);

    // 使用 setTimeout 確保在恢復滾動後再執行滾動
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 80; // 根據你的 header 高度調整
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 10);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];

  // 滾動到頂部的函數
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滾動
    });
  };
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 bg-gray-300 shadow-md z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="max-w-full mx-10 px-4 py-4 flex justify-between items-center">
          <div
            className="flex items-center mr-8 cursor-pointer"
            onClick={scrollToTop}
          >
            <img
              src="../../public/MG.jpg"
              alt="MG Logo"
              className="h-10 w-auto "
              // 在這裡加上點擊事件
            />
            <p>MG</p>
          </div>
          {/* 桌面版選單 */}
          <ul className="hidden md:flex justify-center space-x-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-[18px] text-gray-600 font-bold hover:text-gray-800  transition-colors duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* 手機版漢堡選單按鈕 */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-800 relative z-50"
            >
              {isMenuOpen ? (
                <X size={28} weight="bold" />
              ) : (
                <List size={28} weight="bold" />
              )}
            </button>
          </div>

          {/* 手機版下拉選單 */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white bg-opacity-90 shadow-lg backdrop-blur-sm">
              <ul className="flex flex-col items-center justify-center py-2 h-screen">
                {menuItems.map((item) => (
                  <li key={item.id} className="w-full text-center">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full px-4 py-4 text-gray-600 hover:bg-gray-100 transition-colors duration-200 text-lg"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}

export default Header;
