import { QUOTES_FETCH_SUCCESS, QUOTE_FETCH_SUCCESS } from "./actionType";

export const fetchQuoteSuccess = (payload) => {
  return { type: QUOTE_FETCH_SUCCESS, payload };
};

const baseUrl = "https://api.kanye.rest";

export const fetchQuote = () => {
  return (dispatch, getState) => {
    //getState
    return fetch(`${baseUrl}`, {})
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // setData(data);
        dispatch(fetchQuoteSuccess(data.quote));
        console.log(data, "<<<data");
        console.log("getState Product>>>", getState());
      })
      .catch(console.log);
  };
};
