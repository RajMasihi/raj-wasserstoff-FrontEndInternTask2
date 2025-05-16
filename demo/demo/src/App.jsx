import { useState } from "react";
import "./App.css";
import { Form, Displaycard } from "raj-wasserstoff-frontendinterntask2";

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
