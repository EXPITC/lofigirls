import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export function heightValue(
  setHeight: Dispatch<SetStateAction<number>>,
  max: number,
  min: number = 0,
  delay: number,
): void {
  const updateHeightThrottle = throttle(() => setHeight(window.scrollY), delay);
  window.addEventListener('scroll', () => {
    if (window.scrollY >= min && window.scrollY <= max) {
      updateHeightThrottle();
    }
  });
}
export function throttle(cb: Function, delay: number = 1000) {
  let wait = false;
  let leftArgs: any;
  const timer = () => {
    if (leftArgs === null) {
      wait = false;
    } else {
      cb(leftArgs);
      wait = true;
      leftArgs = null;
      setTimeout(timer, delay);
    }
  };
  return (...args: any) => {
    if (wait) {
      leftArgs = args;
      return;
    }
    cb(...args);
    wait = true;
    setTimeout(timer, delay);
  };
}

export function MouseTracker(call: Function, delay:number = 400) {
  const coordinated = [0, 0,];
  const updateMousePositionThrottle = throttle(() => call(coordinated), delay);
  window.addEventListener('mousemove', (e) => {
    coordinated.splice(0, 2, e.offsetX, e.offsetY);
    updateMousePositionThrottle();
  });
}
