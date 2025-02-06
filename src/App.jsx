import { FREINDSHIPS } from "./data.js";
import { useState } from "react";

import Header from "./components/Header/Header";
import TabButton from "./components/UI/TabButton";

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState("trust");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="container">
        <Header />
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
      </div>
    </>
  );
}
