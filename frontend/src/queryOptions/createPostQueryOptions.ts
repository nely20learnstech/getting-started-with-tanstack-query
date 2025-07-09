import { queryOptions } from "@tanstack/react-query";

export default function createPostQueryOptions() {
    return queryOptions({
        queryKey: ['todos'], // Used for fetching and caching data, must be unique
        queryFn: getTodos
    })
}


const getTodos = async () : Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch("https://jsonplaceholder.typicode.com/todos")

  return await response.json()
}

// For type safety
type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}