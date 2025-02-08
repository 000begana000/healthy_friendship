import { useState } from "react";

import TabButton from "./UI/TabButton";

import { FREINDSHIPS } from "../data.js";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("trust");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <main className="examples">
        <TabButton
          isSelected={selectedTopic === "trust"}
          onSelect={() => handleSelect("trust")}
        >
          trust
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "royalty"}
          onSelect={() => handleSelect("royalty")}
        >
          royalty
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "connection"}
          onSelect={() => handleSelect("connection")}
        >
          connection
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "support"}
          onSelect={() => handleSelect("support")}
        >
          support
        </TabButton>
      </main>
      <div className="card">
        <div className="content">
          <img src={FREINDSHIPS[selectedTopic].img} alt="" />
          <p>{FREINDSHIPS[selectedTopic].description}</p>
        </div>
      </div>
    </>
  );
}
