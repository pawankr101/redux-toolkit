import { combineSlices, createSlice } from "@reduxjs/toolkit";
import { Todo } from "../lib/api";

export type TodoState = {todos: Todo[], isLoading: boolean, message: string};

const initialValue: Todo[] = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: initialValue,
        isLoading: false,
        message: '',
    },
    reducers: {
        getTodoFetch: (state) => {
            state.isLoading = true;
        },
        getTodoSuccess: (state, action: {payload: Todo[], type: string}) => {
            state.todos = action.payload;
            state.isLoading = false;
        },
        getTodoFailure: (state, action: {payload: string, type: string}) => {
            state.isLoading = false;
            state.message = action.payload
        }
    }
});

export const { getTodoFetch, getTodoSuccess, getTodoFailure } = todoSlice.actions

export const reducers = combineSlices(todoSlice);

