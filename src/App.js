import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Search from "./components/Search/Search";
import { selectUserName } from "./features/user/userSlice";
import { useSelector } from "react-redux";
function App() {
  const userName = useSelector(selectUserName);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          {userName && (
            <>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/search">
                <Search />
              </Route>
              <Route path="/detail/:id">
                <Detail />
              </Route>
            </>
          )}
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
