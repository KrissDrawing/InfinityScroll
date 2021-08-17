import React, { useLayoutEffect, useRef, useState } from "react";
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

  const listRef = useRef<List>(null)

  const scrollToToday = () => {
    if (listRef && listRef.current) listRef.current.scrollToItem(initialOffset)
  }

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
    <div style={style} className={classes.listItem}>
      {week
        ? (
          <Box>
            <Box className={classes.dateWrapper}>
              <Typography>{DateTime.now().plus({week: (4 * index) - 4 * initialOffset}).startOf("week").monthLong}</Typography>
              <Typography>{DateTime.now().plus({week: (4 * index) - 4 * initialOffset}).startOf("week").year}</Typography>
            </Box>
            <WeeksColumn monday={DateTime.now().plus({week: (4 * index) - 4 * initialOffset}).startOf("week")}/>
          </Box>
        ) : (
          <Box>
            <Box className={classes.dateWrapper}>
              <Typography>{DateTime.now().plus({week: index - initialOffset}).weekNumber}</Typography>
              <Typography>{DateTime.now().plus({week: index - initialOffset}).year}</Typography>
            </Box>
            <DayColumn monday={DateTime.now().plus({week: index - initialOffset}).startOf("week")}/>
          </Box>
        )}
    </div>
  );

  return (
    <>
      <List
        height={200}
        itemCount={1000}
        itemSize={300}
        layout="horizontal"
        width={listWidth}
        initialScrollOffset={initialOffset * 300}
        ref={listRef}
      >
        {Column}
      </List>
      <Box className={classes.buttonWrapper}>
        <Button
          color="secondary"
          variant="outlined"
          onClick={scrollToToday}
        >
          Today
        </Button>
        <Button
          color="primary"
          variant="outlined"
          onClick={() => setWeek((prevState) => !prevState)}
        >
          {week ? "days" : "weeks"}
        </Button>
      </Box>
    </>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    listItem: {
      boxSizing: "border-box",
      background: "lightblue",
      border: "1px solid teal",
    },
    buttonWrapper: {
      display: "flex",
      justifyContent: "flex-end",
      margin: "20px",
      gap: "20px",
    },
    dateWrapper: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
    }
  }),
);


