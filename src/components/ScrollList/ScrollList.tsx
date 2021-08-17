import React, { useLayoutEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { DateTime } from "luxon";
import { Box, Button, createStyles, makeStyles, Typography } from "@material-ui/core";
import { DayColumn } from "../DayColumn";
import { WeeksColumn } from "../WeeksColumn";

export const ScrollList = () => {
  const classes = useStyles();
  const initialOffset = 500;

  const [listWidth, setListWidth] = useState(0);
  const [week, setWeek] = useState(false);

  useLayoutEffect(() => {
    const resizeListener = () => {
      const screenWidth = window.innerWidth;
      setListWidth(screenWidth)
    };
    resizeListener();
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const Column = ({index, style}: { index: number, style: any }) => (
    <div style={style} className={classes.mockup}>
      {week
        ? (
          <Box>
            <Typography>{DateTime.now().plus({week: (4 * index) - initialOffset}).startOf("week").monthLong}</Typography>
          <WeeksColumn monday={DateTime.now().plus({week: (4 * index) - initialOffset}).startOf("week")}/>
          </Box>
        ) : (
          <Box>
            <Typography>{DateTime.now().plus({week: index - initialOffset}).weekNumber}</Typography>
            <Typography>{DateTime.now().plus({week: index - initialOffset}).startOf("week").toLocaleString()}</Typography>
            <DayColumn monday={DateTime.now().plus({week: index - initialOffset}).startOf("week")}/>
          </Box>
        )}
    </div>
  );

  return (
    <>
      <Button onClick={() => setWeek((prevState) => !prevState)}>
        {week ? "days" : "weeks"}
      </Button>
      <List
        height={150}
        itemCount={1000}
        itemSize={300}
        layout="horizontal"
        width={listWidth}
        initialScrollOffset={initialOffset * 300}
      >
        {Column}
      </List>
    </>
  )
};

const useStyles = makeStyles(() =>
  createStyles({
    mockup: {
      boxSizing: "border-box",
      background: "lightblue",
      border: "1px solid teal",
    },
  }),
);


