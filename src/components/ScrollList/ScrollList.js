import React, { useEffect, useRef, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";

export const ScrollList = (props) => {
  const classes = useStyles();
  const ref = useRef(null);
  const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6]);

  let wasRight = false;
  const handleObserverRight = (entries) => {
    entries.forEach(entry => {
      if (entry.boundingClientRect && entry.rootBounds) {
        const isRight = entry.boundingClientRect.x > entry.rootBounds.x;

        if (entry.isIntersecting) {
          if (wasRight) {
          const tmp = items[0] + 7;
          setItems((prev) => [...prev.slice(1), tmp]);
        }
      }
      wasRight = isRight;
    }
  })}

  let wasLeft = false;
  const handleObserverLeft = (entries) => {
    entries.forEach(entry => {
      if (entry.boundingClientRect && entry.rootBounds) {
        const isLeft = entry.boundingClientRect.x < entry.rootBounds.x;

        if (entry.isIntersecting) {
          if (wasLeft) {
              const tmp = items[items.length-1] - 7;
              setItems((prev) => [tmp, ...prev.slice(0,-1)]);
          }
        }
        wasLeft = isLeft;
      }
    })}


  useEffect(() => {
    let optionsRight = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: [1],
    };
    let optionsLeft = {
      root: document.querySelector("#scrollArea"),
      rootMargin: "0px",
      threshold: [1],
    };
    const observerLeft = new IntersectionObserver(handleObserverLeft, optionsLeft);
    const observerRight = new IntersectionObserver(handleObserverRight, optionsRight);
    if (ref.current) observerLeft.observe(ref.current.children[0]);
    if (ref.current) observerRight.observe(ref.current.children[6]);
    return () => {
      if (ref.current) observerLeft.unobserve(ref.current);
      if (ref.current) observerRight.unobserve(ref.current);
    };
  }, [handleObserverLeft, handleObserverRight]);

  return (
    <div
      ref={ref} style={{ width: `${items[items.length - 1] * 300}px`}}
      className={classes.wrapper}
    >
      {items.map((item, i) => (
        <div
          style={{position: "absolute", left: `${item * 300}px`, top: "0"}}
          key={Math.random()*Math.random()}
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


