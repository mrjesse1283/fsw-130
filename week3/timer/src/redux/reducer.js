import initialState from './initialState';

export const types = {
  UPDATESTATE: 'UPDATESTATE',
};

const updateState = (state, change) => ({
  ...state,
  [change.key]: change.value,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATESTATE:
      return updateState(state, action.change);
    default:
      return state;
  }
};

export default reducer;