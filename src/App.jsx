import "./App.scss";
import CardContainer from "./Containers/CardContainer/CardContainer";
import teamArray from "./assets/data/team";
import Dropdown from "./components/Dropdown/Dropdown"

function App() {
  return (
    <div className="App">
      <header className="header-container">
        <h1 className="header-container__title"> Ticket Tracker</h1>
        <input type="text" placeholder="Search.." className="header-container__search"></input>
        <Dropdown optionsArr={["Junior", "Senior"]}/>
      </header>
      <CardContainer teamArr={teamArray} />
    </div>
  );
}

export default App;
