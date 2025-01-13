import React from "react";

function Skills() {
  return (
    <section id="skills" className="py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">前端技術</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>React</li>
              <li>JavaScript/JSX</li>
              <li>HTML5, CSS3</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">其他技能</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Git</li>
              <li>RESTful API</li>
              <li>Responsive Design</li>
              <li>UI/UX Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
