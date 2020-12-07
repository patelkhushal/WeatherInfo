import React from "react";
import {
  render,
  screen,
  queryByAttribute,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import historyList from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

// redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

//Store
let store = createStore(historyList, applyMiddleware(sagaMiddleware));
// store.subscribe(() => console.log(store.getState()));

sagaMiddleware.run(rootSaga);

test("renders learn react link", async () => {
  const dom: any = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const getById = queryByAttribute.bind(null, "id", dom.container);
  const inputLabel = screen.getByText(/Enter City Name/i);
  const cityInputField: any = getById("search-input");
  const searchButton = getById("search-button");
  expect(inputLabel).toBeInTheDocument();
  fireEvent.change(cityInputField, {
    target: { value: "Hello" },
  });
  expect(cityInputField.value).toBe("Hello");
  if (!searchButton)
    throw new Error("Search button does not exist in the DOM.");
  fireEvent.click(searchButton);
  await waitFor(() => {
    expect(getById("weather-error")).toHaveTextContent(
      'City "Hello" not found'
    );
  });
  fireEvent.change(cityInputField, {
    target: { value: "Toronto" },
  });
  expect(cityInputField.value).toBe("Toronto");
  fireEvent.click(searchButton);
  await waitFor(() => {
    expect(getById("weather-display")).toHaveTextContent(
      "Weather at Toronto right now:"
    );
  });
  const searchHistory = getById("search-history");
  expect(searchHistory).toHaveTextContent("Hello");
  expect(searchHistory).toHaveTextContent("Toronto");
});
