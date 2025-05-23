import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Form from "./components/form/Form";
import Displaycard from "./components/displaycard/Displaycard";

function App() {
  const [page, setPage] = useState("demo1");

  return (
    <>
      <button onClick={() => setPage("demo1")}>Demo 1</button>{" "}
      <button onClick={() => setPage("demo2")}>Demo 2</button>
      {page === "demo1" && <Form />}
      {page === "demo2" && <Displaycard />}
    </>
  );
}

export default App;
