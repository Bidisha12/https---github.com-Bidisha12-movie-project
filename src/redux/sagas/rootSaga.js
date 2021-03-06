import { takeLatest } from "@redux-saga/core/effects";
import { handelGetUser } from "./handlers/user";
import { GET_USER } from "../ducks/user";

export function* watcherSaga() {
 yield takeLatest(GET_USER, handelGetUser);
}
