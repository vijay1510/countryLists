import "./App.css";
import Header from "./Components/Header";
import CountryTable from "./Components/CountryTable";
import SingleCountry from "./Components/SingleCountry";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <Switch>
          <Route exact path='/'>
            <Header />
            <CountryTable />
          </Route>
          <Route exact path='/:country'>
            <SingleCountry />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
