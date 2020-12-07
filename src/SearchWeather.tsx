import React, { useState } from "react";
import addToHistory from "./actions";
import { useDispatch } from "react-redux";
import { Button, Input } from "@material-ui/core";

export const SearchWeather: React.FC = () => {
  const dispatch = useDispatch();
  const [searchField, setSearchField] = useState("");
  return (
    <div>
      Enter City: {" "}&nbsp;
      <Input
        id="search-input"
        onKeyDown={(e) => {
          if (e.keyCode === 13) dispatch(addToHistory(searchField));
        }}
        onChange={(event) => setSearchField(event.target.value)}
      />
      &nbsp;&nbsp;
      <Button
        id="search-button"
        disabled={searchField.trim().length === 0}
        variant="contained"
        color="primary"
        onClick={() => dispatch(addToHistory(searchField))}
      >
        Get Weather
      </Button>
    </div>
  );
};
