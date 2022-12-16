import { $, component$, PropFunction, Resource, useResource$, useSignal, useStore } from "@builder.io/qwik";
import Todo from "~/components/todo/todo";

export interface Todo
  { name: string, id: number, completed?: boolean }

export interface TodoProps {
  list: Todo[];
  goodbye$: PropFunction<(id: number) => void>
}

export default component$(() => {
    const hello$ = $((id: number) => alert('Todo ID : ' + id));
    const count = useSignal(0);

    const store = useStore<{todos: Todo[]}>({todos: []});

    const listTodo = useStore([
      { name: 'Qwik', id: 1 },
      { name: 'Partytown', id: 2 },
    ]);

    const todosResource = useResource$<Todo[]>(async ({ track, cleanup }) => {
      track(() => store.todos);
      const abortController = new AbortController();
      cleanup(() => abortController.abort('cleanup'));

      // http://127.0.0.1:3000/todos
      const res = await fetch(`https://intense-fire-5995.firebaseio.com/todos.json`, {
        signal: abortController.signal,
      });
      return res.json();
    });

    const addToto = $(() => {
      count.value++;
      listTodo.push({ name: 'Angular', id: 3 });
    });

  return (<>
    <button onClick$={addToto} type="button" class="me-2 btn btn-primary">Primary</button>
    <span class="badge text-bg-primary">{listTodo.length}</span>
    <Todo list={listTodo} goodbye$={hello$} />

    <Resource
      value={todosResource}
      onPending={() => <div>Loading...</div>}
        onRejected={(e) => <div>Failed to todo data {e}</div>}
        onResolved={(todos) => {
          return (
            <ul>
              {todos.map((todo) => (
                <li>{todo.name}</li>
              ))}
            </ul>
          );
        }}
      />

  </>);
});
