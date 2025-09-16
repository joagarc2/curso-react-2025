import * as z from "zod/v4";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

const TodoSchema = z.object({
    id: z.number(),
    text: z.string(),
    completed: z.boolean(),
});

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    pending: number;
}

const TaskStateSchema = z.object({
    todos: z.array(TodoSchema),
    length: z.number(),
    completed: z.number(),
    pending: z.number(),
});

export type TaskAction =
    | { type: "ADD_TODO"; payload: string }
    | { type: "TOGGLE_TODO"; payload: number }
    | { type: "DELETE_TODO"; payload: number };

export const getTasksInitialState = (): TaskState => {
    const localStorageState = localStorage.getItem("tasks-state");

    if (!localStorageState) {
        return {
            todos: [],
            completed: 0,
            length: 0,
            pending: 0,
        };
    }

    const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));

    if (result.error) {
        console.log(result.error);
        return {
            todos: [],
            completed: 0,
            length: 0,
            pending: 0,
        };
    }

    return result.data;
};

export const taskReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {
    switch (action.type) {
        case "ADD_TODO": {
            const newTodo: Todo = {
                id: Date.now(),
                completed: false,
                text: action.payload.trim(),
            };

            return {
                ...state,
                todos: [...state.todos, newTodo],
                length: state.todos.length + 1,
                pending: state.pending + 1,
            };
        }

        case "DELETE_TODO": {
            const currentTodos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );

            return {
                ...state,
                todos: currentTodos,
                length: currentTodos.length,
                completed: currentTodos.filter((todo) => todo.completed).length,
                pending: currentTodos.filter((todo) => !todo.completed).length,
            };
        }

        case "TOGGLE_TODO": {
            const updatedTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            });

            const completed = updatedTodos.filter(
                (todo) => todo.completed
            ).length;

            return {
                ...state,
                todos: updatedTodos,
                completed,
                pending: updatedTodos.length - completed,
            };
        }

        default:
            return state;
    }
};
