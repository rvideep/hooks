import "./App.css";
import Todo from "./usereducer/Todo";
// import Render from './useref/Render';

function App() {
  return (
    <div className="App">
      {/* <Render /> */}
      <h1>Todo Lists</h1>
      <p>add todo list by typing in the box:</p>
      <Todo />
    </div>
  );
}

export default App;
