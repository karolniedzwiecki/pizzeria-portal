import React from 'react';
import styles from './Home.module.scss';
import { Button } from '@material-ui/core';


const Home = () => {
    
    return (
        <div className={styles.component}>
            <h2>Home view</h2>
            <Button variant='contained' size='small' color='secondary'>Click me</Button>

        </div>
    );
};

export default Home;