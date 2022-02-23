import { useReducer, useState } from "react";
import { reducer } from "./reducer";
import Todos from "./components/Todo";
import Todo from "./components/Todo";

export interface TodoType {
  id: number;
  todo: string;
}
// actions
export type ActionType =
  | { type: "ADD"; text: string }
  | { type: "DELETE"; id: number };

function App() {
  const [text, setText] = useState("");

  const [todos, dispatch] = useReducer(reducer, []);

  // todo add button
  const onAddTodo = () => {
    if (text) {
      dispatch({
        type: "ADD",
        text,
      });
    }
  };
  return (
    <main className="md:w-9/12 w-11/12 mx-auto py-20">
      {/* app logo */}
      <h1 className="text-center py-4 text-white font-bold text-3xl tracking-wider italic first-letter:text-pink-500">
        TODOs
      </h1>
      <hr />

      {/* // todo input */}
      <div className=" py-4 flex justify-center">
        <input
          className="focus:outline-none px-3 text-black"
          placeholder="Put your todo"
          type="text"
          onBlur={(e) => setText(e.target.value)}
        />
        <button
          onClick={onAddTodo}
          className="bg-green-500 text-white px-3 py-1 "
        >
          Add
        </button>
      </div>

      {/* // Todos */}
      {todos.length ? (
        <div className="px-5 py-5">
          <table className="border w-full table-fixed text-center">
            <thead>
              <tr className="border">
                <th className="border">Todo</th>
                <th className="border">Action</th>
              </tr>
            </thead>

            {todos.length
              ? todos?.map((todo) => (
                  <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                ))
              : null}
          </table>
        </div>
      ) : null}
    </main>
  );
}

export default App;
