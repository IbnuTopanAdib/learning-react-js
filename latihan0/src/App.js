import logo from "./logo.svg";
import "./App.css";
import Expensive from "./components/Expensive";

function App() {
  const expenses = [
    { id: 1, title: "joystick", amount: 27, date: new Date(2023, 3, 2)},
    { id: 2, title: "laptop", amount: 270, date: new Date(2023, 6, 2)},
    { id: 3, title: "mouse", amount: 25, date: new Date(2023, 7, 2)},
    { id: 4, title: "keyboard", amount: 24, date: new Date(2023, 5, 2)},
   
  ];
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <h2> Hallo Ibnu Topan Selamat Belajar React</h2>
      <Expensive title = {expenses[0].title} amount = {expenses[0].amount} date= {expenses[0].date}></Expensive>
      <Expensive title = {expenses[1].title} amount = {expenses[1].amount} date= {expenses[1].date}></Expensive>
      <Expensive title = {expenses[2].title} amount = {expenses[2].amount} date= {expenses[2].date}></Expensive>
      <Expensive title = {expenses[3].title} amount = {expenses[3].amount} date= {expenses[3].date}></Expensive>
    </div>
  );
}

export default App;
