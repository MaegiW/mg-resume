import { useState, useEffect } from "react";
import { MouseSimple } from "@phosphor-icons/react";
import { Parallax } from "react-parallax";

function Home() {
  const [showButton, setShowButton] = useState(false);

  // 監聽滾動事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // 清除事件監聽器
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 滾動到頂部的函數
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滾動
    });
  };

  // 滾動到下一個區塊的函數
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Parallax
      strength={500}
      bgImage="../../public/pexels-fwstudio.jpg"
      bgImageAlt="bg"
      bgImageStyle={{ objectFit: "cover" }}
    >
      <section id="home" className="background-overlay">
        {/* 第一個區塊 */}
        <div className="h-screen p-6 flex flex-col justify-center items-center relative">
          <p className="text-gray-800 text-4xl font-bold z-10">
            Hello, I&apos;m Maggie
          </p>
          <p className="text-gray-700 text-xl z-10 m-5">
            A Web Developer in training.
          </p>

          {/* Scroll Down 提示 */}
          <div className="absolute inset-0 flex items-end justify-center pb-6 z-10">
            <div
              className="animate-bounce cursor-pointer"
              onClick={scrollToNextSection}
            >
              <p className="text-gray-600 mt-4">Scroll down</p>
              <MouseSimple
                className="m-auto"
                size={28}
                color="#60a5fa"
                weight="bold"
              />
            </div>
          </div>
        </div>

        {/* Back to Top 按鈕 */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-gray-600 text-white p-3 rounded-full shadow-lg hover:bg-gray-200 hover:text-gray-800 focus:outline-none"
          >
            ↑ Top
          </button>
        )}
      </section>
    </Parallax>
  );
}

export default Home;
