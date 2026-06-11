import Todo from "@/problems/react/todo/Todo";
import CodePreview from "@/components/code-preview/CodePreview";
import { getCodeFromPath } from "@/utils/utils";

async function TodoPage() {
  const todoAppCode = getCodeFromPath("/react/todo/Todo.tsx");

  return (
    <CodePreview
      title="Todo App"
      description="A small todo app, which has all the features such as (add todo, remove todo, toggle todo as completed/pending)"
      code={todoAppCode}
    >
      <Todo />
    </CodePreview>
  );
}

export default TodoPage;
