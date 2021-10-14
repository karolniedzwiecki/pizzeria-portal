import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NewBooking.module.scss';

const NewBooking = () => {
    return (
        <div className={styles.component}>
            <Link to={`${process.env.PUBLIC_URL}/tables/booking`}>Booking</Link>
            <h2>NewBooking view</h2>
        </div>
    );
};

export default NewBooking;