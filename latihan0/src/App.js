import "./App.css";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { id: 1, title: "joystick", amount: 27, date: new Date(2023, 3, 2)},
    { id: 2, title: "laptop", amount: 270, date: new Date(2023, 6, 2)},
    { id: 3, title: "mouse", amount: 25, date: new Date(2023, 7, 2)},
    { id: 4, title: "keyboard", amount: 24, date: new Date(2023, 5, 2)},
   
  ];
  return (
    <div>
      <h2> Hallo Ibnu Topan Selamat Belajar React</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
