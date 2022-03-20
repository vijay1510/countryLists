import "./App.css";
import Header from "./Components/Header";
import CountryTable from "./Components/CountryTable";
import SingleCountry from "./Components/SingleCountry";
import { Switch, Route } from "react-router-dom";
import AllFavourites from "./Components/AllFavourites";

function App() {
  return (
    <>
      <div style={{ backgroundColor: "hsl(175, 47%, 90%)", color: "black" }}>
        <Switch>
          <Route exact path='/'>
            <Header />
            <CountryTable />
          </Route>
          <Route exact path='/single/:country'>
            <SingleCountry />
          </Route>
          <Route exact path='/favourite/'>
            <AllFavourites />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
