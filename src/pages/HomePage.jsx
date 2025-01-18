// React libs
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Styles
import styles from '../styles/HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['page-container']}> 
      <div className={styles.container}>
        <h1 className={styles.title}>Melgui</h1>
        <p className={styles.description}>Haciendo cosas bien guapas, espera un poco</p>
        <hr className={styles.separator} />
      </div>
      <div className={styles['buttons-container']}>
        <button className={styles['btn-explore']} onClick={() => navigate('/counter')}>
          Counter
        </button>
      </div>
    </div>
  );
};

export default HomePage;
