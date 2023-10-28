import React from "react";
import { Header } from "./components/common/header";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoute } from "./routes/AppRoutes";
import { Provider } from "react-redux";
import store from "./reduxStore/store";

// const store = createStore(rootReducer)
export const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="App">
          <AppRoute />
        </div>
      </Provider>
    </Router>
  );
};
