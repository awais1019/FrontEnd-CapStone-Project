import { fetchAPI } from "../api";
import { getTodayDate} from "../lib/utils";

export function  updateTimes (state: string[], action: { type: string; payload?: string }) {
    switch (action.type) {
      case "UPDATE_DATE":
        return fetchAPI(new Date(action.payload!));
      default:
        return state;
    }
  };
export function initialTime() {
    const today = getTodayDate();
  return fetchAPI(new Date(today));
}
