import React from "react";
import Grid from "@material-ui/core/Grid";
import { Consumer } from "../../../Context";

//Components
import CalendarItem from "./CalendarItem";

const CalendarView = () => (
  <Consumer>
    {({ calendarCards }) => (
      <Grid container spacing={32}>
        {calendarCards.map((item, index) => (
          <CalendarItem key={item.id} index={index} />
        ))}
      </Grid>
    )}
  </Consumer>
);

export default CalendarView;
