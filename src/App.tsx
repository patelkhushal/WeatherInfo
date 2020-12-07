import React from "react";
import "./App.css";
import { SearchWeather } from "./SearchWeather";
import { SearchHistory } from "./SearchHistory";
import { DisplayWeather } from "./DisplayWeather";
import { Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 500,
    textAlign: "center",
    alignItems: "center",
    justify: "center",
  },
  title: {
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: "bold",
  },
});

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Card className={classes.root}>
        <CardContent>
        <Typography className={classes.title} variant="h5" component="h2" color="primary">
          City Weather Info
        </Typography><br></br>
          <SearchWeather></SearchWeather><br></br>
          <DisplayWeather></DisplayWeather><hr></hr>
          <SearchHistory></SearchHistory>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
