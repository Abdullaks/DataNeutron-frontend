import "./App.css";
import Left from "./components/Left";
import Right from "./components/Right";
import Bottom from "./components/Bottom";
function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Left />
        <Right />
      </div>
      <Bottom />
    </div>
  );
}

export default App;
