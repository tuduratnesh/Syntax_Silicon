import React, { useState } from "react";

const History = () => {
  const [selectedHistory, setSelectedHistory] = useState(null);

  const historyItems = [
    { id: 1, title: "History Item 1", details: "Details about History Item 1" },
    { id: 2, title: "History Item 2", details: "Details about History Item 2" },
  ];

  return (
    <div className="mt-6 bg-[#1A2B5A] p-4 rounded-lg">
      <h2 className="text-2xl font-semibold mb-2">History</h2>
      {historyItems.map((item) => (
        <div
          key={item.id}
          className="bg-gray-400 p-6 rounded-md mb-2 cursor-pointer"
          onClick={() => setSelectedHistory(item.id === selectedHistory ? null : item.id)}
        >
          <p className="font-semibold">{item.title}</p>
          {selectedHistory === item.id && (
            <p className="mt-2 text-white">{item.details}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default History;
