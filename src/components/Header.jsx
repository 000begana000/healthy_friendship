import heroImg from "../assets/hero.png";

export default function Header() {
  return (
    <header>
      <h1>discover healthy relationship and boundary with friendship</h1>
      <p>
        A true friendship is effortless yet meaningful, where both individuals
        feel valued and understood. It thrives on sincerity, loyalty, and shared
        moments of joy and growth.{" "}
      </p>
      <img src={heroImg} alt="a girl drawing" />
    </header>
  );
}
