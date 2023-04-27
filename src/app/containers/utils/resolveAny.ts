import { all } from "redux-saga/effects";

export function* resolveAny<T>(callArray: any[]) {
  const res = yield all(
    callArray.map((item) =>
      (function* () {
        try {
          return yield item;
        } catch (e) {
          return "error"; // **
        }
      })()
    )
  );
  return res.filter((item: T | "error") => item !== "error");
}
