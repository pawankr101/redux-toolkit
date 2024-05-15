import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import { reducers } from "./reducer";
import { todoSaga } from "./saga";

const saga = createSagaMiddleware();

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saga)
})

saga.run(todoSaga);