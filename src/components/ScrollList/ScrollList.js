import React, { useEffect, useRef, useState } from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import { throttle } from 'throttle-debounce';

export const ScrollList = (props) => {
  const classes = useStyles();
  const ref = useRef([]);
  const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6]);

  // let prevScrollPosition = window.pageXOffset;
  const moveFunc = throttle(100, (num) => {
    let newScrollPosition = window.pageXOffset + window.innerWidth;
      console.log('items', items[6]*300)
      const max = Math.floor(newScrollPosition / 300)
      setItems((prev) => [max-6, max-5, max-4, max-3, max-2, max-1, max]);
  });

  useEffect(() => {
    window.addEventListener('scroll', moveFunc)
   return () => {
     window.removeEventListener('scroll', moveFunc)
   }
  }, [ moveFunc]);

  return (
    <div style={{ width: `${((Math.floor(items[items.length - 1] / items.length)) * 300*items.length)}px`}}
      className={classes.wrapper}
    >
      {items.map((item, i) => (
        <div
          style={{position: "absolute", left: `${(item * 300)}px`, top: "0"}}
          key={item}
          ref={el => (ref.current[i] = el)}
        >
          <p>{item}</p>
          <div className={classes.mockup}/>
        </div>
      ))}
    </div>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    screen:{
      width:'100vw',
      height:'100vh',
    },
    mockup: {
      boxSizing: 'border-box',
      width: '300px',
      height: '150px',
      background: 'lightblue',
      border: '2px solid teal',
    },
    item: {
      display: "absolute",
      top: "0",
    },
  }),
);


