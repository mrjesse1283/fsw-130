import { types } from "./reducer";

export const updateState = change => ({
  type: types.UPDATESTATE,
  change
});

export default updateState;