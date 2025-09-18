import { updateTimes, initialTime } from "./TimeReducers";
import { getTodayDate, } from "../lib/utils";
import { describe, test, expect } from "vitest";


describe("timesReducer", () => {
  test("initialTime should return initialAvailableTimes", () => {
    const result = fetchAPI(new Date(getTodayDate()));
    expect(result).toEqual(initialTime);
  });

  test("updateTimes should return initialAvailableTimes for UPDATE_DATE", () => {
    const result1 = fetchAPI(new Date("2025-09-18"));
    const state = ["17:00", "18:00"];
    const action = { type: "UPDATE_DATE", payload: "2025-09-18" };
    const result = updateTimes(state, action);
    expect(result).toEqual(result1);
  });

  test("updateTimes should return same state for unknown action", () => {
    const state = ["17:00", "18:00"];
    const action = { type: "UNKNOWN" };
    const result = updateTimes(state, action);
    expect(result).toEqual(state);
  });
});


