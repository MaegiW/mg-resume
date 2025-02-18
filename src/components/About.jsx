import React from "react";

function About() {
  return (
    <section id="about" className="h-full flex items-center">
      <div className="max-w-6xl m-auto text-center bg-gray-800 p-6 rounded-lg my-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* 左側照片 */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <img
                src="../../public/MG.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* 右側文字 */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-gray-200 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus laborum odit, mollitia molestias ea perferendis
              asperiores earum eaque animi, veritatis ipsa magni eos sit
              deleniti quo tempora autem voluptates ad?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-gray70 px-4 py-2 rounded-full text-gray-200">
                React
              </div>
              <div className="bg-gray70 px-4 py-2 rounded-full text-gray-200">
                TypeScript
              </div>
              <div className="bg-gray70 px-4 py-2 rounded-full text-gray-200">
                NextJS
              </div>
              <div className="bg-gray70 px-4 py-2 rounded-full text-gray-200">
                Tailwind CSS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
