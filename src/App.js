import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import SetupRouter from "./routers/SetupRouter";

function App() {
  return (
    <>
      <Provider store={store}>
        <SetupRouter />
      </Provider>
    </>
  );
}

export default App;
