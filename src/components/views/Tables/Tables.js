import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Tables.scss';

const Tables = () => {
    return (
        <div className={styles.component}>
            <h2>Tables view</h2>
            <Link to={`${process.env.PUBLIC_URL}/tables/booking`}>Booking</Link>
            <Link to={`${process.env.PUBLIC_URL}/tables/events`}>Events</Link>
        </div>
    );
};

export default Tables;