import React, {useCallback, useEffect, useRef, useState} from "react";
import {createStyles, makeStyles} from "@material-ui/core";

export const ScrollList = (props) => {
  const classes = useStyles();
  const ref = useRef([]);
  const screen = useRef(null);
  const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6]);

  let prevScrollPosition = window.pageXOffset;

  //lewo
  let wasRight = false;
  const handleObserverRight = useCallback((entries) => {
    entries.forEach(entry => {
      let newScrollPosition = window.pageXOffset;
      //scroll Right;
      if (newScrollPosition > prevScrollPosition) {
        if (entry.isIntersecting) {
          const tmp = items[0] + 7;
          setItems((prev) => [...prev.slice(1), tmp]);
          console.log('pravo')
        }
      }
      prevScrollPosition = newScrollPosition;
    })
  })

  // lewo

  const handleObserverLeft = (entries) => {
    entries.forEach(entry => {
      let newScrollPosition = window.pageXOffset;
      //scroll Right;
      if (newScrollPosition < prevScrollPosition) {
        if (entry.isIntersecting) {
          const tmp = items[items.length-1] - 7;
          setItems((prev) => [tmp, ...prev.slice(0,-1)]);
          console.log('levo')
        }
      }
      prevScrollPosition = newScrollPosition;
    })}

  useEffect(()=>{
    window.scrollTo(150000, 0);
  },[])

  useEffect(() => {
    window.addEventListener('scroll', function(e) {
      console.count('scroll');
    });
    let optionsRight = {
      rootMargin: "0px",
      threshold: 0.1
    };
    let optionsLeft = {
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observerLeft = new IntersectionObserver(handleObserverLeft, optionsLeft);
    const observerRight = new IntersectionObserver(handleObserverRight, optionsRight);
    // if (ref.current) observerLeft.observe(ref.current.children[0]);
    // if (ref.current) ref.current.forEach((card)=>{
    //   observerRight.observe(card);
    // })
    if (ref.current) observerRight.observe(ref.current[6]);
    if (ref.current) observerLeft.observe(ref.current[0]);
    return () => {
      // if (ref.current) observerLeft.unobserve(ref.current);
      if (ref.current) ref.current.forEach((card)=>{
        observerRight.unobserve(card);
      })
    };
  }, [ handleObserverRight]);

  return (
    <div style={{ width: `${300000+((Math.floor(items[items.length - 1] / items.length)) * 300*items.length)}px`}}
      className={classes.wrapper}
    >
      {items.map((item, i) => (
        <div
          style={{position: "absolute", left: `${150000 + (item * 300)}px`, top: "0"}}
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


