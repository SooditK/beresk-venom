import React from "react";

const list = [
  "JavsScript + HTML + CSS fundamentals are absolutely required",
  "You DON'T need to be a JavaScript expert to succeed in this course",
  "ES6+ JavaScript knowledge is beneficial but not a must-have",
  "NO prior React or any other JS framework experience is required",
];

const BulletList = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-3xl font-bold">Prerequisite</h1>
      <ul className="flex list-inside list-disc flex-col gap-y-2">
        {list.map((item) => (
          <li className="text-2xl" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BulletList;
