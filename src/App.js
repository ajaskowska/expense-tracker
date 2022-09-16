import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 234.56,
      date: new Date(2022, 8, 2),
    },
    {
      id: "e2",
      title: "Bicycle insurance",
      amount: 65.56,
      date: new Date(2022, 8, 12),
    },
    { id: "e3", title: "Sugar", amount: 100.03, date: new Date(2022, 8, 17) },
    { id: "e4", title: "Toys", amount: 987.44, date: new Date(2022, 8, 21) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
