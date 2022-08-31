import {
  QUOTES_FETCH_SUCCESS,
  QUOTE_FETCH_SUCCESS,
} from "../action/actionType";

const initialState = { quotes: [], quote: "" };

function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case QUOTES_FETCH_SUCCESS:
      return { ...state, quotes: action.payload };
    case QUOTE_FETCH_SUCCESS:
      return { ...state, quote: action.payload };
    default:
      return state;
  }
}

export default quoteReducer;
