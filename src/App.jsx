import "./App.css";
import ToolNavBar from "./components/ToolNav";
import data from "./app/app.json";

function App() {
  return <>
    <ToolNavBar appData={data}/>
  </>;
}

export default App;
