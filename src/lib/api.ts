const BASE_URL = "https://dummyjson.com/todos";

export interface Todo {
    id: number;
    todo: number;
    completed: boolean;
    userId: number;
}

export const fetchAllTodos = async (): Promise<Todo[]> => fetch(`${BASE_URL}`).then(r => r.json());