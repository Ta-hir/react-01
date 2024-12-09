import bowl_food_solid from "../assets/bowl-food-solid.svg";

export default function Header() {
  return (
    <header className="main-header">
      <img src={bowl_food_solid} width="50px" alt="" />
      <h1>Cheff Claude</h1>
    </header>
  );
}
