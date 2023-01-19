import logo from "./logo.svg";
import "./App.css";
import Cost from "./components/Cost";
import AddNewItem from "./components/AddNewItem";
import Counter from "./components/Counter";
import Parent from "./LiftTest/Parent";

function App() {
  const data = [
    { id: 1, type: "laptop apple", amount: 3000 },
    { id: 2, type: "laptop asus", amount: 2000 },
    { id: 3, type: "laptop lenovo", amount: 300 },
  ];

  return (
    <div className="App">
{/* 
      <Counter/>
      {data.map((item) => {
        return <Cost key={item.id} arg={item} />;
      })}

      <AddNewItem /> */}

      <Parent/>

    </div>
  );
}

export default App;
