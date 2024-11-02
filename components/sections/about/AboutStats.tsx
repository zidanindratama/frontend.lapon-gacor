import React from "react";
const example = [
  {
    title: "Experienced",
    count: 8,
  },
  {
    title: "Teams",
    count: 122,
  },
  {
    title: "Clients",
    count: 563,
  },
  {
    title: "Project Done",
    count: 232,
  },
];
export default function AboutStats() {
  return (
    <section className="bg-gradient-to-r from-greenSecondary to-greenPrimary">
      <div className="container max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {example.map((item, index) => (
            <div key={index} className="text-center space-y-2">
              <h2 className="text-white">{item.title}</h2>
              <p className="text-white text-5xl font-semibold">
                {item.count.toString()}{" "}+
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
