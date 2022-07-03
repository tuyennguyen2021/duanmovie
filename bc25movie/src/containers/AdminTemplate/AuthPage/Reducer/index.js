import * as ActionType from "./constant";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.AUTH_REQUEST: {
      state.loading = true;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case ActionType.AUTH_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }

    case ActionType.AUTH_FAIL: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default authReducer;
