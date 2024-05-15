import { call, put, takeEvery } from 'redux-saga/effects'
import { Todo, fetchAllTodos } from '../lib/api'
import { getTodoFailure, getTodoSuccess } from './reducer'

function* fetchTodos() {
    try {
        const todos: Todo[] = yield call(() => fetchAllTodos())
        yield put(getTodoSuccess(todos))
    } catch (err) {
        yield put(getTodoFailure((err as Error).message))
    }
}


export function* todoSaga() {
    yield takeEvery('todos/getTodoFetch', fetchTodos)
}
