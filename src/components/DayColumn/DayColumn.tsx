import React from "react";
import { DayColumnProps } from "./DayColumn.types";
import { createStyles, makeStyles, Typography } from "@material-ui/core";

export const DayColumn: React.FC<DayColumnProps> = (props) => {
  const {monday} = props;
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.dayWrapper}>
        <Typography>{monday.plus({day: 0}).weekdayShort}</Typography>
      </div>
      <div className={classes.dayWrapper}>
        <Typography>{monday.plus({day: 1}).weekdayShort}</Typography>
      </div>
      <div className={classes.dayWrapper}>
        <Typography>{monday.plus({day: 2}).weekdayShort}</Typography>
      </div>
      <div className={classes.dayWrapper}>
        <Typography>{monday.plus({day: 3}).weekdayShort}</Typography>
      </div>
      <div className={classes.dayWrapper}>
        <Typography>{monday.plus({day: 4}).weekdayShort}</Typography>
      </div>
      <div className={classes.dayWrapper}>
        <Typography>{monday.plus({day: 5}).weekdayShort}</Typography>
      </div>
      <div className={classes.dayWrapper}>
        <Typography>{monday.plus({day: 6}).weekdayShort}</Typography>
      </div>
    </div>
  )
};

const useStyles = makeStyles(() => createStyles({
  wrapper: {
    display: 'flex',
  },
  dayWrapper: {
    border: '1px solid black',
    flexGrow: 1,
  },
}), {name: "DayColumn"});
