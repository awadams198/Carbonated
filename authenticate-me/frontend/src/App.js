// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import AllSodas from "./components/AllSodas";
import CreateSodaForm from './components/CreateSodaPage'
import EditSodaForm from "./components/EditSodaPage";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <HomePage isLoaded={isLoaded} />
          </Route>
          <Route path='/sodas/new'>
            <CreateSodaForm />
          </Route>
          <Route path='/edit/:sodaId'>
            <EditSodaForm />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path='/sodas'>
            <AllSodas isLoaded={isLoaded} />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
