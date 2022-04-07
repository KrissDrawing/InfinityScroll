import React from "react";
import { WeeksColumnProps } from "./WeeksColumn.types";
import { createStyles, makeStyles, Typography } from "@material-ui/core";

export const WeeksColumn: React.FC<WeeksColumnProps> = (props) => {
  const {monday} = props;
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.tableWrapper}>
        <div className={classes.dayWrapper}>
          <Typography>{monday.plus({week: 0}).weekNumber}</Typography>
        </div>
        <div className={classes.dayWrapper}>
          <Typography>{monday.plus({week: 1}).weekNumber}</Typography>
        </div>
        <div className={classes.dayWrapper}>
          <Typography>{monday.plus({week: 2}).weekNumber}</Typography>
        </div>
        <div className={classes.dayWrapper}>
          <Typography>{monday.plus({week: 3}).weekNumber}</Typography>
        </div>
      </div>
      <div className={classes.tableWrapperTasks}>
        <div className={classes.dayWrapper}></div>
        <div className={classes.dayWrapper}></div>
        <div className={classes.dayWrapper}></div>
        <div className={classes.dayWrapper}></div>
      </div>
    </div>
  )
};

const useStyles = makeStyles(() => createStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  dayWrapper: {
    border: '1px solid black',
    flexGrow: 1,
  },
  tableWrapper: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
  },
  tableWrapperTasks: {
    width: '100%',
    flexGrow: 1,
    display: 'grid',
    gridTemplateColumns: 'repeat(4,1fr)',
  },
  test: {
    backgroundColor: 'red',
   flexGrow: 1,
  }
}), {name: "WeeksColumn"});
