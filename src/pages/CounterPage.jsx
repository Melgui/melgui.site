import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/CounterPage.module.css';

const CounterPage = ({ isNightMode }) => {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? parseInt(savedCount) : 0;
  });

  const intervalRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const handleReset = () => setCount(0);

  const handlePress = (change) => {
    const increment = () => setCount((prevCount) => prevCount + change);
    increment();
    intervalRef.current = setInterval(increment, 100);
  };

  const handleRelease = () => clearInterval(intervalRef.current);

  return (
    <div className={`${styles.counterPage} ${isNightMode ? styles.night : ''}`}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contador</h1>
        <div className={styles.counter}>
          <button
            className={styles.btn}
            onMouseDown={() => handlePress(-1)}
            onMouseUp={handleRelease}
            onMouseLeave={handleRelease}
          >
            -
          </button>
          <span className={styles.count}>{count}</span>
          <button
            className={styles.btn}
            onMouseDown={() => handlePress(1)}
            onMouseUp={handleRelease}
            onMouseLeave={handleRelease}
          >
            +
          </button>
        </div>
        <button className={styles.resetBtn} onClick={handleReset}>
          Restablecer
        </button>
      </div>
    </div>
  );
};

export default CounterPage;
