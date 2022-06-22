import React, { VoidFunctionComponent } from 'react';
import styles from './test.module.css';
type props = {
  x: string;
  y: Function;
};
export default function Test({ x, y }: props) {
  return (
    <div
      className={`${styles.main} ${x === 'in' ? styles.in : styles.out} ${
        x === 'out' ? null : null
      }`}
    >
      Test
          <button onClick={() => { y('out') ,console.log(x) }}>out</button>
      <button onClick={() => y('in')}>in</button>
    </div>
  );
}
