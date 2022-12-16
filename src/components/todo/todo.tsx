import { component$ } from "@builder.io/qwik";
import { TodoProps } from "~/routes/todo";

export default component$((props: TodoProps) => {
    /* const listTodo = useStore([
        { name: 'Qwik' },
        { name: 'Partytown' },
      ]); */
      return(
        <ul>
            {props.list.map((todo) => (
                <li onClick$={() => props.goodbye$(todo.id)}>{todo.name}</li>
            ))}
        </ul>
      )
});