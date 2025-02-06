// import { FREINDSHIPS } from "./data.js";
import { useState } from "react";

import Header from "./components/Header/Header";
import TabButton from "./components/UI/TabButton";

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState("trust");

  return (
    <>
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="container">
        <Header />
        <main className="examples">
          <TabButton>trust</TabButton>
          <TabButton>royalty</TabButton>
          <TabButton>connection</TabButton>
          <TabButton>support</TabButton>
          <div className="content"></div>
        </main>
      </div>
    </>
  );
}
