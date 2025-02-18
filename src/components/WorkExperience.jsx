import React from "react";

function WorkExperience() {
  return (
    <section id="experience" className="py-8 text-gray-200">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg">前端工程師 - ABC 科技公司</h3>
            <p>2022 年 1 月 - 至今</p>
            <ul className="list-disc list-inside mt-2">
              <li>負責公司主要產品的前端開發 與維護</li>
              <li>優化網站性能，提升載入速度達 40%</li>
              <li>導入新技術框架，提升代碼品質與可維護性</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperience;
