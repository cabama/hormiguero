import { History } from "history";
import { match } from "react-router";

export interface routerPropsType {
  history: History
  location: Location
  match: match<object>
}