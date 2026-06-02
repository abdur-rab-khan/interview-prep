"use client";
import React, { useReducer, useState, Dispatch } from "react";
import { BiTrash } from "react-icons/bi";

type ITodoAction =
  | { type: "ADD_TODO"; payload: ITodo }
  | { type: "REMOVE_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: string };

interface ITodo {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoInputProps {
  dispatch: Dispatch<ITodoAction>;
}

interface TodoItemProps {
  todo: ITodo;
  dispatch: Dispatch<ITodoAction>;
}

interface TodoContainerProps {
  todos: ITodo[];
  dispatch: Dispatch<ITodoAction>;
}

const todoReducer = (todos: ITodo[], arg: ITodoAction): ITodo[] => {
  switch (arg.type) {
    case "ADD_TODO":
      return [...todos, arg.payload];
    case "REMOVE_TODO":
      return todos.filter((todo) => todo.id !== arg.payload);
    case "TOGGLE_TODO":
      return todos.map((todo) =>
        todo.id === arg.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo,
      );
    default:
      return todos;
  }
};

const TodoInput = ({ dispatch }: TodoInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: `id_${inputValue.toLowerCase()}_${Date.now()}`,
        title: inputValue,
        isCompleted: false,
      },
    });

    // Resetting the inputValue
    setInputValue("");
  };

  const handleKeyDown = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key !== "Enter") return;
    handleAddTodo();
  };

  return (
    <div className="flex items-center gap-x-2">
      <input
        value={inputValue}
        className="input-theme"
        placeholder="Add your todo"
        onKeyDown={handleKeyDown}
        onChange={(evt) => setInputValue(evt.target.value)}
      />
      <button className="btn-theme px-6! py-0!" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
};

const TodoItem = ({ todo, dispatch }: TodoItemProps) => {
  const handleToggleTodo = (evt: unknown) => {
    (evt as React.MouseEvent).stopPropagation();
    dispatch({
      type: "TOGGLE_TODO",
      payload: todo.id,
    });
  };

  const handleDeleteTodo = () => {
    dispatch({
      type: "REMOVE_TODO",
      payload: todo.id,
    });
  };

  return (
    <li
      className="flex h-12 w-full cursor-pointer items-center justify-between gap-2 rounded-lg border border-slate-700/70 bg-slate-800 px-3 py-2 not-first:mt-2 has-checked:border-slate-800/80 has-checked:bg-slate-900"
      onClick={handleToggleTodo}
    >
      <label htmlFor={todo.id} className="">
        <div className="flex flex-1 items-center gap-2">
          <input
            checked={todo.isCompleted}
            id={todo.id}
            type="checkbox"
            onChange={handleToggleTodo}
          />
          <span
            className={`${todo.isCompleted ? "line-through" : "no-underline"} select-none`}
          >
            {todo.title}
          </span>
        </div>
      </label>
      <button
        aria-label={`Delete todo: ${todo.title}`}
        className="cursor-pointer hover:text-gray-500"
        onClick={handleDeleteTodo}
      >
        <BiTrash />
      </button>
    </li>
  );
};

const TodoContainer = ({ todos, dispatch }: TodoContainerProps) => {
  return (
    <ul className="custom-scrollbar size-full flex-1 overflow-auto pt-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ul>
  );
};

function Todo() {
  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <section className="h-124 max-h-130 w-108 p-2">
      <TodoInput dispatch={dispatch} />
      <TodoContainer todos={todos} dispatch={dispatch} />
    </section>
  );
}

export default Todo;
