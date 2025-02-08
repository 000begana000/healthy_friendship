import Header from "./components/Header/Header";
import Examples from "./components/Examples";

export default function App() {
  return (
    <>
      <div className="circle-1"></div>
      <div className="circle-2"></div>
      <div className="container">
        <Header />
        <Examples />
      </div>
    </>
  );
}
