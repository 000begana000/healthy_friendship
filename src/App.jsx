// import { FREINDSHIPS } from "./data.js";
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
          <TabButton onSelect={() => handleSelect("trust")}>trust</TabButton>
          <TabButton onSelect={() => handleSelect("royalty")}>
            royalty
          </TabButton>
          <TabButton onSelect={() => handleSelect("connection")}>
            connection
          </TabButton>
          <TabButton onSelect={() => handleSelect("support")}>
            support
          </TabButton>
        </main>
        <div className="content">{selectedTopic}</div>
      </div>
    </>
  );
}
