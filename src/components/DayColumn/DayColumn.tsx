import React, { useEffect } from "react";
import { DayColumnProps } from "./DayColumn.types";
import { Button, createStyles, makeStyles, Typography } from "@material-ui/core";

export const DayColumn: React.FC<DayColumnProps> = (props) => {
  const {monday, task, addTask} = props;
  const classes = useStyles();

  useEffect(() => {
    console.log(task)
  }, [task]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.tableWrapper}>
        {Array.from(Array(7).keys()).map(day => (
          <div key={day} className={classes.dayWrapper}>
            <Typography>{monday.plus({day: day}).day}</Typography>
          </div>
        ))}
      </div>
      <div className={classes.tableWrapperTasks}>
        {Array.from(Array(7).keys()).map(day => (
          <Button
            onClick={addTask}
            value={monday.plus({day: day}).toISODate()}
            key={day}
            className={task.some((item) => item === monday.plus({day: day}).toISODate())
              ? classes.dayWrapperSaved
              : classes.dayWrapper}
          />
        ))}
      </div>
    </div>
  )
};

const useStyles = makeStyles(() => createStyles({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
  },
  tableWrapper: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)",
  },
  tableWrapperTasks: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(7,1fr)",
    flexGrow: 1,
  },
  dayWrapper: {
    border: "1px solid black",
    borderRadius: 0,
    flexGrow: 1,
    minWidth: 0,
  },
  dayWrapperSaved: {
    border: "1px solid black",
    borderRadius: 0,
    flexGrow: 1,
    minWidth: 0,
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'darkRed',
    }
  }
}), {name: "DayColumn"});
