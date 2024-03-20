import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
    id: number;
    title: string;
    complete: boolean;
}

axios.get(url).then(res => {
    const todo: Todo = res.data as Todo;
    const id = todo.Id;
    const title = todo.title;
    const complete = todo.complete;
    console.log(` ${id} ${title} ${complete}`)
});