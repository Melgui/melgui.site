//React libs
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//Styles
import styles from '../styles/Header.module.css';

const Header = () => {
  const navigate = useNavigate();

  const [isNightMode, setIsNightMode] = useState(
    localStorage.getItem('isNightMode') === 'true'
  );

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('night');
    } else {
      document.body.classList.remove('night');
    }
    localStorage.setItem('isNightMode', isNightMode);
  }, [isNightMode]);

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <header className={`${styles.header} ${isNightMode ? styles.night : ''}`}>
      <button className={styles.homeBtn} onClick={() => navigate('/')}>
        🏠 Home
      </button>
      <button
        id="toggleTheme"
        className={styles['theme-toggle-btn']}
        onClick={toggleTheme}
      >
        {isNightMode ? '🌞' : '🌙'}
      </button>
    </header>
  );
};

export default Header;
