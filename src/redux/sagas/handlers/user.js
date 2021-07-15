import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/user";
import { getUserRequest } from "../requests/user";

export function* handelGetUser() {
 try {
  const response = yield call(getUserRequest);
  const { data } = response;
  yield put(setUser(data));
 } catch (error) {
  console.log(error);
 }
}
