import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewEvent.module.scss';

const NewEvent = () => {
    return (
        <div className={styles.component}>
            <Link to={`${process.env.PUBLIC_URL}/tables/events`}>Events</Link>
            <h2>NewEvent view</h2>
        </div>
    );
};

export default NewEvent;