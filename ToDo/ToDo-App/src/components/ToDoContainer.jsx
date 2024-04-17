import Todo from "./Todo";

export default function ToDoContainer({ todos, delTodo }) {
  return (
    <div className="container">
      {todos.map((todo, index) => {
        return <Todo key={todo} todo={todo} index={index} delTodo={delTodo} />;
      })}
    </div>
  );
}
